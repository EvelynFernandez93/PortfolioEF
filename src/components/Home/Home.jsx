import React from 'react'
import { Navbar } from '../Navbar/Navbar'
import { IntroductionHome } from '../IntroductionHome/IntroductionHome'
import { Services } from '../Services/Services'
import { Trabajemos } from '../Trabajemos/Trabajemos'

export const Home = () => {
  return (
    <div>
        <Navbar />
        <IntroductionHome />
        <Services />
        <Trabajemos />
    </div>
  )
}
