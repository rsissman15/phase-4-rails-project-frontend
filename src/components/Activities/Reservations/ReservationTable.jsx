import React,{useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import ReservationForm from './ReservationForm';




const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const ReservationTable = ({reservation,handleDelete,handleUpdateDate}) => {
  const classes = useStyles();
  const[showForm,setShowForm]=useState(false)
  
   
  const handleClick=()=>{
    setShowForm(click=>!click)
  }



  
    return (
      <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableBody>
            <TableRow key={reservation.id}>
              <TableCell align="center" component="th" scope="row">
                {reservation.date}
              </TableCell>
               <TableCell>
                 <Button variant="contained" color="primary" onClick={()=>handleDelete(reservation)}>Delete</Button>
               </TableCell>
               <TableCell>
               {showForm ? <ReservationForm reservation={reservation} handleUpdateDate={handleUpdateDate}/> : null}
                  <Button onClick={()=>handleClick(reservation)}> {showForm ? null : 'Update Date'}</Button>
               </TableCell>
             </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
        
}

export default ReservationTable