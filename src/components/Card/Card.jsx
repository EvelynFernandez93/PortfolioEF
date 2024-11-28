import React from 'react'

import { Link } from 'react-router-dom';
export const Card = ({project}) => {
  return (
    <div className='project-home-card' href={'/Project/${project.id}'}>
        
        <div className='project-home-img'> {/* img */}
         
        </div>
        <div className='project-home-cont-inf '> {/* Info */}
            <div className='project-home-subtitle'>
                <p >
                    {project.nombre}
                </p>
            </div>
            <div className='project-home-subtitle2'> 
                <p>
                    {project.curso}
                </p>
            </div>
            <div className='project-home-subtitle2'> 
                <p>
                    {project.carrera}
                </p>
            </div>
            <div > {/* buttons */}
                <ul className='project-buttons-container' >
                    <li className='project-buttons'>HTML</li>
                    <li className='project-buttons'>CSS</li>
                    <li className='project-buttons'>Boostrap</li>
                    <li className='project-buttons'>Saas</li>
                    <li className='project-buttons'>Node.js</li>
                    <li className='project-buttons'>Java Script</li>
                    <li className='project-buttons'>React</li>
                    <li className='project-buttons'>Figma</li>
                </ul>
            </div>
           
            <div className='see-more-button'>
            
                <Link to={`/item/${project.id}`} >See more</Link>
           
            </div>
           
        </div>
    </div>
  )
}
