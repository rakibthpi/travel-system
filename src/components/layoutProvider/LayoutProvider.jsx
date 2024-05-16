"use client"
import { usePathname } from 'next/navigation';
import React from 'react';
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';

const LayoutProvider = ({children}) => {
    const pathname = usePathname();
    console.log("Layout Pathname",pathname)
    return (
        <div>
            {
                pathname !== '/login' && pathname !== '/signup' && <Navbar/>
            }
            {
                children
            }
            {
                pathname !== '/login' && pathname !== '/signup' && <Footer/>
            }
        </div>
    );
};

export default LayoutProvider;