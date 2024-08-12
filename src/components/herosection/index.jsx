import React from 'react';
import Image from 'next/image';
import { FaApple } from "react-icons/fa";

export default function HeroSection() {
  return (
    <section className='relative font-sans'>
        <Image 
            src={"https://www.apple.com/v/apple-vision-pro/e/images/overview/hero/hero_us_startframe__bj4ciwxazquq_large_2x.jpg"}
            width={400}
            height={400}
            className="h-screen w-screen object-contain "
        />
        <div className='absolute bottom-10 w-full'>
            <h1 className='text-black text-center text-6xl font-medium mb-4 flex flex-row items-center justify-center'><FaApple /> Vision Pro</h1>
            <h6 className='text-orange-600 text-center text-2xl font-semibold mb-2'>Book a demo &rarr;</h6>
            <h6 className='text-orange-600 text-center text-2xl font-semibold'>Previous Vision OS 2 &rarr;</h6>
        </div>
    </section>
  );
}
