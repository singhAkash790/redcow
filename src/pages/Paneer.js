import React, { useEffect } from 'react';
import Navbar from '../navbar';
import Footer from '../Footer';
import Aos from 'aos';
import "aos/dist/aos.css";
import { Stearlizedcream } from './Stearlized-cream';

export const Paneer = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
     }, []);
    return (
        <>
            <Navbar />
            <Stearlizedcream />
            <Footer />
        </>
    )
}

export default Paneer;