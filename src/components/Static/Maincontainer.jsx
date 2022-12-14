import React,{useState} from 'react'
import Navbar from '../Navigation/Navbar'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Signup from '../Authentication/Signup'
import Login from '../Authentication/Login'
import Home from './Home'
import { useEffect } from 'react'
import { baseUrl, header, getToken } from '../Globals'
import ActivityList from '../Activities/ActivityList'
import Activity from '../Activities/Activity'
import ReservationsList from '../Activities/Reservations/ReservationsList'



const Maincontainer = () => {
  const [currentUser,setCurrentUser]=useState({})
  const [loggedIn,setLoggedIn]=useState(false)
  const [activities,setActivities]=useState([])
  const [reservations,setReservations]=useState([])

  const logInUser=(user)=>{
    setCurrentUser(user)
    setLoggedIn(true)
  }


  useEffect(()=>{
    const token=localStorage.getItem('jwt')
    if(token && !loggedIn){
      fetch(baseUrl+'/get-current-user',{
        method:'GET',
        headers:{
          ...header,
          ...getToken()
        }
      })
      .then(res=>res.json())
      .then(user=>logInUser(user)
)
    }
    if(loggedIn){
      fetch(baseUrl+'/activities',{
        headers:{
          ...header,
          ...getToken()
        }
      })
      .then(res=>res.json())
      .then(data=>setActivities(data))

    }
    if(loggedIn){
      fetch(baseUrl+`/users/${currentUser.id}/reservations`,{
        headers:{
          ...header,
          ...getToken()
        }
      })
      .then(res=>res.json())
      .then(data=>{
        console.log(data)
        setReservations(data)
       
      })
    }
 
    
  },[loggedIn])


  const logoutUser=()=>{
    setCurrentUser({})
    setLoggedIn(false)
    localStorage.removeItem('jwt')

  }


 

  const submitReservation=(newReservation)=>{
    setReservations([...reservations,newReservation])
  }

  function handleDelete(reservation){
    fetch(baseUrl+`/reservations/${reservation.id}`,{
      method:'DELETE',
      headers:{
        ...getToken()
      }
    })
    .then(()=>{
      setReservations(reservations.filter(currentReservation=>currentReservation.id !== reservation.id))
    })
  }

  function handleUpdateDate(reservation){
    setReservations(reservations.map((oldReservation) => oldReservation.id !== reservation.id ? oldReservation : { ...oldReservation, date: reservation.date}))
  }

  return (
    <Router>
        <Navbar loggedIn={loggedIn} logoutUser={logoutUser} currentUser={currentUser}/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/signup" element={<Signup logInUser={logInUser} loggedIn={loggedIn}/>}/>
            <Route path="/login" element={<Login logInUser={logInUser} loggedIn={loggedIn}/>}/>
            <Route path="/activities" element={<ActivityList loggedIn={loggedIn} activities={activities}/>}/>
            <Route path="/activities/:id" element={<Activity loggedIn={loggedIn} activities={activities} submitReservation={submitReservation}/>}/>
            <Route path="/reservations" element={<ReservationsList reservations={reservations} handleDelete={handleDelete} handleUpdateDate={handleUpdateDate} currentUser={currentUser} loggedIn={loggedIn}/>}/>
        </Routes>

    </Router>
    
    
  )
}

export default Maincontainer