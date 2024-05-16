"use client"
import React from 'react';
import image_1 from '../../../public/assets/hr_1.jpg'
import image_2 from '../../../public/assets/hr_2.jpg'
import image_3 from '../../../public/assets/hr_3.jpg'
import image_4 from '../../../public/assets/hr_4.jpg'
import image_5 from '../../../public/assets/hr_5.jpg'
import image_6 from '../../../public/assets/hr_6.jpg'
import image_7 from '../../../public/assets/hr_7.jpg'
import image from "../../../public/assets/hr_1.jpg"
import Image from 'next/image';
import Select from '@/ui/Select';
import { optionLocations } from '@/data/data';
import Input from '@/ui/Input';
import Button from '@/ui/Button';
import Card from '@/components/best-hotel/Card';

const Catalog = () => {
    const data = [
        {
          name: "Arabian Paradise",
          image: image_1,
          price: 324.50,
          category: "Luxury",
          reviews: 4.7,
          location: "Dubai, UAE"
        },
        {
          name: "Arabian Paradise",
          image: image_2,
          price: 324.50,
          category: "Luxury",
          reviews: 4.7,
          location: "Dubai, UAE"
        },
        {
          name: "Arabian Paradise",
          image: image_3,
          price: 324.50,
          category: "Luxury",
          reviews: 4.7,
          location: "Dubai, UAE"
        },
        {
          name: "Arabian Paradise",
          image: image_4,
          price: 324.50,
          category: "Luxury",
          reviews: 4.7,
          location: "Dubai, UAE"
        },
        {
          name: "Arabian Paradise",
          image: image_5,
          price: 324.50,
          category: "Luxury",
          reviews: 4.7,
          location: "Dubai, UAE"
        },
        {
          name: "Arabian Paradise",
          image: image_6,
          price: 324.50,
          category: "Luxury",
          reviews: 4.7,
          location: "Dubai, UAE"
        },
        {
          name: "Arabian Paradise",
          image: image_7,
          price: 324.50,
          category: "Luxury",
          reviews: 4.7,
          location: "Dubai, UAE"
        },
      ]
    return (
        <div className='min-h-screen w-full '>
            <div className='relative h-3/5 w-full'>
                <Image src={image} alt="hero image" className='h-screen w-full object-cover brightness-50 '></Image>
                <h3 className='absolute text-5xl pb-6 text-center text-white font-bold absolute top-1/2 left-1/2 transform -translet-x-1/2 -translate-y-1/2 '>
                    Dhaka
                </h3>
            </div>
            <div className='w-full h-full relative z-20 -mt-12 flex flex-col items-center'>
                <form action="" className='boreder w-2/3 h-28 border-slate-500 px-4 py-12 rounded-xl bg-blue-600 text-white flex justify-between items-center'>
                    <div className='flex flex-col items-center gap-1'>
                        
                        <h3 className='ml-1 text-[#efefef] font-semibold'>
                            City 
                        </h3>
                        <Select data={optionLocations} classname="text-blue-800 p-2 rounded-xl outline-none capitalize"></Select>
                    </div>
                    <div className='flex flex-col items-center gap-1'>
                        <h3 className='ml-1 text-[#efefef] font-semibold'>Price</h3>
                        <div className='flex items-center gap-2'>
                            <Input type="number" placeholder="Min. price" className="text-blue-800 p-2 rounded-xl outline-none " />
                            <Input type="number" placeholder="Max. price" className="text-blue-800 p-2 rounded-xl outline-none "  />
                        </div>
                    </div>
                    <div className='flex flex-col items-start gap-1'>
                        <h1 className='ml-1 text-[#efefef] font-semibold'>
                            Type of Hotel
                        </h1>
                        <Select data={optionLocations} classname="text-blue-800 p-2 rounded-xl outline-none"></Select>
                    </div>
                    <Button
                        disabled={false}
                        label={"Search"}
                        className=" mt-6 px-6 py-2 text-[20px] bg-white rounded-xl text-blue-600 transition-all hover:bg-[#efefef] "
                    ></Button>
                </form>
                <div className='w-full mt-36 max-w-7xl grid grid-cols-3 gap-5'>
                    {
                        data?.map((pleace, idx) => <Card key={idx} place={pleace}></Card>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Catalog;