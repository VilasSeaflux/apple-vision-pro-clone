'use client'
import React, {useRef} from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const StickyVideo = ({
    videoUrl
}) => {
    const targetRef = useRef(null);
    const {scrollYProgress} = useScroll({
        target: targetRef,
        offset: ["start end", "end start"]
    });
    const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
    const scale = useTransform(scrollYProgress, [0.6, 1.3], [1, 0.7]);
    console.log('videoUrl', videoUrl);
    return (
        <motion.video
            ref={targetRef} 
            className="sticky z-0 overflow-hidden h-[135vh] object-cover"  
            style={{scale}}  
            autoPlay
            loop
            muted
        >
            <source 
                src={videoUrl} 
                type='video/mp4'
            />


            <motion.div 
            className="absolute inset-0 bg-neutral-950/70" style={{opacity}}/>
    </motion.video>
    );
}

export default StickyVideo;