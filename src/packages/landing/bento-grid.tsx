"use client"

import React, { useRef } from 'react'
import { motion, useAnimate } from "framer-motion"
import BentoCard4 from './bento-cards/bento-card4'
import BentoCard3 from './bento-cards/bento-card3'
import BentoCard2 from './bento-cards/bento-card2'
import BentoCard1 from './bento-cards/bento-card1'

const BentoGrid = () => {


  return (
    <div className='grid grid-cols-3 mt-10 gap-4 auto-rows-[300px] min-h-screen p-8 max-w-7xl mx-auto '>

      <BentoCard1 />

      <BentoCard2 />

      <BentoCard4 />

      <BentoCard3 />

    </div>
  )
}

export default BentoGrid