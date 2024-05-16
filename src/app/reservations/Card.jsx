import { format } from 'date-fns';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Card = ({hotel}) => {
    return (
        <div className='flex flex-col'>
            <Link href={`/catalog/${hotel.listingId}`}>
                <Image src={hotel.image.src} alt={hotel.name} className='rounded-xl shadow-xl' width={300} height={500}></Image>
            </Link>
            <div className='p-2 mt-2 flex flex-col gap-4'>
                <span className='font-semibold text-lg'>
                    {
                        hotel.location
                    }
                </span>
                <span>
                    {
                        hotel.name
                    }
                </span>
                <div>
                    <span className='text-slate-500'>
                        {
                            format(hotel.startDate, "MMM do yyyy")
                        }
                    </span>
                    <span className='px-2'>-</span>
                    <span className='text-slate-500'>
                        {  
                            format(hotel.endDate, "MMM do yyyy")   
                        }
                    </span>
                </div>
                <div>
                    <h3>Total Price: ${hotel.daysDifference * hotel.pricePerNight}</h3>
                </div>
                <button className='w-full py-2 text-white rounded-md bg-blue-500 transition-all hover:bg-red-300'>
                        Cancel
                </button>
            </div>
        </div>
    );
};

export default Card;