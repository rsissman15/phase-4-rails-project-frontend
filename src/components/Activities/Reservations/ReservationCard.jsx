import React from 'react'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';



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
  

const ReservationCard = ({reservation}) => {
  const classes = useStyles();
  

  
    return (   
        <Card className={classes.root} border='5px solid red'>
        <CardActionArea>
          <CardMedia
            className={classes.media}
          />
          <CardContent>
            <Typography gutterBottom variant="h3" component="h1">
            {reservation.date}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card> 
    )
}

export default ReservationCard