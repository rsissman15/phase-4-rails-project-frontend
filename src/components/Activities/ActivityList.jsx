import React,{useEffect} from 'react'
import { useNavigate } from 'react-router-dom'


const ActivityList = ({loggedIn}) => {
    const navigate=useNavigate();

    useEffect(()=>{
      if(!loggedIn){
          navigate('/login')
      }
      
     },[loggedIn])

  return (
    <div>
        <h1>Activities</h1>
    </div>
  )
}

export default ActivityList