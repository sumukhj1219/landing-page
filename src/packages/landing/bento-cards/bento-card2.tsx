import React, { useEffect } from 'react';
import gsap from 'gsap';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';

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
        <svg width="100%" height="100%" viewBox="15 -15 300 180" >
          <g stroke='white' strokeWidth={0.2} fill='none'>
            <path id="motionPath" d="M50 30 C70 130, 100 130, 120 30 S180 30, 280 130" />
          </g>
          <circle className='dot' cx={50} cy={30} r={5} fill='white'></circle>
        </svg>
      </div>
    </div>
  );
}

export default BentoCard2;