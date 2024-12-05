import React from 'react'
import { Navbar } from '../Navbar/Navbar'
import {HTML} from '../../svg/HTML'
import { CSS } from '../../svg/CSS'
import { Bootstrap } from '../../svg/Bootstrap'
import { SassC } from "../../svg/SassC";
import { NodeJs } from '../../svg/NodeJs'
import { ReactJs } from '../../svg/ReactJs'
import { Figma } from '../../svg/Figma'
import {JavaScript } from '../../svg/JavaScript'


export const ItemDetail = ( {item}) => {
  return (
    <div>
        <div  className='project-page-background'>
            <div className='navbar-contain'>
                <Navbar />
            </div>
            <div className='detail-project-container'>
                <div className='detail-project-number'> {/* project number */}
                    <p >
                       Project {item.id} / Information
                    </p>
                </div>  
                <div>{/*  Card */}
                    <div className='detail-project-card' href={'/Project/${project.id}'}>
        
                         <div className='project-home-img'> {/* img */}
            
                        </div>
                    <div className='project-home-cont-inf '> {/* Info */}
                        <div className='project-home-subtitle'>
                            <p >
                                {item.nombre}
                            </p>
                        </div>
                        <div className='project-home-subtitle2'> 
                            <p>
                                {item.curso}
                            </p>
                        </div>
                        <div className='project-home-subtitle2'> 
                            <p>
                                {item.carrera}
                            </p>
                        </div>
                        <div > {/* buttons */}
                        <ul className='project-buttons-container' >
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
                        <div className='detail-project-buttons ' href={'/Project/${project.id}'}>
                            <div className='detail-button see-more-button '>
                                <p>
                                    See figma project
                                </p>  
                            </div>
                            <div className='detail-button see-more-button'>
                                <p>
                                    See prototipe
                                </p>
                            </div>
                           
                    </div>
           
                        
           
                </div>
            </div>
                </div>
                <div className='detail-project-information '> {/* course detail */}
                    <p>
                    {item.informacion}
                    </p>
                </div>
                <div>
                   {/*  video */}
                </div>
              
            </div>
        </div>
       {/*  <div>
            <Footer />
        </div> */}
    </div>
  )
}
