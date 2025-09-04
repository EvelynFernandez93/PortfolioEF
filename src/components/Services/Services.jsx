import React from 'react'
import { Link } from 'react-router-dom'

export const Services = () => {
  return (
    <div className='servicios-contenedor'>
        <div className='servicios-introducion-completa'>

            <div className='servicios-introduccion'>
                <div>
                    <h3 className='servicios-titulo'>Servicios</h3>
                </div>
                <div >
                <p className='servicios-subtitulo'>¿En qué puedo ayudarte?</p>
                </div>    
            </div>
            <div >
                <p className='servicios-descripcion'>Tengo mucho que aportar a tu proyecto, estos son los servicios en los que podemos trabajar</p>
            </div>
        </div>
        <div >
            <ul className='servicios-cards-contenedor'>
                <li className='servicios-card'>
                    <div>
                        <img src='/img/identidad.png'  className='servicios-card-img'></img>
                    </div>
                    <Link to={"https://identidad-de-marca-ef.my.canva.site/identidad-de-marca"} target="_blank" className='descripcion-texto-card descripcion-texto-card'>
                        <div>
                            <p className='servicios-card-titulo'>Identidad de marca</p>
                        </div>
                        <div>
                            <p className='servicios-card-subtitulo'>Brandboard</p>
                        </div>
                        <div>
                            <p className='servicios-card-descripcion'>Diseño de logotipo, elección de tipografía y colores, creación de contenido creativo para redes sociales, mockups personalizados.
                            </p>
                        </div>
                    </Link>
                </li>
                <li className='servicios-card'>
                    <div>
                        <img src='/img/diseño.png' className='servicios-card-img'></img>
                    </div>
                    <Link to={"https://identidad-de-marca-ef.my.canva.site/dise-o-ux-ui"} target="_blank" className='descripcion-texto-card descripcion-texto-card'>
                        <div>
                            <p className='servicios-card-titulo'>Diseño UX-UI</p>
                        </div>
                        <div>
<<<<<<< HEAD
                            <p className='servicios-card-subtitulo'>Diseño para web y apps</p>
                        </div>
                        <div>
                            <p className='servicios-card-descripcion'>Investigación, estudio de mercado, Wireframes en baja, media y alta calidad. Prototipo interactivo.
=======
                            <p className='servicios-card-subtitulo'>Diseño para web y aps</p>
                        </div>
                        <div>
                            <p className='servicios-card-descripcion'>Investigación, estudio de mercado, Wireframes en baja, media y alta calidad. prototipo interactivo.
>>>>>>> 0ef7b09 (Configuracion de nuevo ordenador)
                            </p>
                        </div>
                    </Link>
                </li>
                <li className='servicios-card'>
                    <div>
                        <img src='/img/programacion.png' className='servicios-card-img'></img>
                    </div>
                    <Link to={"https://identidad-de-marca-ef.my.canva.site/desarrollo-front-end"} target="_blank" className='descripcion-texto-card descripcion-texto-card'>
                        <div>
<<<<<<< HEAD
                            <p className='servicios-card-titulo'>Programación</p>
                        </div>
=======
                        </div>
                            <p className='servicios-card-titulo'>programación</p>
>>>>>>> 0ef7b09 (Configuracion de nuevo ordenador)
                        <div>
                            <p className='servicios-card-subtitulo'>Desarrollo front-end</p>
                        </div>
                        <div>
                            <p className='servicios-card-descripcion'>Desarrollo de sitios web interactivos y responsive.
                            </p>
                        </div>
                    </Link>
                </li>
            </ul>
        </div>
    </div>
  )
}
