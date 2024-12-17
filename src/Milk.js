import React, { useEffect } from 'react';
import Navbar from './navbar';
import Footer from './Footer';
import Aos from 'aos';
import "aos/dist/aos.css";
import { Creamy_delight_milk } from './Creamy-delight-milk';
import { Full_cream_milk } from './Full-cream-milk';
import { Premium_milk } from './Premium-milk';
import { Gold_milk } from './Gold-milk';
import { Regular_milk } from './Regular-milk';


export const Milk = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
     }, []);
    return (
        <>
             <Navbar />
                <Creamy_delight_milk />
                <Full_cream_milk />
                <Premium_milk />
                <Gold_milk />
                <Regular_milk />
            <Footer />
        </>
    )
}
