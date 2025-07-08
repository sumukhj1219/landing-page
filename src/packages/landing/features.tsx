import React from 'react'
import { FaCodeBranch } from 'react-icons/fa6'
import BentoGrid from './bento-grid'

const Features = () => {
    return (
        <div className='w-full max-w-7xl mx-auto mt-10'>
            <div className='flex flex-col gap-y-2 mx-auto items-start justify-center'>
                <span className='p-3 bg-transparent border rounded-xl text-sm text-white border-neutral-800'>
                    Features
                </span>
                <h1 className='text-7xl bg-linear-to-r from-neutral-400 via-neutral-100 to-neutral-400 bg-clip-text  text-transparent mt-2 font-medium '>
                    SEO Tool That <br></br>
                    Deliver's Real Results
                </h1>
                <h3 className='text-lg mt-2 text-white font-light'>
                    Our powerful analytical features helps your organization reach the up most level.
                </h3>
            </div>
            <BentoGrid />
        </div>
    )
}

export default Features
