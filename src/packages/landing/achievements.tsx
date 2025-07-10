import React from 'react'
import { FaTrafficLight, FaTrophy } from 'react-icons/fa6'

const Achievements = () => {
  return (
    <div className='w-full  overflow-hidden h-[70vh] bg-zinc-950 border border-r-0 border-l-0 border-t-2 border-b-2 border-neutral-700'>
      <div className='grid grid-cols-6   items-center justify-between mx-auto max-w-7xl mt-10'>
        <div className='flex col-span-4 flex-col justify-center items-start gap-y-4'>
            <span className='flex items-start    gap-x-3 p-2 border-neutral-800 border bg-transparent rounded-xl'>
                <FaTrophy className='bg-white w-5 h-5 rounded-full p-0.5' />
                <span className='text-sm text-white'>Our Achievements</span>
            </span>

            <h1 className='text-7xl bg-linear-to-r from-neutral-900 to-neutral-800 via-white bg-clip-text  text-transparent mt-2 font-medium'>
                Proven SEO Results <br></br>
                You Can Trust
            </h1>
            <h6 className='text-md font-light text-white'>
                From startups to industry leaders, we've headed business achieve <br></br>
                their all dreams and visions.
            </h6>
        </div>
        <div className='flex flex-col rotate-12 col-span-2 mask-r-from-0% items-end'> 
            <div className='w-[300px] bg-gradient-to-tr from-0% via-30% to-100% from-neutral-800 via-neutral-900 to-neutral-950 h-[150px] p-2 flex flex-col justify-center items-center border-l border-t border-neutral-600 bg-neutral-900 rounded-xl mb-4'> 
                <span className='bg-linear-to-r  from-neutral-600 to-neutral-800 via-white bg-clip-text  text-transparent text-5xl font-bold'>200%</span>
                <span className='text-neutral-400 text-lg'>Organic Traffic</span>
            </div>
            <div className='w-[300px] border-l border-t border-neutral-600  bg-gradient-to-tr from-0% via-30% to-100% from-neutral-800 via-neutral-900 to-neutral-950 h-[150px] p-2 flex flex-col justify-center items-center bg-neutral-900 rounded-xl mb-4'> 
                <span className='bg-linear-to-r from-neutral-600 to-neutral-800 via-white bg-clip-text  text-transparent text-5xl font-bold'>50K+</span>
                <span className='text-neutral-400 text-lg'>Keywords Ranked</span>
            </div>
            <div className='w-[300px] border-l border-t border-neutral-600  bg-gradient-to-tr from-0% via-30% to-100% from-neutral-800 via-neutral-900 to-neutral-950 h-[150px] p-2 flex flex-col justify-center items-center bg-neutral-900 rounded-xl'> 
                <span className='bg-linear-to-r border from-neutral-600 to-neutral-800 via-white bg-clip-text  text-transparent text-5xl font-bold'>7M+</span>
                <span className='text-neutral-400 text-lg'>Leads Generated</span>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Achievements