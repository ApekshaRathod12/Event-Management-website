import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Nav from './Components/Nav';
import Home from './Components/Home';
import AboutUs from './Components/AboutUs';
import Events from './Components/Events';
import ContactUs from './Components/ContactUs';
import SignUp from './Components/SignUp';
import LogIn from './Components/LogIn';
import Birthday from './Components/Birthday';



function App() {
  return (
    <>
    <Nav/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/aboutus' element={<AboutUs/>}/>
      <Route path='/events' element={<Events/>}/>
      <Route path='/contactus' element={<ContactUs/>}/>
      <Route path='/signup' element={<SignUp/>}/>
      <Route path='/login' element={<LogIn/>}/>
      <Route path='/birthday' element={<Birthday/>}/>
    </Routes>
   
    </>
  );
}

export default App;
