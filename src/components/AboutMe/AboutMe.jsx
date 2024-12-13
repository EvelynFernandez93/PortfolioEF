import React from 'react'
import {Studies} from '../Studies/Studies';
import { Navbar } from '../Navbar/Navbar';

export const AboutMe = () => {
  return (
    <div >
     {/*  <div className='project-page-background'>
        <div className='navbar-contain'>
            <Navbar />
      </div>
      </div> */}
    
      <div className='about-me-contain'>  {/* ABOUT-ME */}
          <div className='about-me-img'> {/* Imagen */}
          {/* <a>

          </a> */}
          </div>
          <div className='about-me-text'> {/* information */}
            <div className='about-me-p'>
              <p>
                 My name is Evelyn Fernandez, I am from Mendoza - Argentina, I am an emerging Web Designer, at the end of 2023 I finished the Front End Developer degree and I am currently studying Product Design at Coder House.
              </p> 
            </div>
            <div className='about-me-p'>
              <p > 
                I have good English skills, I studied at an institute for many years and I take English classes twice a week with a native English speaker to improve myself.   
              </p> 
            </div>
          </div>
      </div>
      <div>
        <Studies />
      </div>
    </div>
                   
                
           
     
    
  )
}
