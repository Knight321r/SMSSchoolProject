import React, { useState } from 'react'   
import './Register.css';
import smslogo from '../images/smslogo.jpeg'

function Register() {

    const [username, setusername] = useState("")
    const [password, setpassword] = useState("")

    const handleusername = (e) => {
        setusername(e.target.value)
    }

    const handlepassword = (e) => {
        setpassword(e.target.value)
    }

    const handlereg = () => {
        //do the register stuff
    }

    const role = "admin";

  return (
    <div className='register'>
    <div className='start'>
    <img src={smslogo} alt='Logo'></img>
    </div>
    <div className='end'>
        <h2>Sign in to your account</h2>
        <label for = "username">Email</label>
        <input id = "username" type = "text" onChange={(e) => handleusername(e)} ></input>
        <label for = "password">Password</label>
        <input id = "password" type = "password" onChange={(e) => handlepassword(e)} ></input>
        <button onClick={handlereg}>Register</button>
    </div>
    </div>
  )
}

export default Register
