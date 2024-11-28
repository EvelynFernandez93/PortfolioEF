import React from 'react';
import "./Navbar" ;
import {  MdHomeFilled, MdStar, MdLightbulb, MdPeopleAlt } from "react-icons/md";

export const Navbar = () => {
  return (
    <nav className='navbar ' >
       <ul>
        <li><a className='main-icon  '  href="/" ><MdHomeFilled  /></a></li>
        <li><a className='main-title  button'   href="/">Home</a></li> 
       </ul>
       <ul>
        <li><a className='main-icon ' href="/about-me"><MdStar  /></a></li>
        <li><a className='main-title button ' href="/about-me">About me</a></li>
       </ul>
       <ul>
        <li><a className='main-icon ' href="/projects"><MdLightbulb /></a></li>
        <li><a className='main-title button' href="/projects">Projects</a></li>
       </ul>
       <ul>
        <li ><a className='main-icon ' href="/contact"><MdPeopleAlt /></a></li>
        <li><a className='main-title button' href="/contact">Contact</a></li>
       </ul>
      {/*   <li className='main-title  main-icon button' >Projects</li>
        <li className='main-title  main-icon button'>Contact</li>
       </ul> */}
    </nav>
  )
}
