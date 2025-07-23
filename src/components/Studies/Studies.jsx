import React from 'react'

export const Studies = () => {
  return (
    <div>
     
          <div className='mis-habilidades'> {/* Mis habilidades */}
            <div className='contenedor-mis-habilidades'>
                <div>
                    <p className='titulo-mis-habilidades'>Mis habilidades</p>
                </div>
            
          <div className='contenedor-porcentajes'>
            <div>
                <ul>
                    <li >
                    <p className='porcentaje'>75%</p>
                    </li>
                    <li >
                        <p className='texto-descriptivo-amarillo'>Diseño gráfico</p>
                    </li>
                </ul>
            </div>
            <div>
                <ul>
                    <li >
                        <p className='porcentaje'>90%</p>
                    </li>
                    <li >
                    <p className='texto-descriptivo-amarillo'>Diseño UX UI</p>
                    </li>
                </ul>
            </div>
            <div>
                <ul>
                    <li >
                        <p className='porcentaje'>70%</p>
                    </li>
                    <li >
                        <p className='texto-descriptivo-amarillo'>Programación</p>
                    </li>
                </ul>
            </div>
          </div>
          </div>
        </div> {/* Fin de mis habilidades */}
       
          </div> 
    
  )
}
