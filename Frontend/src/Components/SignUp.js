import React, { useState } from 'react';
import './SignUp.css';
import Validation from './SignUpValidation';

function SignUp() {

  const [values , setValues] = useState({
    name :'',
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
    <>
      <div className='signup-container'>
      <h1 className='signup-heading'>SignUp</h1>
            
          <form action='' className='signup-form' onSubmit={handleSubmit}>
            <div className='signup-name'>
            
            <input type='text' name='name' placeholder='First Name' className='form-field' onChange={handleInput}></input>
            <input type='text' name='name' placeholder='Last Name' className='form-field' onChange={handleInput}></input>
            {errors.name && <span className='text-danger'>{errors.name}</span>}
            </div>
            <h2>Email and Password</h2>
            <input type='email' name='email' placeholder='Email' className='form-field' onChange={handleInput}></input>
            {errors.email && <span className='text-danger'>{errors.email}</span>}
            <input type='password' name='password' placeholder='Password' className='form-field' onChange={handleInput}></input>
            {errors.password && <span className='text-danger'>{errors.password}</span>}
            <h2>Confirm Password</h2>
            <input type='password' name='password' placeholder='Password' className='form-field' onChange={handleInput}></input>
            <ul className='signup-ul'>
              <li>A minimum of 19 characters</li>
              <li>At least one number , Uppercase , lowercase</li>
              <li>At least one symbol</li>
           </ul>
            <button type='submit' className='signup-btn' >Create Your Account</button>
            <h5>Already have an account?<a href='/login'>Log in</a></h5>
          </form>

      </div>
    </>

  )
}

export default SignUp;