import React, { useState } from 'react';
import person_image from '../../../../public/assets/bianco_2.png'
import Image from 'next/image';
import { AiFillStar } from 'react-icons/ai';

const Review = () => {
   
    return (
        <div className='mt-16 flex flex-col gap-24 w-1 w-1/3'>
            <div className='w-full flex gap-4'>
                <div>
                    <Image className='w-full h-full object-cover rounded-full' src={person_image} alt='photos'></Image>
                </div>
                <div>
                    <h3 className='font-semibold text-[20px]'>John Doe</h3>
                    <span className='text-slate-700'>2 minutes age</span>
                    <div className='text-slate-700 mt-7'>
                        Best hotel In Dhaka
                    </div>
                </div>
                <span className='ml-auto flex items-center gap-2'>
                    5
                    <AiFillStar size={23} color='rgb(59, 130, 246)'></AiFillStar>
                </span>
            </div>
        </div>
    );
};

export default Review;