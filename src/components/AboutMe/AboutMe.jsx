import React from 'react'
import {Studies} from '../Studies/Studies';


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
              As a freelance UX/UI Designer from Mendoza, Argentina, I bring creativity and technical expertise to the table. With 2 years of experience, a strong foundation in Front-end development, and a keen understanding of Product Design, I'm confident in my ability to deliver innovative solutions that drive results.
              </p> 
            </div>
            <div className='about-me-p'>
              <p > 
              With advanced English skills and a proactive approach to learning, I excel in dynamic environments with adaptability and quick thinking. My passion for staying up-to-date with the latest industry trends and best practices drives me to continuously improve and expand my skill set. I'd love for you to explore my portfolio and discover how my skills and experience can help achieve success in your organization.  
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
