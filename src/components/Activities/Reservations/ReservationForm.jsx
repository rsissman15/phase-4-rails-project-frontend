import React,{useState} from 'react'
import { baseUrl, getToken, header } from '../../Globals'


// import { useParams } from 'react-router-dom'
// import {header, getToken } from '../Globals'

const ReservationForm = ({reservation,handleUpdateDate}) => {
    const [date,setDate]=useState({date:"",})

    


   function handleChange(e){
    setDate(e.target.value)
   }



   function handleUpdate(){
    fetch(baseUrl+`/reservations/${reservation.id}`,{
        method:'PATCH',
        headers:{
            ...header,
            ...getToken()
        },
        body:JSON.stringify({'date':date})
    })
    .then(res=>res.json())
    .then(data=>{
      handleUpdateDate(data.date)
    })
   }
    
      return (
        <div className="container">
          <form className="add-activity-form">
            <h3>Select a Date</h3>
            <input
              type="date"
              name="date"
              onChange={handleChange}
            />
            <input
                type="submit"
                name="submit"
                value="Update Date"
                className="submit"
                onClick={handleUpdate}
            />
          </form>
        </div>
      )
}

export default ReservationForm