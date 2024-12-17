 import React , { useState,useEffect }from 'react'
import { Navbar } from '../Navbar/Navbar'
import { CardProjects } from '../CardProjects/CardProjects' 

import {pedirDatos} from "../../helpers/pedirDatos";

export const Project = () => {

    const [projects, setProjects] = useState([]);
    console.log (projects)
    useEffect(() => {
      pedirDatos ()
        .then ((res)=> {
            setProjects (res)
        })
    }, [])

  return (
    <div className=''>
        <div  >
            <div className='background '>{/* Background */}
                <div className='navbar-contain'>
                    <Navbar />
                </div>
                <div className='projects-org'>
                    <div className='project-home-container'>
                        <div  >
                             <CardProjects projects={projects} className=' card'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
