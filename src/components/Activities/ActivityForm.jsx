import React,{useState} from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Errors from '../../Styles.js/Errors';
import {header, getToken } from '../Globals'

const ActivityForm = ({activities,submitReservation}) => {
    const { id }=useParams();
 
    const [date,setDate]=useState({
        date:"",

      })

    const [errors,setErrors]=useState('')

    const navigate=useNavigate()

     let a=activities.find(a=>a.id.toString()===id)
     let activityid=a.id




      function handleChange(e){
        setDate({date:e.target.value})
      }
    
      function handleSubmit(e){
        e.preventDefault();
        fetch(`http://localhost:3001/activities/${activityid}/reservations`, {
          method: "POST",
          headers: {
            ...header,
            ...getToken()


          },
          body: JSON.stringify(date)
        })
        .then((response) => {
          if (response.ok) {
              response.json().then((data) =>{
                submitReservation(data)
                navigate('/reservations') 

              });
          } 
          else {
             response.json().then((errorData) =>  setErrors(errorData.errors))
            
          }
      })
          //.then(resp => resp.json())
          // .then(data => {
          //   submitReservation(data)
          // })
      }
    
      return (
        <div className="container">
          <form className="add-activity-form" onSubmit={handleSubmit}>
            <h3>Select a Date</h3>
            <input
            onChange={handleChange}
              type="date"
              name="date"
            />
            <input
                type="submit"
                name="submit"
                value="Book Now"
                className="submit"
            />
          </form>
          {errors ? <Errors>{errors}</Errors>: null}
        </div>
      )
}

export default ActivityForm