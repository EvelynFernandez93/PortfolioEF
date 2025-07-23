import React from 'react'
import { Link } from 'react-router-dom'

export const IntroductionHome = () => {
  return (
    <div>
        <div className='informacion-introduccion'>
            <div className='imagen-introduccion'>
                <img src='/img/Avatar.png'></img>

            </div>
            <div className='home-information'>
                <div >
                    <h2 className='titulo-home-introduccion'>Hola! Soy Evelyn</h2>
                
                </div>
                <div >
                    <h1 className='descripcion-home-introduccion'>Diseñadora UX UI con experiencia en Desarrollo Front-end</h1>

                </div>
                <div >
                    <p className='texto-home-introduccion'>Creo experiencias digitales accesibles y centradas en el usuario</p>

                </div>
                <div >
                <Link to={"https://identidad-de-marca-ef.my.canva.site/cv-evelyn-fernandez"} target="_blank"className='boton-home-introduccion'>Ver CV</Link>

            </div>
            
            </div>
            
        </div>
        
    </div>
  )
}
