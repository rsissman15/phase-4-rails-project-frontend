import React,{useState,useEffect} from 'react'
import { baseUrl } from '../Globals'
import { useNavigate } from 'react-router-dom'
import Errors from '../../Styles.js/Errors'
import { FormControlLabel } from '@material-ui/core'
import FormField from '../../Styles.js/FormField'

const Login = ({logInUser,loggedIn}) => {
    const formContStyle = {
        padding: '10px',
        width: '60%',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 'auto',
        textAlign: 'left',
        fontFamily: 'Roboto'
    }
    const inputStyle = {
        fontSize: '16px',
        fontFamily: 'Roboto',
        borderRadius: '4px',
        borderColor: 'none',
        borderStyle: 'none',
        height: '30px',
        boxShadow: 'rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
        padding: '5px',
        paddingLeft: '20px',
        marginBottom: '20px',
        width: '95%',
        marginTop: '10px'
    }

    const postButton = {
        backgroundColor: '#539987',
        padding: '5px',
        borderRadius: '4px',
        borderStyle: 'none',
        fontFamily: 'Roboto',
        height: '50px',
        width: '20%',
        color: 'white',
        fontWeight: 'bold',
        fontSize: '18px',
        float: 'left'
    }

    

    const [username,setUsername]=useState('')
    const[password,setPassword]=useState('')
    const [errors,setErrors]=useState('')
    const navigate=useNavigate();

    useEffect(()=>{
      if(loggedIn){
        navigate('/activities')
      }
      
     },[loggedIn])
  

   

    const handleSubmit=(e)=>{
        
        e.preventDefault();
        const strongParams = {
          username,
          password
        }
        
        fetch(baseUrl+'/login',{
            method:'POST',
            headers: {
                "Accept":"application/json",
                "Content-Type":'application/json'
              },
            body:JSON.stringify(strongParams)
        })
            //.then(res=>res.json())

            .then((response) => {
              if (response.ok) {
                  response.json().then((data) =>{
                    logInUser(data.user)
                    localStorage.setItem('jwt', data.token)
                    navigate('/activities')  
                  });
              } 
              else {
                    response.json().then((errorData) =>  setErrors(errorData.errors));
              }
          })
    }

    

  return (
    <div style={formContStyle}>
        <h2>Log In</h2>
           <form onSubmit={handleSubmit}>
               <br></br>
               <FormField>
               <label>Username</label><br></br>
                <input style={inputStyle} autoComplete="username" type="text" id="username" name="username" value={username} onChange={e=>setUsername(e.target.value)}></input><br></br>
                <label>Password</label><br></br>
                <input style={inputStyle} autoComplete="current-password" type="password" id="password" name="password" value={password} onChange={e=>setPassword(e.target.value)}></input><br></br>
                </FormField>
                <button style={postButton} type="submit">Log In</button>
                <h1>
                   {errors ? <Errors>{errors}</Errors>: null}  
                </h1>
           </form>

    </div>
    )
}

export default Login