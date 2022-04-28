import React, { useEffect, useState } from 'react'
import {   useNavigate } from 'react-router-dom';
import './Home.css'
import anime from '../Components/Assets/anime.jpg'




 const Home = () => {
   const [currentdate,setcurrentdate]=useState(new Date());

   useEffect(()=>{
     var date = setInterval(()=>setcurrentdate(new Date()),1000)
     return function cleanup(){
       clearInterval(date)
     }
       })
  

     const navigate = useNavigate();
     
  return (
    <div >
    <div className="time">
    <h3>Time: {currentdate.toLocaleTimeString()}</h3>
    <h3>Date: {currentdate.toLocaleDateString()}</h3>
    </div>
    
    <div className='texts'>
    <h1>Welcome,</h1>
    <p className='home'>
    Hey everyone what's going on my name is <span>
    DHANANJAY GUPTA 
    </span> live in Thane, Maharashtra (India)
    
   
    </p>
    
    <br/>
    <button className='btn' onClick={()=>navigate('/about')}>Go to About Page →</button>
    </div>
   
    <img className='img' src={anime} alt=''/>
    </div>
  )
}
export default Home;
