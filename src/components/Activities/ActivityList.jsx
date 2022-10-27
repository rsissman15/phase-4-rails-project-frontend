import React,{useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import ActivityCard from './ActivityCard';
import Grid from '@material-ui/core/Grid';


const ActivityList = ({loggedIn,activities}) => {
    
  const navigate=useNavigate();

  useEffect(()=>{
    if(!loggedIn){
      navigate('/login')
    }
  },[loggedIn])

  const activityCards=activities.map(activity=><ActivityCard key={activity.id} activity={activity}/>)
  

  return (
    <Grid container>
      {activityCards}
    </Grid>
  )
}

export default ActivityList