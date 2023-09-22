import React, { useState } from 'react';
import './LogIn.css';
import Validation from './LoginValidation';

function LogIn() {

  const [values , setValues] = useState({
    email :'',
    password: ''
  })

  const [errors , setErrors] = useState({})

  const handleInput=(event)=>{
    setValues(prev => ({...prev , [event.target.name]:[event.target.value]}))
  }


  const handleSubmit=(event)=>{
    event.preventDefault();
    setErrors(Validation(values));
  }

  return (

    <div className='login-container'>
        <h1 className='login-heading'>Log In</h1>
        <form action='' className='login-form' onSubmit={handleSubmit} >
        <h2>Email</h2>
        <input type='email' name='email' placeholder='Email' className='form-field' onChange={handleInput}></input>
        {errors.email && <span className='text-danger'>{errors.email}</span>}
        <h2>Password</h2>
            <input type='password' name='password' placeholder='Password' className='form-field' onChange={handleInput}></input>
            {errors.email && <span className='text-danger'>{errors.email}</span>}
            <button type='submit' className='login-btn' >Log In</button>
            <h5>New User?<a href='/signup'>SignUp</a></h5>
        </form>
    </div>
  )
}

export default LogIn