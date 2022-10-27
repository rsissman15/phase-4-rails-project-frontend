import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
import Errors from '../../../Styles.js/Errors'
import { baseUrl, getToken, header } from '../../Globals'


// import { useParams } from 'react-router-dom'
// import {header, getToken } from '../Globals'

const ReservationForm = ({handleUpdateDate,reservation}) => {

   const [date,setDate]=useState({
        date:""
     })

    const [errors,setErrors]=useState('')    
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
    }) .then((response) => {
      if (response.ok) {
          response.json().then((data) =>{
            handleUpdateDate(data)
            navigate('/activities')

          });
      } 
      else {
         response.json().then((errorData) =>  setErrors(errorData.errors))
        
      }
    })
    // .then(res=>res.json())
    // .then(data=>{
      
    //   handleUpdateDate(data)
    //   navigate('/activities')
      
    // })
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
          {errors ? <Errors>{errors}</Errors>: null}
        </div>
      )
}

export default ReservationForm