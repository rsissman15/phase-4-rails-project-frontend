
import React,{useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import ReservationTable from './ReservationTable'

const ReservationsList = ({reservations,handleDelete, handleUpdateDate,loggedIn, currentUser}) => {

  const navigate=useNavigate()

  useEffect(()=>{
    if(!loggedIn){
      navigate('/login')
    }
  },[loggedIn])
  
  const renderReservations=reservations.map(reservation => <ReservationTable key={reservation.id} reservation={reservation} handleDelete={handleDelete} handleUpdateDate={handleUpdateDate} currentUser={currentUser}/>)

  return (
    <div>
      <h1>Reservations</h1>
        {renderReservations}
      
    </div>
    )
}
export default ReservationsList