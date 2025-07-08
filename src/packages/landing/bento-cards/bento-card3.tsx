import React from 'react';
import { motion } from 'framer-motion';

const BentoCard3 = () => {
  return (
    <div className='col-span-2 row-span-1
                    flex items-center justify-center text-white text-lg font-medium rounded-xl shadow-lg
                    bg-gradient-to-l from-neutral-900 via-neutral-800 to-neutral-900
                    overflow-hidden relative '>
      <div className='absolute inset-0 flex items-center justify-center'>
        <motion.div
          className='absolute w-72 sm:w-80 h-20 p-4 bg-neutral-800 rounded-xl shadow-lg
                     flex flex-col justify-between text-neutral-200 font-semibold cursor-pointer'
          style={{
            top: '20%',
            left: '25%',
            transform: 'translate(-50%, -50%) rotate(-8deg)',
            zIndex: 4,
          }}
          whileHover={{
            scale: 1.05,
            y: -10,
            rotate: 0,
            zIndex: 10,
            boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.4)",
            transition: { duration: 0.2, ease: "easeOut" }
          }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <span className='text-xs text-neutral-500 font-normal'>PLATFORM</span>
          <span className='text-xl'>Data Animation</span>
        </motion.div>

        <motion.div
          className='absolute w-72 sm:w-80 h-20 p-4 bg-neutral-800 rounded-xl shadow-lg
                     flex flex-col justify-between text-neutral-200 font-semibold cursor-pointer'
          style={{
            top: '40%',
            left: '35%',
            transform: 'translate(-50%, -50%) rotate(4deg)',
            zIndex: 3,
          }}
          whileHover={{
            scale: 1.05,
            y: -10,
            rotate: 0,
            zIndex: 10,
            boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.4)",
            transition: { duration: 0.2, ease: "easeOut" }
          }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <span className='text-xs text-neutral-500 font-normal'>MODULE</span>
          <div className='flex justify-between items-end'>
            <span className='text-xl'>Text Vanishes</span>
            <span className='text-xs text-neutral-500 font-normal'>12 views</span>
          </div>
        </motion.div>

        <motion.div
          className='absolute w-72 sm:w-80 h-20 p-4 bg-neutral-800 rounded-xl shadow-lg
                     flex flex-col justify-between text-neutral-200 font-semibold cursor-pointer'
          style={{
            top: '60%',
            left: '45%',
            transform: 'translate(-50%, -50%) rotate(-6deg)',
            zIndex: 2,
          }}
          whileHover={{
            scale: 1.05,
            y: -10,
            rotate: 0,
            zIndex: 10,
            boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.4)",
            transition: { duration: 0.2, ease: "easeOut" }
          }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <span className='text-xs text-neutral-500 font-normal'>SECTION</span>
          <div className='flex justify-between items-end'>
            <span className='text-xl'>Sailit Page</span>
            <span className='text-xs text-neutral-500 font-normal'>5.1k views</span>
          </div>
        </motion.div>

        <motion.div
          className='absolute w-72 sm:w-80 h-20 p-4 bg-neutral-800 rounded-xl shadow-lg
                     flex flex-col justify-between text-neutral-200 font-semibold cursor-pointer'
          style={{
            top: '80%',
            left: '55%',
            transform: 'translate(-50%, -50%) rotate(2deg)',
            zIndex: 1,
          }}
          whileHover={{
            scale: 1.05,
            y: -10,
            rotate: 0,
            zIndex: 10,
            boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.4)",
            transition: { duration: 0.2, ease: "easeOut" }
          }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <span className='text-xs text-neutral-500 font-normal'>CONTENT</span>
          <div className='flex justify-between items-end'>
            <span className='text-xl'>Fitness Culture</span>
            <span className='text-xs text-neutral-500 font-normal'>00:24 views</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default BentoCard3;