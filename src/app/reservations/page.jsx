
import listing_image from '../../../public/assets/hr_1.jpg'
import React from 'react';
import Card from './Card';


const Reservations =  () => {
    const data = [
        {
            id: crypto.randomUUID(),
            listingId: 3,
            image: listing_image,
            location: "Berlin",
            name: "Arabian Paradise",
            startDate: new Date(),
            endDate: new Date(new Date().getTime() + 5 * 24 * 60 * 60 * 1000),
            daysDifference: 5,
            pricePerNight: 500,
        },
        {
            id: crypto.randomUUID(),
            listingId: 4,
            image: listing_image,
            location: "Berlin",
            name: "Arabian Paradise",
            startDate: new Date(),
            endDate:  new Date(new Date().getTime() + 5 * 24 * 60 * 60 * 1000),
            daysDifference: 5,
            pricePerNight: 500,
        },
        {
            id: crypto.randomUUID(),
            listingId: 4,
            image: listing_image,
            location: "Berlin",
            name: "Arabian Paradise",
            startDate: new Date(),
            endDate:  new Date(new Date().getTime() + 5 * 24 * 60 * 60 * 1000),
            daysDifference: 5,
            pricePerNight: 500,
        }
    ]
    console.log("endDate", new Date(new Date().getTime() + 5 * 24 * 60 * 60 * 1000))
    console.log("Start date",new Date())
    return (
        <div className='mt-24 px-16 min-h-screen w-full'>
            <div className='h-full w-full grid grid-cols-3 gap-4 max-w-fit justify-center mx-auto'>
                {
                  data?.map((hotel) => <Card key={hotel.id} hotel={hotel} />)
                }
            </div>
        </div>
    );
};

export default Reservations;