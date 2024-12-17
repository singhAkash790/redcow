import React, { useEffect } from 'react';
import Aos from 'aos';
import "aos/dist/aos.css";

export const Bengal = () => {
    useEffect(() => {
       Aos.init({ duration: 2000 });
    }, []);
    return (
        <>
            <section>
                <div className="bengal">
                    <div className="container">
                        <div className="row">
                            <div className="web-container">
                            <div className="heading">
                                <h2>Pride of Bengal</h2>
                            </div>
                            <div className="count">
                                <ul>
                                    <li data-aos="fade-up"><img src="./images/icon01.png" alt="" /><span><strong>24</strong><p>Milk Chilling Plants</p></span></li>
                                    <li><img src="./images/icon02.png" alt="" /><span><strong>3</strong><p>Processing Units</p></span></li>
                                    <li><img src="./images/icon05.png" alt="" /><span><strong>3.5 Lakh</strong><p>Processing Units</p></span></li>
                                    <li><img src="./images/icon04.png" alt="" /><span><strong>12</strong><p>Procurement Districts</p></span></li>
                                    <li><img src="./images/icon03.png" alt="" /><span><strong>600+</strong><p>Employees</p></span></li>
                                </ul>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="sweetbanner">
                    <div className="container">
                            <div className="row">
                                <div className="web-container">
                                    <h2>Our sweets make life better.</h2>
                                    </div>
                            </div>
                    </div>
                </div>
            </section>
            
           
        </>
    )
}
