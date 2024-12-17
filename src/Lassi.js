import React, { useEffect, useState } from 'react';
import Footer from './Footer'
import Navbar from './navbar'
import Aos from 'aos';
import "aos/dist/aos.css";
import { Freshlassi } from './Fresh-lassi';
import { Mangolassi } from './Mango-Lassi';

export const Lassi = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
     }, []);
    return (
        <>
            <Navbar />
            <Freshlassi /> 
            <Mangolassi />
            <Footer />
        </>
    )
}
