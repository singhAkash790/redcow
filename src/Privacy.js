import React, { useEffect } from 'react';
import Footer from './Footer'
import Navbar from './navbar'
import Aos from 'aos';
import "aos/dist/aos.css";

export const Privacy = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
     }, []);
  return (
    <>
    <Navbar/>
        <section id='content'>
            <div className='container'>
                <div className='row'>
                    <div className='web-container'>
                        <div className='heading'>
                            <h1>Privacy Policy</h1>
                        </div>
                        <div className='contents text-center'>
                        <p>Link: This Privacy Policy describes Red Cow (Herein after referred to as the “Company”) policies andprocedures on the collection and use and disclosure of the Information provided by the Users    and visitors of the Website (together referred to as the “Users”). The Company shall not use   the User’s information in any manner except as provided under this Privacy Policy. Every User who   accesses the Website agrees to be bound by the terms of this Privacy Policy. </p>
                        <p>
        	Interpretation: In this Privacy Policy, references to “You”, “Your”, “User” shall mean the end user        	accessing the Website or the Services and “We”, “Us” and “Our” shall mean the Company, its affiliates and partners.
            </p>     	
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <Footer/>
    </>
  )
}
