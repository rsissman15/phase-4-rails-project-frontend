
import React,{useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import ReservationTable from './ReservationTable'

const ReservationsList = ({reservations,handleDelete, handleUpdateDate,loggedIn}) => {

  const navigate=useNavigate()

  useEffect(()=>{
    if(!loggedIn){
      navigate('/login')
    }
  },[loggedIn])
  
  const renderReservations=reservations.map(reservation => <ReservationTable key={reservation.id} reservation={reservation} handleDelete={handleDelete} handleUpdateDate={handleUpdateDate}/>)

  return (
    <div>
      <li>
        {renderReservations}
      </li>
      
    </div>
    )
}
export default ReservationsList