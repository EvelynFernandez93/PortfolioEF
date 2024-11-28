import React from 'react'
import { Navbar } from '../Navbar/Navbar'
import { Footer } from '../Footer/Footer'
import { Form } from '../Form/Form'
import { FaFacebookF,FaInstagram, FaLinkedinIn } from "react-icons/fa";
export const ContactPage = () => {
  return (
    <div >
        <div   >
            <div className='project-page-background'>{/* Background */}
                <div className='navbar-contain'>
                    <Navbar />
                </div>
                <div className='contact-page'>
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
                        <div> {/* social icons */}
                            <ul>
                                <li className='icon '><FaFacebookF /></li>
                                <li className='icon'><FaInstagram /></li>
                                <li className='icon'><FaLinkedinIn /></li>
                            </ul>
                        </div>
                    
                    </div>
                    <div> 
                        <Form />
                    </div>
                </div>
                
                
            </div>
            {/* <div>
                <Footer />
            </div> */}
        </div>
    </div>
  )
}
