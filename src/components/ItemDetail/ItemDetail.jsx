import React from 'react'
import { Navbar } from '../Navbar/Navbar'
import { Footer } from '../Footer/Footer'

export const ItemDetail = ( {item}) => {
  return (
    <div>
        <div  className='project-page-background'>
            <div className='navbar-contain'>
                <Navbar />
            </div>
            <div className='detail-project-container'>
                <div className='detail-project-number'> {/* project number */}
                    <p>
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
                    Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.
                    </p>
                </div>
                <div className='detail-project-buttons'> {/* buttons */}
                    
                </div>
            </div>
        </div>
       {/*  <div>
            <Footer />
        </div> */}
    </div>
  )
}
