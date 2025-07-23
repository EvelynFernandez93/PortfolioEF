import React from 'react'
import {Studies} from '../Studies/Studies';
import { Carousel } from '../Carousel/Carousel';
import Timeline from '../Timeline/Timeline';
import { Presentation } from '../Presentation/Presentation';
import { Navbar } from '../Navbar/Navbar';




export const AboutMe = () => {
  return (
    
    
     
   /*        <div className='about-me-img'> 
          
          </div>
          <div className='about-me-text'>
            <div className='about-me-p'>
              <p>
              As a freelance UX/UI Designer from Mendoza, Argentina, I bring creativity and technical expertise to the table. With 2 years of experience, a strong foundation in Front-end development, and a keen understanding of Product Design, I'm confident in my ability to deliver innovative solutions that drive results.
              </p> 
            </div>
            <div className='about-me-p'>
              <p > 
              With advanced English skills and a proactive approach to learning, I excel in dynamic environments with adaptability and quick thinking. My passion for staying up-to-date with the latest industry trends and best practices drives me to continuously improve and expand my skill set. I'd love for you to explore my portfolio and discover how my skills and experience can help achieve success in your organization.  
              </p> 
              
            </div>
            
          </div>
      </div> */
      <div>
        <div className='navbar-contain '>
                  <Navbar />
        </div>
        <Presentation />
      <Studies />
       <Carousel />
       <Timeline />
      
      </div>
    
                   
                
           
     
    
  )
}
