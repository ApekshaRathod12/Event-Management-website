import React, { useState } from 'react';
import './ContactUs.css';

function ContactUs() {
  const [name,setName] = useState()
  const [nameData,setNameData] = useState()


  const onSubmit=((e)=>{
    e.preventDefault()
    if(name){
      setNameData(name)
    }
  })

  return (
    <div className='contact'>
    <h1 className='contact-heading'>Contact Us</h1>
      <h3 className='contact-subheading'>"We will be glad to become a part of your unique wedding ”</h3>
      <div className='contact-class'>
      <div className='contact-subheading1'>
        <ul className='about-ul contact-ul'>
        <li>+91 7507859851</li>
          <li>+91 7842568745</li>
          <li>info@eventmanagement.com</li>
          <li> DLF PHASE - 2 L-25/9
  Near by Privat Hospital Gurugram,
  Haryana 122002</li>
        </ul>
      </div>
      <form>
   
        <div className='form-container'>
        <h2 className='contact-subheading2'>Contact Form</h2>
          <input type='text' name='name' value={name||''} onChange={(e)=>{setName(e.target.value)}} placeholder='Enter Your Name' className='form-field'></input>
          <input type='text' name='email-addr' placeholder='Enter Your E-mail Address' className='form-field'></input>
          <input type='text' name='phone-no' placeholder='Enter Your Name' className='form-field'></input>
          <h2 className='contact-subheading2'>Event Type</h2>
          <input type='text' name='event' placeholder='Enter Event Type' className='form-field'></input>
          <input type='text' name='date' placeholder='Enter Event Date' className='form-field'></input>
          <input type='text' name='venue' placeholder='Enter Event Venue' className='form-field'></input>
          <button className='contact-btn' onClick={onSubmit}>Submit</button>
        </div>
      </form>
      <h1>{nameData}</h1>
      </div>
      
    </div>
  )
}

export default ContactUs;