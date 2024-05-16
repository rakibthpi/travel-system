import React from 'react';
import delhi from '../../../public/assets/delhi.jpg'
import dhaka from '../../../public/assets/dubai.jpg'
import borisal from '../../../public/assets/Mumbai.jpg'
import dinajpur from '../../../public/assets/AbuDhabi.jpg'
import rajshahi from '../../../public/assets/AbuDhabi.jpg'
import Card from './Card';

const PopularLocations = () => {
    const data = [
        {
            city: "Delhi",
            image: delhi,
            numOfPlaces: 10,

        },
        {
            city: "dhaka",
            image: dhaka,
            numOfPlaces: 110,

        },
        {
            city: "Borisal",
            image: borisal,
            numOfPlaces: 101,

        },
        {
            city: "Dinajpur",
            image: dinajpur,
            numOfPlaces: 90,

        },
        {
            city: "Rajshahi",
            image: rajshahi,
            numOfPlaces: 30,

        },
    ]
    return (
        <div className='w-full py-44'>
            <div className='h-full w-5/6 mx-auto flex flex-col justify-start'>
                <h5 className="text-[20px] bg-blue-500 text-white rounded-full p-4 w-max">Explore Top</h5>
                <h2 className="text-4xl text-slate-800 font-bold mt-6 mb-12">Popular Locations</h2>
                <div className='grid grid-cols-4 gap-y-10 gap-x-4'>
                    {
                        data?.map((place, idx) => (
                            <Card key={idx} place={place} />
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default PopularLocations;