 import React , { useState,useEffect }from 'react'
import { Navbar } from '../Navbar/Navbar'
import { CardProjects } from '../CardProjects/CardProjects' 
import {Footer} from '../Footer/Footer';
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
    <div className='backgraund-grey'>
        <div  >
            <div className='project-page-background'>{/* Background */}
                <div className='navbar-contain'>
                    <Navbar />
                </div>
                <div className='.project-cards'>
                    <div className=' card'>
                        
                        <CardProjects projects={projects}/>
                    </div>
                </div>
            </div>
           {/*  <div>
                <Footer />
            </div> */}
        </div>
    </div>
  )
}
