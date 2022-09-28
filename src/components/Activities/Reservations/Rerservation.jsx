import React from 'react'
import ReservationCard from './ReservationCard'

const Rerservation = ({reservations}) => {

  const renderReservations=reservations.map(reservation=><ReservationCard key={reservation.id} reservation={reservation}/>)
  
  return (
    <div>
      {renderReservations}
    </div>
  )
}

export default Rerservation