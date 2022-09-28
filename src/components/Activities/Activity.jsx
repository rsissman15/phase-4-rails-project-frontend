import React from 'react'
import { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import ActivityForm from './ActivityForm';


  const useStyles = makeStyles({
    root: {
      width: 400,
      paddingLeft:'100px',
      paddingRight:'100px',
      margin: "0 4px",
    },
    media: {
      height: 300,
    },
    
  });


const Activity = ({activities,loggedIn,submitReservation}) => {
  const [activity,setActivity]=useState([])
  const[showForm,setShowForm]=useState(false)

  const { id }=useParams();
  const navigate=useNavigate();
  const classes = useStyles();


  useEffect(()=>{
    const a=activities.find(a=>a.id.toString()===id)
    setActivity(a)
  },[id])

  useEffect(()=>{
    if(!loggedIn){
      navigate('/login')
    }
  },[loggedIn])

  const handleClick=()=>{
    setShowForm(click=>!click)
  }


  return (
    <Card className={classes.root} border='5px solid red'>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={activity.image_url}
            title={activity.name}
          />
          <CardContent>
            <Typography gutterBottom variant="h3" component="h1">
            {activity.name}
            </Typography>
            <Typography>{activity.description}</Typography>
            <Typography>${activity.price}</Typography>
            <Typography>{activity.date}</Typography>
            {showForm ? <ActivityForm activities={activities} submitReservation={submitReservation}/> : null}
              <Button onClick={handleClick}> {showForm ? null: 'Click to Book'}</Button>
          </CardContent>
        </CardActionArea>
      </Card> 
  )
}

export default Activity