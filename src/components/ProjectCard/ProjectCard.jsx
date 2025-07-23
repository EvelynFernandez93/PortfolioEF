import React from 'react'
import {OHTML} from '../../svg/OHTML'
import { OCSS } from '../../svg/OCSS'
import { OBootstrap } from '../../svg/OBoostrap'

import { ONodeJs } from '../../svg/ONodeJs'
import { OReactJs } from '../../svg/OReactJs'
import { OFigma } from '../../svg/OFigma'
import {OJavaScript } from '../../svg/OJavaScript'
import { Link } from 'react-router-dom';


export const ProjectCard = ({project}) => {
    const imagen = require(`../../assets/${project.img}`);
    const tecnologias = project.tecnologias.map((tecnologia) => {
        switch (tecnologia.tec) {
          case 'HTML':
            return <OHTML key={tecnologia.tec} />;
          case 'CSS':
            return <OCSS key={tecnologia.tec} />;
          case 'Bootstrap':
            return <OBootstrap key={tecnologia.tec} />;
          
          case 'Node.js':
            return <ONodeJs key={tecnologia.tec} />;
          case 'JavaScript':
            return <OJavaScript key={tecnologia.tec} />;
          case 'React':
            return <OReactJs key={tecnologia.tec} />;
          case 'Figma':
            return <OFigma key={tecnologia.tec} />;
          
          default:
            return null;
        }
      });
    

  return (
    <div className='project-home-card ' href={'/Project/${project.id}'}>
        
        <div > {/* img */}
        <img src={imagen} alt={project.nombre} className='project-home-img'/>
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
            <div className='project-description'> 
                <p>
                    {project.carrera}
                </p>
            </div>
            <div > {/* buttons */}
                <ul className='project-buttons-container ' >
                    {/* <li className='project-buttons'><HTML />HTML</li>
                    <li className='project-buttons'><CSS />CSS</li>
                    <li className='project-buttons'><Bootstrap />Bootstrap</li>
                    <li className='project-buttons'><SassC />Sass</li>
                    <li className='project-buttons'><NodeJs />Node.js</li>
                    <li className='project-buttons'><JavaScript />Java Script</li>
                    <li className='project-buttons'><ReactJs />React</li>
                    <li className='project-buttons'><Figma />Figma</li> */}
                    
                   {tecnologias} 
                </ul>
            </div>
           
            <div /* className='see-more-button' */> <Link to={`/item/${project.id}`} target="_blank"className='boton-home-introduccion' >Ver más</Link></div>
           
        </div>
       
    </div>
  )
}
