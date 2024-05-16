import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import {signOut} from 'next-auth';

const Navbar = () => {
    const [showModal, setShowModal] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const toggleModel = () => {
        setShowModal(!showModal);
    }

    useEffect(() => {
        window.onscroll = () => {
            setIsScrolled(window.pageYOffset === 0 ? false : true);
            return () => (window.onscroll = null);
        }
    }, []);
    return (
        <div className={`fixed z-50 h-20 w-full top-0 left-0 ${isScrolled ? 'shadow-md backdrop-blur ' : 'bg-red-100'}`}>
            <div className='h-full w-2/3 mx-auto flex items-center justify-between'>
                <Link href={'/'} className='flex items-center gap-2 transition-all'>
                    <h1 className={`${isScrolled ? 'text-blue-600' : 'text-[#000]'} text-2xl font-bold}`}>
                        TravelGod
                    </h1>
                    <AiOutlineHome size={25} color={`${isScrolled ? 'rgba(37 99 235)' : '#000'}`}></AiOutlineHome>
                </Link>
                <div>
                    <div className='cursor-pointer' onClick={toggleModel}>
                        <AiOutlineUser size={30} color={`${isScrolled ? 'rgb(37 99 235)' : '#000'}`}></AiOutlineUser>
                    </div>
                    {
                        showModal && (
                            <div onClick={toggleModel} className='absolute top-20 right-[270px] shadow-md flex flex-col gap-4 p-4 bg-white rounded-md'>
                                <Link  href={'/reservations'} className='cursor-pointer text-center'>Reservations</Link>
                                <Link href={'/catalog'} className='cursor-pointer text-center'>Catalog</Link>
                                <button onClick={() => signOut()}>LogOut</button>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;