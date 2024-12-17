import React from 'react'
import { Navbar } from '../Navbar/Navbar'

import { Form } from '../Form/Form'
import { Link } from 'react-router-dom'
import { Instagram } from '../../svg/Instagram'
import { Linkedin } from '../../svg/Linkedin'
import { Gmail } from '../../svg/Gmail'

export const ContactPage = () => {
  return (
    <div >
        <div   >
            <div className='background'>{/* Background */}
                <div className='navbar-contain'>
                    <Navbar />
                </div>
                <div className='contact-page'>
                    <div className='background-color-page'>
                        <div >{/* Information */}
                            <div className='contact-information '> {/* inf */}
                                <div>
                                    <p className='p-distance'>
                                        Thank you for coming here.
                                    </p>
                                    <p className='p-distance'>
                                    I hope you liked my Portfolio
                                    </p>
                                    <p className='p-distance'>
                                    For recommendations or to contact me, I leave you my form and I will be happy to read you
                                    </p>
                                    <p className='p-distance'>
                                    You can also contact me by email endeveloper1@gmail.com 
                                    </p>
                                    <p className='p-distance'>
                                    Or through my networks.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div> {/* social icons */}
                            <ul className='footer-icons'>
                                <li className='f_icon'><Link to={'mailto:endeveloper1@gmail.com'}  target="_blank"><Gmail /></Link></li>
                                <li className='f_icon'><Link to={"https://www.instagram.com/enfernandezz/"}  target="_blank"><Instagram /></Link></li>
                                <li className='f_icon'><Link to={"https://www.linkedin.com/in/evelyn-fernandez-663995255/"}  target="_blank"><Linkedin /></Link></li>
                            </ul>
                        </div>
                    
                    </div>
                    <div> 
                        <Form />
                    </div>
                
                
            </div>
            
        </div>
    </div>
    </div>
  )
}
