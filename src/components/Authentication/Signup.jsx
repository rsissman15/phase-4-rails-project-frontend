import React,{useState,useEffect} from 'react'
import { baseUrl } from '../Globals'
//import { header } from '../Globals'
import { useNavigate } from 'react-router-dom'

const Signup = ({logInUser,loggedIn}) => {
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
    const navigate=useNavigate();

   useEffect(()=>{
    if(loggedIn){
        navigate('/activities')
    }
    
   },[loggedIn])


    const handleSubmit=(e)=>{
        
        e.preventDefault();
        const strongParams = {
            user:{
                username,
                password
            }
        }
        
        fetch(baseUrl+'/users',{
            method:'POST',
            headers: {
                "Accept":"application/json",
                "Content-Type":'application/json'
              },
            body:JSON.stringify(strongParams)
        })
            .then(res=>res.json())
            .then(data=>{
                logInUser(data.user)
                console.log(data)
                localStorage.setItem('jwt', data.token)
                navigate('/activities')
            })
        
    }

    

  return (
    <div style={formContStyle}>
        <h2>Create Account</h2>
           <form onSubmit={handleSubmit}>
               <br></br>
               <label>Username</label><br></br>
                <input style={inputStyle} autoComplete="username" type="text" id="username" name="username" value={username} onChange={e=>setUsername(e.target.value)}></input><br></br>
                <label>Password</label><br></br>
                <input style={inputStyle} autoComplete="current-password" type="password" id="password" name="password" value={password} onChange={e=>setPassword(e.target.value)}></input><br></br>
                <button style={postButton} type="submit">Create Account</button>
           </form>

    </div>
    )
}

export default Signup