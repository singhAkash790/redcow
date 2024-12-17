import React, { useEffect, useState } from 'react';
import Footer from '../Footer'
import Navbar from '../navbar'
import Aos from 'aos';
import "aos/dist/aos.css";
import { AmritiDoi } from './Amriti-Doi';
import { AamDoi } from '../Aam-Doi';
import { MistiDoi } from './Misti-Doi';

export const Doi = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
     }, []);
    return (
        <>
            <Navbar />
             <AmritiDoi />
             <AamDoi />
             <MistiDoi />
            <Footer />
        </>
    )
}
