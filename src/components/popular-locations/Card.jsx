import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Card = ({place}) => {
    const {city, image, numOfPlaces} = place;
    return (
        <Link href={`/location/${city}`} className='cursor-pointer h-[500px] flex flex-wrap rounded-xl shadow-md'>
            <div className='relative h-2/3 w-full'>
                <Image src={image} alt={city} className='h-full w-full object-cover overflow-hidden rounded-tl-xl rounded-tr-xl '/>
                <div className='absolute right-0 bottom-0 bg-blue-500 text-white font-bold p-2'>
                    {city}
                </div>
            </div>
            <div className='flex flex-col gap-4 p-4'>
                <h2 className='text-center text-2xl text-slate-800 font-semibold'>
                    {numOfPlaces} Pleaces te stay
                </h2>
                <p className='text-center mt-2 text-lg text-slate-700'>
                    Discover the best hotel or apartment for your adventurous journey
                </p>
            </div>
        </Link>
    );
};

export default Card;