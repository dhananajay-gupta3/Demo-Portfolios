import React from 'react'
import {  NavLink } from 'react-router-dom';
import './Navbar.css'


 const Navbar = () => {
  return (
    <div>
    <div className='logo'>
    <NavLink className='port' to='/' >Portfolio</NavLink>
    
    </div>
    
    <ul className='nav'>
    <li><NavLink className='navlink' to='/' >Home</NavLink></li>
    <li><NavLink className='navlink' to='/contact' > contact</NavLink></li>
    <li><NavLink className='navlink' to='/about' >About</NavLink></li>
    </ul>
    
    
    </div>
  )
}
export default Navbar;
