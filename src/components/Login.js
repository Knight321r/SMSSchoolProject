import React, { useState } from 'react'   
import './Login.css';
import smslogo from '../images/smslogo.jpeg'
import { useNavigate } from 'react-router-dom';

function Login() {
    const navigate = useNavigate()
    const [username, setusername] = useState("")
    const [password, setpassword] = useState("")

    const handleusername = (e) => {
        setusername(e.target.value)
    }

    const handlepassword = (e) => {
        setpassword(e.target.value)
    }

    const role = "admin";

    const handlereg = () => {
        navigate('/Register')
    }

  return (
    <div className='login'>
        <div className='start'>
          <img src={smslogo} alt='Logo'></img>
        </div>
        <div className='end'>
          <h2>Sign in to your account</h2>
          <label for = "username">Email</label>
          <input id = "username" type = "text" onChange={(e) => handleusername(e)} ></input>
          <label for = "password">Password</label>
          <input id = "password" type = "password" onChange={(e) => handlepassword(e)} ></input>
          <button>Log In</button>
          {role === "admin" ? <button onClick={handlereg}>Create account ?</button> : null}
        </div>
    </div>
  )
}

export default Login
