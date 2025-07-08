"use client"
import React, { useRef } from 'react'
import { motion, useAnimate } from "framer-motion"

const BentoCard4 = () => {
    const [scope, animate] = useAnimate();
    const cardRef = useRef(null);
    const [textScope, textAnimate] = useAnimate()

    const animateText = async () => {
        await textAnimate(
            textScope.current,
            { y: 0, opacity: 1, scale: 1 },
            { duration: 0.8, ease: "easeOut", delay: 0.2 }
        );
    };

    const handleMouseClick = async () => {
        await animate(
            scope.current,
            { y: -50, opacity: 0 },
            { duration: 0.4, ease: "easeIn" }
        );
        await animateText();
    };

    const handleMouseLeave = () => {
        animate(
            scope.current,
            { y: 0, opacity: 1 },
            { duration: 0.5, ease: "easeOut", delay: 0.1 }
        );
        textAnimate(
            textScope.current,
            { opacity: 0, scale: 0, y: 30 },
            { duration: 0.4, ease: "easeIn" }
        );
    };
    return (
        <div
            ref={cardRef}
            onMouseLeave={handleMouseLeave}
            className='col-span-1 group row-span-1 relative overflow-hidden
                        flex flex-col gap-y-2 items-center justify-center text-white font-medium rounded-xl shadow-lg
                        bg-gradient-to-l from-neutral-900 via-neutral-800 to-neutral-900'
        >
            <motion.span
                ref={scope}
                onClick={handleMouseClick}
                className='connect  bg-transparent border text-xl rounded-2xl border-neutral-600 p-3 cursor-pointer z-10 bg-linear-to-r from-neutral-400 to-neutral-100 bg-clip-text  text-transparent flex items-center justify-center gap-x-5'
            >
                Connect
                <span className='p-1  rounded-full group-hover:bg-lime-500 bg-red-500 animate-pulse'></span>
            </motion.span>
            <motion.span
                ref={textScope}
                initial={{
                    opacity: 0,
                    scale: 0,
                    y: 30
                }}
                className='absolute flex flex-col items-center justify-center gap-y-1'
            >
                <span className='text-7xl bg-linear-to-r from-neutral-400 via-white to-neutral-400 bg-clip-text  text-transparent text-shadow-sm text-shadow-neutral-500'>
                    Google
                </span>
                <span className='text-xs'>
                    Search Console
                </span>
            </motion.span>
        </div>
    )
}

export default BentoCard4
