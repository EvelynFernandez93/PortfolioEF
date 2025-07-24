import React from 'react'
import { Link } from 'react-router-dom';
import { GitHub } from '../../svg/GitHub';
import { Behance } from '../../svg/Behance';
import {  Linkedin } from '../../svg/Linkedin';

export const Presentation = () => {
  return (
        <div className='contenedor-introduccion-personal'>
            <div className='foto-personal'>

            </div>
            <div className='descripción-personal'>
                <div className='introducción-personal'>
                    <p>Te invito a conocerme</p>
                </div>
                <div className='segunda-introduccion-personal'>
                    <p>Estos son mis perfiles profesionales</p>
                </div>
                <div>
                    <ul className='background-icon' >
                                 <li className='f_icon '><Link to={"https://www.linkedin.com/in/evelyn-fernandez-663995255/ "}  target="_blank" ><Linkedin /></Link></li>
                                 <li className='f_icon '><Link to={"https://github.com/EvelynFernandez93"}  target="_blank"><GitHub/></Link></li>
                                 <li className='f_icon '><Link to={"https://www.behance.net/evelynfernandez11"}  target="_blank"><Behance /></Link></li>
                                </ul>
                </div>
            </div>
        </div>
  )
}
