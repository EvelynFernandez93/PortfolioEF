import React from 'react';
import "./Navbar" ;


/* import {  MdHomeFilled, MdStar, MdLightbulb, MdPeopleAlt } from "react-icons/md"; */
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <div className='navbar-contain ' >
    <nav className='navbar ' >
       <ul className='main-navbar '>
       {/*  <li><Link className=' main-icon '   to="/" ><MdHomeFilled  /></Link></li> */}
        <li><Link  className='main-title  button'   to="/">Home</Link></li> 
      {/*  </ul> */}
     {/*   <ul className='main-navbar '>
        <li><Link className='main-icon ' to="/about-me"><MdStar  /></Link></li>
        <li><Link className='main-title button ' to="/about-me">About me</Link></li>
       </ul> */}
      {/*  <ul className='main-navbar '> */}
       {/*  <li><Link className='main-icon ' to="/projects"><MdLightbulb /></Link></li> */}
        <li><Link className='main-title button' to="/projects">Projects</Link></li>
       {/* </ul> */}
       {/* <ul className='main-navbar '> */}
      {/*   <li ><Link className='main-icon ' to="/contact"><MdPeopleAlt /></Link></li> */}
        <li><Link className='main-title button' to="/contact">Contact</Link></li>
        
       </ul>
       
      {/*   <li className='main-title  main-icon button' >Projects</li>
        <li className='main-title  main-icon button'>Contact</li>
       </ul> */}
    </nav>
    </div>
  )
}
