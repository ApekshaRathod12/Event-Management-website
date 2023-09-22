import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';


function Home() {
  return (
    <>
      <div className='home-cls'>
    <div className='hh'>
    <h1 className='home-heading'>Celebrate With Us</h1>
    <h2 className='home-subheading'>A Platform to manage your events </h2>
    <h2 className='home-subheading'>Trusted by 150000+ users</h2>
    
    </div>
    
      {/* <img src='https://th.bing.com/th/id/OIP.mX1svWkOwXKDyGL29LIXwwHaE8?pid=ImgDet&rs=1' className='home-img'></img> */}
      <img src='https://i.pinimg.com/originals/ce/62/70/ce6270cdf4f322beec96c0140b75072a.jpg' className='home-img'></img>
    </div>
    <div className='home'>
      <div className='hh1'>
      <h3 className='home-subheading1'>Glimpses of</h3>
      <h1 className='home-heading1'>Latest Events</h1>
    </div>
    <div className='cards'>
    
    <div className='card1 card'>
      <h1>Birthday Party</h1>
      
      <img src='https://i.pinimg.com/originals/66/0b/b2/660bb2ecc6de42fc36c9140b5a55a10d.jpg' className='card1-img card-img'></img>
      <h3>A Birthday Party is organised and hereby I invite you all to attend and enjoy</h3>
      <button>Attend</button>
    </div>
    <div className='card2 card'>
      <h1>Wedding Functions</h1>
      <img src='https://th.bing.com/th/id/R.97872f94131822ae85b6629881b90242?rik=aPWcVC1Kxird5Q&riu=http%3a%2f%2feventsjackratna.com%2fwp-content%2fuploads%2f2015%2f02%2fWedding-Event-Planning.jpg&ehk=b7O71q8KD70hk3X%2bLZOreUg6WelREKcrvp%2fhbZTSDlY%3d&risl=&pid=ImgRaw&r=0' className='card2-img card-img'></img>
      <h3>A Birthday Party is organised and hereby I invite you all to attend and enjoy</h3>
      <button>Attend</button>
    </div>
    <div className='card3 card'>
      <h1>Corporative Events</h1>
      <img src='https://businessfirstfamily.com/wp-content/uploads/2015/08/corporate-event-stage-view.jpg' className='card3-img card-img'></img>
      <h3>You are invited to a Corporative Party </h3>
      <button>Attend</button>
    </div> 
    <div className='card4 card'>
      <h1>Musical Concerts</h1>
      <img src='https://s3.amazonaws.com/l.a.record-web-images/wp-content/uploads/2016/10/16/Ween_Palladium_21.jpg' className='card4-img card-img'></img>
      <h3>You are invited to join the concert night . A night for good music and entertainment</h3>
      <button>Attend</button>
    </div> 
    <div className='card5 card'>
      <h1>Fresher's/Farewell</h1>
      <img src='https://i.pinimg.com/originals/ee/e8/5f/eee85f20c5a2104c18841f668271cc67.png' className='card5-img card-img'></img>
      <h3>It's a priviledge to invite you for Fresher's party.Come and enjoy the event.</h3>
      <button>Attend</button>
    </div> 
    <div className='card6 card'>
      <h1>Convocation Event</h1>
      <img src='https://www.iimu.ac.in/upload_data/Photographs/CONVOCATION_CEREMONY_DSC_3892.JPG' className='card6-img card-img'></img>
      <h3>A Birthday Party is organised and hereby I invite you all to attend and enjoy</h3>
      <button>Attend</button>
    </div> 

    </div>
    
    </div>
    
    </>
    
  )
}

export default Home