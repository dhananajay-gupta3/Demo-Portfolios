import React from 'react'
import {  useNavigate ,Outlet, NavLink} from 'react-router-dom';
import './About.css'
 const About = () => {
     const navigate=useNavigate();
  return (
    <div className='back'>
    <h3 className='h3'>
    If You Want Know  About Me Just Click it
    <p>
    
    </p> 
    </h3>
     <ul className='name'>
    
   <li><NavLink className='more' to='more'>My Self</NavLink></li>
   <li><NavLink className='more' to='edu'>Education</NavLink></li>
   <li><NavLink className='more' to='moreme'>Other</NavLink></li>
   
   <Outlet/>
    </ul>


    
    <br/>
    <button className='about' onClick={()=>navigate('/')}>Back To Home</button>

    <div className='no'>m</div>
   <h3 className='cc'>© Copyright 2022</h3> 
    </div>
  )
}
export default About;