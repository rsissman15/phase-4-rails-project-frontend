import React from 'react'
// import { useParams } from 'react-router-dom'
// import {header, getToken } from '../Globals'

const ReservationForm = ({activities,submitReservation}) => {
    // const { id }=useParams();

    // let a=activities.find(a=>a.id.toString()===id)
    // let activityid=a.id
 
    // const [date,setDate]=useState({
    //     date:"",

    //   })


    //   function handleChange(e){
    //     setDate({date:e.target.value})
    //   }
    
    //   function handleSubmit(e){
    //     e.preventDefault();
    //     fetch(`http://localhost:3001/activities/${activityid}/reservations`, {
    //       method: "POST",
    //       headers: {
    //         ...header,
    //         ...getToken()


    //       },
    //       body: JSON.stringify(date)
    //     })
    //       .then(resp => resp.json())
    //       .then(data => submitReservation(data))
    //   }
    
      return (
        <div className="container">
          <form className="add-activity-form">
            <h3>Select a Date</h3>
            <input
              type="date"
              name="date"
            />
            <input
                type="submit"
                name="submit"
                value="Update Date"
                className="submit"
            />
          </form>
        </div>
      )
}

export default ReservationForm