import React from 'react'
import { Link } from 'react-router-dom'
import { Gmail } from '../../svg/Gmail' 
export const Trabajemos = () => {
  return (
    <div className='trabajemos-contenedor'> 
        <div className='trabajemos-informacion'>
            <div className='trabajemos-titulo'>
                <p>Trabajemos juntos</p>
            </div>
            <div className='trabajemos-descripcion'>
                <p>Contactate conmigo, y hagamos algo grande juntos</p>
            </div>
        </div>
        <div >
            <Link to={'mailto:endeveloper1@gmail.com'} target="_blank">
                            <div className='boton-trabajemos'>Enviar correo <Gmail /></div>
            </Link>
        </div>
    </div>
  )
}
