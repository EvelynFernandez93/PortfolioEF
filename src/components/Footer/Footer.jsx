
import { Link } from 'react-router-dom'
import { Cv } from '../../svg/Cv'
import { Instagram } from '../../svg/Instagram'
import { Facebook } from '../../svg/Facebook'

export const Footer = () => {
  return (
        <div className='footer-container'> {/* footer */}
         <div className='footer-text'> {/* text */}
            <p>
            Este proyecto fué hecho con mucho amor, si te gustó seguime en mis redes  
            </p>
         </div>
         <ul className='footer-icons '>
            <li className='footer-redes' >
            <Link to={"https://www.instagram.com/entrecerrosdesign?igsh=eXFleWx3eGg1ZzRm"} target="_blank">
                    <Instagram />
            </Link>
            <Link to={"https://www.facebook.com/profile.php?id=61578417668247"} target="_blank">
                    <Facebook />
            </Link>
            </li>
         </ul>
         </div>

    
   
  )
}
