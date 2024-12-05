import React from 'react'
import {Facebook} from '../../svg/Facebook'
import { Behance } from '../../svg/Behance'
import { Gmail } from '../../svg/Gmail'
import { Linkedin } from '../../svg/Linkedin'

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
            <ul>
             <li className='footer-icons'><Facebook /></li>
              <li className='footer-icons'><Behance /></li>
              <li className='footer-icons'><Linkedin /></li>
              <li className='footer-icons'><Gmail /></li>
            </ul>
          
         </div>

      </div>
    </div>
  )
}
