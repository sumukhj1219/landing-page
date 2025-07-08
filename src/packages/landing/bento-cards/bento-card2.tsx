import React, { useEffect } from 'react';
import gsap from 'gsap';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
import { FaBatteryHalf } from 'react-icons/fa6';

gsap.registerPlugin(MotionPathPlugin);

const BentoCard2 = () => {
  useEffect(() => {
    const animation = gsap.to('.dot', {
      duration: 3,
      repeat: -1,
      repeatDelay: 3,
      yoyo: true,
      ease: "power1.inOut",
      motionPath: {
        path: "#motionPath",
        align: "#motionPath",
        alignOrigin: [0.5, 0.5],
        autoRotate: true,
      }
    });

    return () => {
      animation.kill();
    };

  }, []);

  return (
    <div className='col-span-1 row-span-1 bg-gradient-to-l from-neutral-900 via-neutral-800 to-neutral-900
                    flex items-center justify-center text-white text-xl font-semibold rounded-xl shadow-lg'>

      <div className='flex items-center bg-transparent border-8 rounded-xl border-neutral-700 justify-center p-1 mx-auto rotate-10 shadow-lg shadow-neutral-900'>

        <svg width="100%" height="100%" viewBox="15 -30 300 180" >
          <text x='20' y='-10' stroke='gray' strokeWidth={0.7} fill='none' className='text-xs font-light'>
            +10k views
          </text>
          <text x='20' y='10' stroke='gray' strokeWidth={0.7} fill='none' className='text-xs font-light'>
            -100
          </text>
          
          <g stroke='white' strokeDasharray={2} strokeWidth={0.2} fill='none'>
            <path id="motionPath" d="M50 30 C70 130, 100 130, 120 30 S180 30, 280 130" />
          </g>
          <circle className='dot' cx={50} cy={30} r={5} fill='white'></circle>

          <circle cx={300} cy={-15} r={2} className='animate-pulse' fill='lime'></circle>
          <path d='M300 -5 v 100 l-10 10 v 30 l 10 10' stroke='white' fill='none' strokeWidth={0.1}></path>
        </svg>

        <div className='absolute bottom-4 left-4 text-neutral-400'>
          <FaBatteryHalf size={18} fill='lime' opacity={0.5} /> 
        </div>
      </div>
    </div>
  );
}

export default BentoCard2;