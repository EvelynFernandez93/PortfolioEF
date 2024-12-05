import React from 'react'
import { Navbar } from '../Navbar/Navbar'

import { GitHub } from '../../svg/GitHub';
import { Behance } from '../../svg/Behance';
import {  Linkedin } from '../../svg/Linkedin';


export const FrontPage = () => {
  return (
    <div className='backgraund-grey'>
       <div className='backgraund '> {/* FRONT-PAGE */}
        <div className='navbar-contain '>
        <Navbar />
        </div>
        <div className='front-page backgraund'>
          <h2 className='text-body-500'>Evelyn Fernández</h2>
          <div>
            <ul>
             <li className='icon'><Linkedin /></li>
             <li className='icon '><GitHub/></li>
             <li className='icon'><Behance /></li>
            </ul>
          </div>
          <div className='front-page-inf text-heading'>
           <p>Front-end developer </p> 
           <p>UX-UI design</p>
          </div> 
          <div>  {/* TOOLTIPS */} 
            <div className='tools-contain' >
              <h3 className='tool-p'>
                Tools  
              </h3>

            </div> 
       
            <div>
              {/* <a>Iconos</a> */}
            </div>
          </div>
        </div>
      </div>{/* END-FRONT-PAGE */}
    </div>
  )
}
