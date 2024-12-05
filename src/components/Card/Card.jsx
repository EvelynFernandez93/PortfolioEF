import React from 'react'
import {HTML} from '../../svg/HTML'
import { CSS } from '../../svg/CSS'
import { Bootstrap } from '../../svg/Bootstrap'
import { SassC } from "../../svg/SassC";
import { NodeJs } from '../../svg/NodeJs'
import { ReactJs } from '../../svg/ReactJs'
import { Figma } from '../../svg/Figma'
import {JavaScript } from '../../svg/JavaScript'
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
                <ul className='project-buttons-container ' >
                    <li className='project-buttons'><HTML />HTML</li>
                    <li className='project-buttons'><CSS />CSS</li>
                    <li className='project-buttons'><Bootstrap />Bootstrap</li>
                    <li className='project-buttons'><SassC />Sass</li>
                    <li className='project-buttons'><NodeJs />Node.js</li>
                    <li className='project-buttons'><JavaScript />Java Script</li>
                    <li className='project-buttons'><ReactJs />React</li>
                    <li className='project-buttons'><Figma />Figma</li>
                </ul>
            </div>
           
            <div className='see-more-button'>
            
                <Link to={`/item/${project.id}`} >See more</Link>
           
            </div>
           
        </div>
    </div>
  )
}
