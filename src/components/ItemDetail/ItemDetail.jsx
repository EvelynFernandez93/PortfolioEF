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
    
    const imagen = require(`../../assets/${item.img}`);





    const tecnologias = item.tecnologias.map((tecnologia) => {
        switch (tecnologia.tec) {

          case 'HTML':
            return <HTML key={tecnologia.tec} />;
          case 'CSS':
            return <CSS key={tecnologia.tec} />;
          case 'Bootstrap':
            return <Bootstrap key={tecnologia.tec} />;
          case 'Sass':
            return <SassC key={tecnologia.tec} />;
          case 'Node.js':
            return <NodeJs key={tecnologia.tec} />;
          case 'JavaScript':
            return <JavaScript key={tecnologia.tec} />;
          case 'React':
            return <ReactJs key={tecnologia.tec} />;
          case 'Figma':
            return <Figma key={tecnologia.tec} />;
          default:
            return null;
        }
      });
    

  return (
    <div>
        <div  className='background'>
            <div className='navbar-contain'>
                <Navbar />
            </div>
            <div className='detail-project-container '>
                <div className='detail-project-number'> {/* project number */}
                    <p >
                       Project {item.id} / Information
                    </p>
                </div>  
                <div>{/*  Card */}
                    <div className='detail-project-card background-color-page' href={'/Project/${project.id}'}>
        
                         <div /* className='project-home-img' */> {/* img */}<img src={imagen} alt={item.nombre} className='project-home-img'/>

            
                        </div>
                    <div className='project-home-cont-inf  '> {/* Info */}
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
                            {/* <li className='project-buttons'><HTML />HTML</li>
                            <li className='project-buttons'><CSS />CSS</li>
                            <li className='project-buttons'><Bootstrap />Bootstrap</li>
                            <li className='project-buttons'><SassC />Sass</li>
                            <li className='project-buttons'><NodeJs />Node.js</li>
                            <li className='project-buttons'><JavaScript />Java Script</li>
                            <li className='project-buttons'><ReactJs />React</li>
                            <li className='project-buttons'><Figma />Figma</li> */}
                          {/*   <li className='project-buttons'>{tecnologias}</li> */}
                          {tecnologias}
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
                <div className='detail-project-information background-color-page '> {/* course detail */}
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
