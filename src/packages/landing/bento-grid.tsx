"use client"

import React, { useRef } from 'react'
import { motion, useAnimate } from "framer-motion"
import BentoCard4 from './bento-cards/bento-card4'
import BentoCard3 from './bento-cards/bento-card3'
import BentoCard2 from './bento-cards/bento-card2'

const BentoGrid = () => {


  return (
    <div className='grid grid-cols-3 mt-10 gap-4 auto-rows-[300px] min-h-screen p-8 max-w-7xl mx-auto '>

      <div className='col-span-2 row-span-1 bg-neutral-900
                      flex items-center justify-center text-white text-3xl font-bold rounded-xl shadow-lg'>
      </div>

      <BentoCard2 />

      <BentoCard4 />

      <BentoCard3 />

    </div>
  )
}

export default BentoGrid