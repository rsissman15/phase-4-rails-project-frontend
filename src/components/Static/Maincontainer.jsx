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


const Maincontainer = () => {
  const [currentUser,setCurrentUser]=useState({})
  const [loggedIn,setLoggedIn]=useState(false)
  const [activities,setActivities]=useState([])

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
      .then(user=>logInUser(user))
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
  },[loggedIn])

  const logoutUser=()=>{
    setCurrentUser({})
    setLoggedIn(false)
    localStorage.removeItem('jwt')
  }



  return (
    <Router>
        <Navbar loggedIn={loggedIn} logoutUser={logoutUser } currentUser={currentUser}/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/signup" element={<Signup logInUser={logInUser} loggedIn={loggedIn}/>}/>
            <Route path="/login" element={<Login logInUser={logInUser} loggedIn={loggedIn}/>}/>
            <Route path="/activities" element={<ActivityList loggedIn={loggedIn} activities={activities}/>}/>
            <Route path="/activities/:id" element={<Activity loggedIn={loggedIn} activities={activities}/>}/>
        </Routes>

    </Router>
    
    
  )
}

export default Maincontainer