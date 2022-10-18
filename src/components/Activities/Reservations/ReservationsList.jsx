import React from 'react'
import ReservationTable from './ReservationTable'

const ReservationsList = ({reservations,handleDelete}) => {



    const renderReservations=reservations.map(reservation=><ReservationTable key={reservation.id} reservation={reservation} handleDelete={handleDelete}/>)

  return (
    <div>{renderReservations}</div>
  )
}

export default ReservationsList