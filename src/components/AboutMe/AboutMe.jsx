import React from 'react'
import {Studies} from '../Studies/Studies';
import { Carousel } from '../Carousel/Carousel';
import Timeline from '../Timeline/Timeline';
import { Presentation } from '../Presentation/Presentation';
import { Navbar } from '../Navbar/Navbar';




export const AboutMe = () => {
  return (
      <div>
      <Navbar />  
      <div className='about-me-contain'>
      <Presentation />
      <Studies />
       <Carousel />
       <Timeline />
      </div>  
      </div>
  )
}
