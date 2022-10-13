import React from 'react'
import {Link} from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  }
}));

const Navbar = ({loggedIn,logoutUser,currentUser}) => {
  const classes = useStyles();

  const loggedOutLinks=()=>{
    return(
      <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
             <Link to="/">Homepage</Link>
          </Typography>
          <Button color="inherit">
            <Link to="/login">Login</Link>
          </Button>
          <Button color="inherit">
            <Link to="/signup">Signup</Link>
          </Button>
        </Toolbar>
      </AppBar>
    </div>

    )
  }

  const handleLogout=e=>{
    e.preventDefault();
    logoutUser();
  }

  const loggedInLinks=()=>{
    return(
      <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
             <Link to="/">Homepage</Link>
          </Typography>
          <Button color="inherit">
            <a href="#"onClick={handleLogout}>Logout</a>
          </Button>
          <Button color="inherit">
            <Link to="/activities">Activities</Link>
          </Button>
          <Button color="inherit">
            <Link to="/reservations">Rerservations</Link>
          </Button>
        </Toolbar>
      </AppBar>
    </div>

    )
  }

  

  return (
    <div>
      {loggedIn ? loggedInLinks():loggedOutLinks() }
     
    </div>
  );
}



export default Navbar