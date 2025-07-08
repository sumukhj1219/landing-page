"use client"

import React, { useEffect, useRef } from 'react'
import gsap from "gsap"
import { FaLinkedin, FaApple, FaAndroid, FaWindows, FaLinux } from 'react-icons/fa6';

const Marque = () => {
  const marques = [
    { id: 1, title: 'LinkedIn', icon: FaLinkedin },
    { id: 2, title: 'Apple', icon: FaApple },
    { id: 3, title: 'Android', icon: FaAndroid },
    { id: 4, title: 'Windows', icon: FaWindows },
    { id: 5, title: 'Linux', icon: FaLinux },
    { id: 6, title: 'LinkedIn', icon: FaLinkedin },
    { id: 7, title: 'Apple', icon: FaApple },
    { id: 8, title: 'Android', icon: FaAndroid },
    { id: 9, title: 'Windows', icon: FaWindows },
    { id: 10, title: 'Linux', icon: FaLinux },
  ];

  const marqueeWrapperRef = useRef(null);

  useEffect(() => {
    if (!marqueeWrapperRef.current) return;

    const wrapperWidth = marqueeWrapperRef.current.scrollWidth;
    const totalWidth = wrapperWidth / 2;

    const tl = gsap.timeline({
      repeat: -1,
      ease: "none",
    });

    tl.to(marqueeWrapperRef.current, {
      x: -totalWidth,
      duration: 100,
      delay:2
    });

  }, []);

  return (
    <div className='w-full mt-10  overflow-hidden mask-l-from-50% mask-r-from-50%'>
      <div
        ref={marqueeWrapperRef}
        className='flex items-center justify-start  whitespace-nowrap gap-x-28'
      >
        {marques.map((m) => (
          <span className='marquee-item text-shadow-xs text-shadow-white text-2xl font-medium text-white flex items-center gap-x-2' key={`${m.id}-1`}>
            {m.icon && React.createElement(m.icon, { size: 24 })}
            {m.title}
          </span>
        ))}
        {marques.map((m) => (
          <span className='marquee-item text-2xl text-shadow-xs text-shadow-white font-medium text-white flex items-center gap-x-2' key={`${m.id}-2`}>
            {m.icon && React.createElement(m.icon, { size: 24 })}
            {m.title}
          </span>
        ))}
      </div>
    </div>
  );
}

export default Marque;
