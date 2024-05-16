import Image from 'next/image';
import React from 'react';

const Hero = ({image, mainHeader, secondaryHeader}) => {
    return (
        <div>
            <div className='relative h-screen w-full'>
                <Image src={image} alt="hero image" className='h-full w-full object-cover brightness-50 ' />
                <div className='absolute  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 '>
                    <h1 className='text-5xl pb-6 text-center text-white font-bold'>{mainHeader}</h1>
                    <h1 className='text-3xl text-white text-center font-bold'>{mainHeader}</h1>
                </div>
            </div>
        </div>
    );
};

export default Hero;