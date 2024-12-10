import React from 'react'

import { Gmail } from '../../svg/Gmail'
import { Linkedin } from '../../svg/Linkedin'
import { Link } from 'react-router-dom'

export const Footer = () => {
  return (
    <div>
        <div className='footer-container'> {/* footer */}
         <div className='footer-text'> {/* text */}
            <p>
            I invite you to contact me and find out if I am a potential candidate for your company.  
            </p>
         </div>
         <div > {/* icons */}
            <ul className='footer-icons'>
              <li className='f_icon'><Link to={'mailto:endeveloper1@gmail.com'} target="_blank"><Gmail /></Link></li>
              <li className='f_icon'><Link to={"https://www.linkedin.com/in/evelyn-fernandez-663995255/"}  target="_blank"><Linkedin /></Link></li>
            </ul>
          
         </div>

      </div>
    </div>
  )
}
