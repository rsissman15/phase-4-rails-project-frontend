import React,{useState} from 'react'
import Navbar from '../Navigation/Navbar'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Signup from '../Authentication/Signup'
import Login from '../Authentication/Login'
import Home from './Home'
import { useEffect } from 'react'
import { baseUrl, header, getToken } from '../Globals'
import ActivityList from '../Activities/ActivityList'

const Maincontainer = () => {
  const [currentUser,setCurrentUser]=useState({})
  const [loggedIn,setLoggedIn]=useState(false)

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
  },[])

  const logoutUser=()=>{
    setCurrentUser({})
    setLoggedIn(false)
    localStorage.removeItem('jwt')
  }



  return (
    <Router>
        <Navbar loggedIn={loggedIn} logoutUser={logoutUser}/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/signup" element={<Signup logInUser={logInUser} loggedIn={loggedIn}/>}/>
            <Route path="/login" element={<Login logInUser={logInUser} loggedIn={loggedIn}/>}/>
            <Route path="/activities" element={<ActivityList loggedIn={loggedIn}/>}/>
        </Routes>

    </Router>
    
    
  )
}

export default Maincontainer