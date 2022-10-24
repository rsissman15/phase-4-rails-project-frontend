import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { baseUrl, getToken, header } from '../../Globals'


// import { useParams } from 'react-router-dom'
// import {header, getToken } from '../Globals'

const ReservationForm = ({handleUpdateDate,reservation}) => {

   const [date,setDate]=useState({
        date:""

      })
    const navigate=useNavigate()

  

   function handleChange(e){
    setDate(e.target.value)
   }





   function handleSubmit(e){
    e.preventDefault()
    fetch(baseUrl+`/reservations/${reservation.id}`,{
        method:'PATCH',
        headers:{
            ...header,
            ...getToken()
        },
        body:JSON.stringify({date: date})
    })
    .then(res=>res.json())
    .then(data=>{
      handleUpdateDate(data)
      navigate('/activities')
      
    })
   }
    
      return (
        <div className="container">
          <form className="add-activity-form" onSubmit={handleSubmit}>
            <h3>Select a Date</h3>
            <input
              type="date"
              onChange={handleChange}
              value={date}
            />
            <button type="submit">Update Reservation</button>
          </form>
        </div>
      )
}

export default ReservationForm