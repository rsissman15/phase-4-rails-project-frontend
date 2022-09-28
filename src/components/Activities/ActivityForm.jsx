import React,{useState} from 'react'
import { useParams } from 'react-router-dom'

const ActivityForm = ({activities,submitReservation}) => {
    const { id }=useParams();

    let a=activities.find(a=>a.id.toString()===id)
    let activityid=a.id
 
    const [date,setDate]=useState({
        date:'',
        activity_id:activityid
      })

    

     

  

    
      function handleChange(e){
        setDate(e.target.value)
      }
    
      function handleSubmit(e){
        e.preventDefault();
        const addReservation={...date}
        fetch(`http://localhost:3001/activities/${activityid}/reservations`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(addReservation)
        })
          .then(resp => resp.json())
          .then(data => submitReservation(data))
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
        </div>
      )
}

export default ActivityForm