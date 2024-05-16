import { format } from 'currency-formatter';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { AiFillStar } from 'react-icons/ai';

const Card = ({place}) => {
    const {image, name, price, category, reviews, location} = place;
    return (
        <Link href={`/details/1`} className="h-[500px] flex flex-wrap rounded-xl cursor-pointer transition-all shadow-md hover:shadow-lg">
        {/* image container */}
        <div className="relative h-2/3 w-full">
          <Image
            className="h-full w-full overflow-hidden rounded-tl-xl rounded-tr-xl object-cover"
            alt="Location's image"
            src={image}
          />
          <div className="absolute right-0 bottom-0 p-4 bg-blue-700 text-white rounded-tl-xl font-semibold">
            {location}
          </div>
        </div>
        <div className="w-full flex flex-col gap-4 p-4">
          <div className='mt-2 flex justify-between items-center'>
            <h2 className="text-left text-2xl text-slate-800 font-semibold">
              {name}
            </h2>
            <span className='p-2 rounded-full bg-blue-600 text-white flex items-center gap-2'>
              <AiFillStar color="white" />
              <span className='text-white'>
                {reviews}
              </span>
            </span>
          </div>
          {/* price & reviews */}
          <div className='mt-6 flex justify-between items-center'>
            <span className='text-slate-600'>
              {format(price, { locale: 'en-US' })}
              <span className='ml-2'>
                per night
              </span>
            </span>
            <button className='cursor-pointer py-2 px-6 text-white bg-blue-500'>
              Book
            </button>
          </div>
        </div>
      </Link>
    );
};

export default Card;