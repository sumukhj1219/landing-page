import React from 'react'
import Navbar from './navbar'
import Hero from './hero'
import Marque from './marque'
import Features from './features'
import Achievements from './achievements'
import Footer from './footer'
import Pricing from './pricing'

const Landing = () => {
  return (
    <div >
      <div className='bg-radial from-neutral-700 via-neutral-900 to-neutral-950 h-350'>
        <Navbar />
        <Hero />
        <Marque />
        <Features />
        <Achievements />
        <Pricing />
        <Footer />
      </div>
    </div>
  )
}

export default Landing
