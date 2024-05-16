"use client"
import Image from 'next/image';
import hotel_image_1 from '../../../../public/assets/hr_1.jpg';
import hotel_image_2 from '../../../../public/assets/hr_2.jpg';

import React, { useRef, useState } from 'react';

import { format } from 'currency-formatter';
import {register} from 'swiper/element/bundle';
import { AiFillStar } from 'react-icons/ai';
import { CiLocationOn } from 'react-icons/ci';
import { FaBed, FaWifi } from 'react-icons/fa';
import Review from './Review';
import BookModel from '@/components/book-modal/BookModel';

register()
const HotelDetails = (ctx) => {
    const id = ctx.params.id;
    const [selectedStar, setSelectedStar] = useState(5);
    const [showModal, setShowModal] = useState(false);
    const swiperElRef = useRef(null);
    const handleShowModel = () => {
        setShowModal(prev => true)
    }
    const handleHideModal = () => {
        setShowModal(prev => false)
    }
    return (
        <div className={`min-h-screen w-full mt-24 ${showModal && "overflow-hidden"}`}>
           {
               showModal && <BookModel handleHideModal={handleHideModal}></BookModel>
           }
            <div className='h-full w-3/4 mx-auto'>
                <div>
                    <div className='w-full h-[750px] overflow-hidden mx-auto'>
                        <div className='w-full h-full'>
                            <swiper-container
                                ref={swiperElRef}
                                slides-per-view={1}
                                navigation="true"
                            >
                                <swiper-slide>
                                    <Image src={hotel_image_1} alt='photos' className='h-[750px] w-full object-cover'></Image>
                                </swiper-slide>
                                <swiper-slide>
                                    <Image src={hotel_image_2} alt='photos' className='h-[750px] w-full object-cover'></Image>
                                </swiper-slide>
                            </swiper-container>
                        </div>
                    </div>
                    <div className='mt-12 px-6 w-full flex items-center justify-between'>
                        <h2 className='font-bold text-4xl'>
                            Arabian Paradise
                        </h2>
                        <div>
                            <span className='p-2 px-4 text-[22px] rounded-full bg-blue-600 text-white flex items-center gap-2'>
                                <AiFillStar color="white"></AiFillStar>
                                <span className='text-white'>4.7</span>
                            </span>
                        </div>
                    </div>
                    <div className='mt-16 px-6 flex items-center gap-8'>
                        <span className='flex items-center gap-2'>
                            <CiLocationOn></CiLocationOn>
                            Dubai, UAE
                        </span>
                        <span  className='flex items-center gap-2'>
                            {
                                format(325.50, {locale: 'en-US'})
                            }/night
                        </span>
                        <span  className='flex items-center gap-2'>3 <FaBed></FaBed></span>
                        <span  className='flex items-center gap-2'>Free <FaWifi></FaWifi></span>
                    </div>
                    <div className='mt-16 px-6 w-full flex items-center justify-between'>
                        <p className='text-xl max-w-xl text-state-700'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias pariatur hic quaerat similique voluptatem necessitatibus distinctio saepe sunt earum magnam aut excepturi commodi et est, corrupti fugit neque. Maxime qui sapiente ex cum in!</p>
                        <button onClick={handleShowModel} className='cursor-pointer rounded-lg py-2 px-6 text-xl text-white bg-blue-500'>
                            book
                        </button>
                    </div>
                </div>
                <div className='border-t-2 border-white-800 px-6 mt-16 mx-auto'>
                    <h1 className='mt-16 text-3xl font-bold'>Reviews</h1>
                    <div className='mt-8 flex items-center gap-6'>
                        {
                            Array.from(Array(5).keys()).map((number) => (
                                <span key={number} onClick={() => setSelectedStar(number + 1)} className={`${selectedStar === number + 1 ? "scale-125" : ""}`}>
                                      {number + 1}
                                      <AiFillStar size={25} color='rgb(59, 130, 246)'></AiFillStar>
                                </span>
                            ))
                        }
                    </div>
                    <div className='mt-8 flex items-center gap-28 border rounded-lg py-4 w-max'>
                        <input type="text" className='outline-none px-4' placeholder='Leave your opinion...' />
                        <button className='cursor-pointer rounded-lg py-2 px-6 text-xl text-white bg-blue-500 hover:bg-blue-400'>Post</button>
                    </div>
                    <Review></Review>
                </div>
            </div>
        </div>
    );
};

export default HotelDetails;