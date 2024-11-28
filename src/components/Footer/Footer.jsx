import React from 'react'
import { FaGithub, FaBehance,FaLinkedinIn } from "react-icons/fa6";
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
             <li className='footer-icons'><FaGithub /></li>
              <li className='footer-icons'><FaBehance /></li>
              <li className='footer-icons'><FaLinkedinIn /></li>
            </ul>
          
         </div>

      </div>
    </div>
  )
}
