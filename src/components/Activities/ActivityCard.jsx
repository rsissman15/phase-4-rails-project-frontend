
import React from 'react'
import { useNavigate } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';


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
  

const ActivityCard = ({activity}) => {
    const classes = useStyles();
    const navigate=useNavigate();

   
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
            <Button onClick={()=>navigate(`/activities/${activity.id}`)} color="primary">Click for More Info</Button>
          </CardContent>
        </CardActionArea>
      </Card> 
       
    )
  }

export default ActivityCard