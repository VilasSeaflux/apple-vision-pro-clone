'use client'
import React, { useRef } from 'react';
import {useScroll, useTransform, motion}  from 'framer-motion';
import { IoPlayCircleOutline } from 'react-icons/io5';

const OverlayText = ({subHeading, subHeading2='', subHeading3='', showBtn=false, heading=''}) => {
    const targetRef = useRef(null);
    const {scrollYProgress} = useScroll({
        target: targetRef,
        offset: ["0 1", "1 0"]
    });
    const y = useTransform(scrollYProgress, [.3, 1], [800, -800]);
    const opacity = useTransform(scrollYProgress, [1], [1]);
    return (
        <motion.div
            style={{
                y,
                opacity
            }}
            ref={targetRef} 
            className="absolute left-0 top-0 flex flex-col h-screen items-center justify-center w-full z-10 text-white gap-y-20"
        >
            <p className="text-xl md:text-2xl font-bold capitalize -mb-12">{heading}</p>
            <p className="mb-2 text-center text-2xl md:text-5xl w-3/4 font-bold capitalize leading-loose">{subHeading}</p>
            <p className="mb-2 text-center text-2xl md:text-5xl w-3/4 font-bold capitalize leading-loose">{subHeading2}</p>
            <p className="mb-2 text-center text-2xl md:text-5xl w-3/4 font-bold capitalize leading-loose">{subHeading3}</p>
            {showBtn && 
                <button
                    className='text-xl font-medium flex flex-row items-center gap-2 border-4 rounded-full border-orange-600 px-6 py-3 text-orange-600'
                >
                    <IoPlayCircleOutline className='text-2xl' />
                    Watch the Film
                </button>
            }
        </motion.div>
    );   
}

export default OverlayText;