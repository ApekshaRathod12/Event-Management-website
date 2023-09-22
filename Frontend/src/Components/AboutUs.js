import React from 'react';
import './AboutUs.css';

function AboutUs() {
const myfun = ()=>{
  
}

  return (
    <>
      <div className='about'>
      <img src='https://i.pinimg.com/originals/89/1d/81/891d81e6ef3fa5bdd3e5da782a834745.jpg' className='about-img'></img>
      <div className='ah'> 
        <h1 className='about-heading'>AboutUs</h1>
        <h3 className='about-subheading'>Events is a pioneering Event Management Company in Pune and Wedding Planner operating in Western India.
      Welcome to our event management website! We are a dedicated team of professionals who specialize in creating unforgettable experiences. From corporate conferences and product launches to weddings and social gatherings, we bring your vision to life with meticulous planning and flawless execution.

With years of experience in the industry, we have built a reputation for delivering exceptional events that exceed expectations. Our team is comprised of skilled event planners, designers, and coordinators who work seamlessly together to ensure every detail is taken care of.</h3>
      </div>
      </div>
      <div className='about-cls'>
      <div className='about-link'>
        <h1>Websites</h1>
        <ul className='about-ul'>
          <li>Home</li>
          <li>About Us</li>
          <li>Services</li>
          <li>Blog</li>
          <li>Contact Us</li>
        </ul>
      </div>
      <div className='about-contact'>
      <h1>Contact Us</h1>
        <ul className='about-ul'>
          <li>+91 7507859851</li>
          <li>+91 7842568745</li>
          <li>info@eventmanagement.com</li>
        </ul>
      </div>
      <div className='about-form'>
      <h1>Contact Form</h1>
      <ul className='about-ul'>
        <li>
        <input type='text' name='name' placeholder='Enter Your Name' className='form-field'></input>
        </li>
        <li><input type='text' name='email-addr' placeholder='Enter Your E-mail Address' className='form-field'></input></li>
        <li><input type='text' name='phone-no' placeholder='Enter Your Phone No.' className='form-field'></input></li>
        <li><button onClick={myfun}>Send</button></li>
      </ul>
      
          
          
      </div>
      </div>
    </>
    
  )
}

export default AboutUs; 