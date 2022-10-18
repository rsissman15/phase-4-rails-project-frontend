import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';




const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const ReservationTable = ({reservations,handleDelete}) => {
  const classes = useStyles();
  const rows=reservations

  

  
    return (
      <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">Name</TableCell>
            <TableCell align="center">Date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell align="center" component="th" scope="row">
                {row.activity.name}
              </TableCell>
              <TableCell align="center" component="th" scope="row">
                {row.date}
              </TableCell>
               <TableCell>
                 <Button variant="contained" color="primary" onClick={()=>handleDelete(row)}>Delete</Button>
               </TableCell>
               <TableCell>
                 <Button variant="contained" color="primary">Update Date</Button> 
               </TableCell>
             </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
        
}

export default ReservationTable