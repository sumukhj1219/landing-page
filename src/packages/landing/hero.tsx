"use client"
import React from 'react'

const Hero = () => {
    return (
        <div className='grid grid-cols-2 max-w-7xl h-[75vh] items-center justify-center mx-auto mt-5'>
            <div className='flex flex-col'>
                <span className='border flex gap-x-3 items-center justify-center text-white text-sm p-2 border-neutral-800 w-96 rounded-xl'>
                    <span className='rounded-2xl bg-white text-xs text-neutral-950 p-1'>Top</span>
                    India's trusted seo optimization platform
                    <span className='rounded-full p-0.5 bg-lime-400 animate-ping'></span>
                </span>
                <h1 className='text-8xl bg-linear-to-r from-neutral-400 to-neutral-100 bg-clip-text  text-transparent mt-2 font-medium '>
                    Boost your <br></br>
                    website's SEO
                </h1>
                <h3 className='text-xl mt-2 text-white font-light'>
                    Boost analytics for agencies, consultants, affilates, e-commerces and saas
                </h3>
                <div className='flex mt-5  gap-x-5'>
                    <span className='p-2  bg-white rounded text-neutral-950'>Get started for free</span>
                    <span className='p-2 bg-neutral-900 rounded text-white'>Watch demo</span>
                </div>
            </div>
            <div className='relative w-full h-[300px] sm:h-[400px] md:h-[500px] flex items-center justify-center'>
                {/* <img
                    src={'./star.png'}
                    alt='Star 1'
                    className='absolute size-28 top-0 left-1/4 transform -translate-x-1/2 -translate-y-1/2 md:top-1/4 md:left-1/4'
                />
                <img
                    src={'./star.png'} 
                    alt='Star 2'
                    className='absolute size-48 top-1/2 left-1/2 transform saturate-200 -translate-x-1/2 -translate-y-1/2'
                />
                <img
                    src={'./star.png'}
                    alt='Star 3'
                    className='absolute size-28 bottom-0 right-1/4 transform translate-x-1/2 translate-y-1/2 md:bottom-1/4 md:right-1/4'
                /> */}

            </div>
        </div>
    )
}

export default Hero
