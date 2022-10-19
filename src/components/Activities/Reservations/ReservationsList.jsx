import React from 'react'
import ReservationTable from './ReservationTable'

const ReservationsList = ({reservations,handleDelete, handleUpdateDate}) => {

  
  const renderReservations=reservations.map(reservation=><ReservationTable key={reservation.id} reservation={reservation} handleDelete={handleDelete} handleUpdateDate={handleUpdateDate}/>)

  return (
    <div>
      {renderReservations}
    </div>
    )
}
export default ReservationsList