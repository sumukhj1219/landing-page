"use client"
import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { motion } from 'framer-motion';

const originalUpperItems = [
  { id: 1, title: 'Our powerful SEO insights' },
  { id: 2, title: 'Keyword Research Deep Dive' },
  { id: 3, title: 'Competitor Analysis Reports' },
  { id: 4, title: 'Content Optimization Scores' },
];

const originalLowerItems = [
  { id: 1, title: 'Highly interactive dashboard' },
  { id: 2, title: 'Real-time Traffic Monitoring' },
  { id: 3, title: 'Backlink Profile Audits' },
  { id: 4, title: 'Technical SEO Health Checks' },
];

const upperItems = [...originalUpperItems, ...originalUpperItems];
const lowerItems = [...originalLowerItems, ...originalLowerItems];

const Star = ({ index }) => (
  <motion.span
    className="text-neutral-400 text-xs mx-2"
    initial={{ opacity: 0.5, scale: 2 }}
  >
    &#9733;
  </motion.span>
);


const BentoCard1 = () => {
  const upperRef = useRef(null)
  const lowerRef = useRef(null)

  useEffect(() => {
    if (!upperRef.current || !lowerRef.current) return;

    const upperScrollWidth = upperRef.current.scrollWidth / 2;
    const lowerScrollWidth = lowerRef.current.scrollWidth / 2;

    const tl = gsap.timeline({
      repeat: -1,
      ease: 'none',
    });

    tl.to(upperRef.current, {
      x: -upperScrollWidth,
      duration: 300,
    }, 0);

    tl.to(lowerRef.current, {
      x: lowerScrollWidth,
      duration: 300,
    }, 0);

    
  }, []);

  return (
    <div className='col-span-2 row-span-1 bg-gradient-to-l from-neutral-900 via-neutral-800 to-neutral-900
                    flex items-center justify-center overflow-hidden text-white text-xl font-semibold rounded-xl shadow-lg'>
      <div className='flex flex-col gap-y-16 py-8'>

        <div ref={upperRef} className='upper-row flex items-center gap-x-10 whitespace-nowrap'>
          {
            upperItems.map((ui, index) => (
              <div key={`${ui.id}-${index}`} className='flex flex-col items-center justify-center min-w-[200px]'>
                <span className='text-xs text-neutral-300 mb-2'>{ui.title}</span>
                <div className='bg-neutral-800 p-3 rounded-3xl w-40 h-12 ring-1 shadow-md shadow-neutral-950 ring-neutral-700 relative overflow-hidden flex items-center justify-center'>
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} index={i} />
                  ))}
                </div>
              </div>
            ))
          }
        </div>

        <div ref={lowerRef} className='lower-row flex items-center gap-x-10 whitespace-nowrap'>
          {
            lowerItems.map((li, index) => (
              <div key={`${li.id}-${index}`} className='flex flex-col items-center justify-center min-w-[200px]'>
                <span className='text-xs text-neutral-300 mb-2'>{li.title}</span>
                <div className='bg-neutral-800 p-3 rounded-3xl w-40 h-12 ring-1 shadow-md shadow-neutral-950 ring-neutral-700 relative overflow-hidden flex items-center justify-center'>
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} index={i} />
                  ))}
                </div>
              </div>
            ))
          }
        </div>

      </div>
    </div>
  )
}

export default BentoCard1