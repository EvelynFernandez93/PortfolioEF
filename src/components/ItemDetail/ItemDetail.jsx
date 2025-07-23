import { Navbar } from '../Navbar/Navbar'
import { OHTML } from '../../svg/OHTML'
import { OCSS } from '../../svg/OCSS'
import { OBootstrap } from '../../svg/OBoostrap'
import { OReactJs } from '../../svg/OReactJs'
import { OFigma } from '../../svg/OFigma'
import { OJavaScript } from '../../svg/OJavaScript'
import { ONodeJs } from '../../svg/ONodeJs'
import { Link } from 'react-router-dom'

export const ItemDetail = ({ item }) => {
  const imagen = require(`../../assets/${item.img}`)
  const gif = item.gif ? require(`../../assets/${item.gif}`) : null

  const tecnologias = item.tecnologias.map((tecnologia) => {
    switch (tecnologia.tec) {
      case 'HTML':
        return <OHTML key={tecnologia.tec} />
      case 'CSS':
        return <OCSS key={tecnologia.tec} />
      case 'Bootstrap':
        return <OBootstrap key={tecnologia.tec} />
      case 'Sass':
        return <OSassC key={tecnologia.tec} />
      case 'Node.js':
        return <ONodeJs key={tecnologia.tec} />
      case 'JavaScript':
        return <OJavaScript key={tecnologia.tec} />
      case 'React':
        return <OReactJs key={tecnologia.tec} />
      case 'Figma':
        return <OFigma key={tecnologia.tec} />
      default:
        return null
    }
  })

  return (
    <div>
      <Navbar />
      <div className='detail-project-container'>
        <div className='detail-project-number'>
          <p>Project {item.id} / Information</p>
        </div>
      </div>

       <div className='proyecto-componente-absoluto'> {/* Componente-proyecto */}
          <div className='proyecto-completo'> {/* proyecto completo */}
            
            <div className='proyecto-con-informacion'>
              
              <div className=' nombre-tec'>
                <div className='proyecto-contenedor-img'> {/* Imagen-Nombre y tecnologías */}
              <img src={imagen} alt={item.nombre} className='proyecto-img' />
              
            </div>
                <p className='proyecto-nombre-grande '>{item.nombre}</p>
                <div >
                  <p className='proyecto-subtítulo-pequeño'>Tecnologías utilizadas</p>
                  <ul className='contenedor-tecnologias'>{tecnologias}</ul>
                </div>
              </div>
              
               {/* Proyecto */}
              <div className='proyecto-subtitulo-grande'> {/* Subtitulo */}
                <p >{item.subtitulo}</p>
              </div>
              
              {item.introduccion && (
              <div className='section-block'>
                <h2 className='proyecto-subtítulo-normal'>Introducción</h2>
                <p className='proyecto-texto-normal'>{item.introduccion}</p>
              </div> /* leve introducion */
              )}
              <div className='contenedor-funcionalidades'>{/* Funcionalidades */}
                <div className='funcionalidades-img-inf-vid'>
                <h3 className='proyecto-subtítulo-normal'>Funcionalidades</h3>
                <div className='funcionalidades-img-inf '> {/* checks-gif */}
                  {item.aprendizajes && (
              <div  >
                
                  <ul className=' funcionalidades-inf'>
                  {item.aprendizajes.map((apr, i) => (
                    <li className='proyecto-texto-normal' key={i}>✅ {apr}</li>
                   ))}
                   </ul>
               </div>
              )}
                  {/* GIF */}
                  {gif && (
                  <div className='section-block'>
                  <img src={gif} alt="demo gif" className='demo-gif' />
                  </div>
                  )}
                </div>
                {/* Video embebido */}
                {item.videoDemo && (
                <div className='section-block'>
                  
                  <div className='video-responsive'>
                  <iframe
                    src={item.videoDemo}
                    title="Video demo"
                    frameBorder="0"
                    allowFullScreen
                  ></iframe>
                  </div>
                </div>
                )}
                </div>
              </div>

              {/* Información original */}
              <div className='section-block'>
                <h3 className='proyecto-subtítulo-normal' >Información general</h3>
                  <p className='proyecto-texto-normal'>{item.informacion}</p>
              </div>

              {/* Aprendizajes */}
              {item.aprendizajes && (
              <div className='section-block'>
                <h3 className='proyecto-subtítulo-normal'>Retos enfrentados</h3>
                  <ul className='proyecto-texto-normal'>
                  {item.aprendizajes.map((apr, i) => (
                    <li key={i}>🧠 {apr}</li>
                   ))}
                   </ul>
               </div>
              )}

              
              {/* Mejoras futuras */}
              {item.mejoras && (
              <div className='section-block'>
                <h3 className='proyecto-subtítulo-normal'>Próximos pasos</h3>
                  <ul>
                  {item.mejoras.map((m, i) => (
                    <li className='proyecto-texto-normal' key={i}>🚀 {m}</li>
                  ))}
                  </ul>
              </div>
              )}

              {/* Recursos */}
              <div className='section-block'>
                <h3 className='proyecto-subtítulo-pequeño'>Accesos</h3>
                <ul className='enlaces'>
                   <li >
                      <Link to={item.proyecto} target="_blank"className='boton-home-introduccion' > Proyecto</Link>
                   </li>
                   <li>
                       <Link to={item.prototipo} target="_blank"className='boton-home-introduccion' > Prototipo</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>


    </div>
  )
}
