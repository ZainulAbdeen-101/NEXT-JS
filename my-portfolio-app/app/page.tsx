import React from 'react'
import About from './(components)/About'
import Contact from './(components)/contact'
import Footer from './(components)/footer'
import Headers from './(components)/Header'
import Heros from './(components)/Hero'
import Port from './(components)/port'
import Services from './(components)/services'
import Skills from './(components)/Skill'
const page = () => {
  return (
    <><div  className='dark '>

    <Headers />
    <Heros   />
    <About />
    <Port />
    <Services />
    <Skills />
    <Contact />
    <Footer />
    </div>
    </>
  )
}

export default page