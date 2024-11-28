import React, {  } from 'react'
import { CardProjects } from '../CardProjects/CardProjects'

export const MyProjects = () => {

  
    
  return (
    <div className='project-home-container'> {/* projects container */}
    <div >
        <p className='project-home-title' >
         My Projects
        </p>
    </div>
    <div className='project-home-card card'>{/*  card */}
      <CardProjects />
    </div>

  </div>
    
  )
}


