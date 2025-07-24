import React from 'react';
import "./Navbar" ;


/* import {  MdHomeFilled, MdStar, MdLightbulb, MdPeopleAlt } from "react-icons/md"; */
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <div className='navbar-contain ' >
    <nav className='navbar ' >
       <ul className='main-navbar '>
        <li><Link  className='main-title  button'   to="/">Inicio</Link></li> 
        <li><Link className='main-title button' to="/about">Sobre mí</Link></li>
        
        <li><Link className='main-title button' to="/projects">Proyectos</Link></li>
        {/* <li><Link className='main-title button' to="/contact">Contact</Link></li> */}
       </ul>
      
    </nav>
    </div>
  )
}
