import React from 'react'
import { Navbar } from '../Navbar/Navbar'
import { Cv } from '../../svg/Cv';
import { GitHub } from '../../svg/GitHub';
import { Behance } from '../../svg/Behance';
import {  Linkedin } from '../../svg/Linkedin';
import { Link } from 'react-router-dom';
import img from '../../assets/Img'
import { AboutMe } from '../AboutMe/AboutMe';


export const FrontPage = () => {
  return (
    <div className=' ' >
      <div className='front-page background
    '> {/* FRONT-PAGE */}
        <div className='navbar-contain '>
          <Navbar />
        </div>
        <div className='front-inf'>
          <h2 className='text-body-500 animate__animated animate__flipInX'>Hi! I'm Evelyn Fernández <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24px" height="24px" viewBox="48 48 48 48" >
                      <polygon fill="#42a5f5" points="29.62,3 33.053,8.308 39.367,8.624 39.686,14.937 44.997,18.367 42.116,23.995 45,29.62 39.692,33.053 39.376,39.367 33.063,39.686 29.633,44.997 24.005,42.116 18.38,45 14.947,39.692 8.633,39.376 8.314,33.063 3.003,29.633 5.884,24.005 3,18.38 8.308,14.947 8.624,8.633 14.937,8.314 18.367,3.003 23.995,5.884"></polygon><polygon fill="#fff" points="21.396,31.255 14.899,24.76 17.021,22.639 21.428,27.046 30.996,17.772 33.084,19.926"></polygon>
                    </svg></h2>
          
          
          <div>
            <ul className='background-icon' >
             <li className='f_icon '><Link to={"https://www.linkedin.com/in/evelyn-fernandez-663995255/ "}  target="_blank" ><Linkedin /></Link></li>
             <li className='f_icon '><Link to={"https://github.com/EvelynFernandez93"}  target="_blank"><GitHub/></Link></li>
             <li className='f_icon '><Link to={"https://www.behance.net/evelynfernandez11"}  target="_blank"><Behance /></Link></li>
            </ul>
            
          </div>
          <div className='front-page-inf text-heading  '>
           <p className='animate__animated animate__slideInLeft 	'>Front-end developer </p> 
           <p className='animate__animated animate__slideInRight '>UX-UI designer</p>

          </div> 
          

          </div>
          <div>  {/* TOOLTIPS */} 
            <div className='tools-contain' >
              <h3 className='tool-p'>
                Tools  
              </h3>
              <div className='tools-img'>
                <img src={ img[0] } alt="Icono HTML" className='img-icon' />
                <img src={ img[1]} alt="Icono CSS" className='img-icon'/>
                <img src={ img[2]} alt="Icono Saas" className='img-icon'/>
                <img src={ img[3] } alt="Icono React" className='img-icon'/>
                <img src={ img[4] } alt="Icono Boostrap"  className='img-icon'/>
                <img src={ img[5]} alt="Icono Node"className='img-icon'  />
                <img src={ img[6]} alt="Icono Java Script"  className='img-icon'/>
                <img src={ img[7]} alt="Icono Figma"className='img-icon' />
              </div>
            </div> 
          <div>
        </div>
        </div>
      </div>{/* END-FRONT-PAGE */}
      <div>
        <AboutMe />
      </div>
    </div>
  )
}
