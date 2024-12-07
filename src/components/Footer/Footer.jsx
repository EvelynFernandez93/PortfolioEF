import React from 'react'

import { Behance } from '../../svg/Behance'
import { Linkedin } from '../../svg/Linkedin'
import { Link } from 'react-router-dom'
import { GitHub } from '../../svg/GitHub'

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
             <li className='f_icon'><Link to={"https://github.com/EvelynFernandez93"}  target="_blank"><GitHub /></Link></li>
              <li className='f_icon'><Link to={"https://www.behance.net/evelynfernandez11"}  target="_blank"><Behance /></Link></li>
              <li className='f_icon'><Link to={"https://www.linkedin.com/in/evelyn-fernandez-663995255/"}  target="_blank"><Linkedin /></Link></li>
            </ul>
          
         </div>

      </div>
    </div>
  )
}
