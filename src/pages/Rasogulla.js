import React, { useState } from 'react';
import { questions17 } from '../API/accordianapi';
import Footer from '../Footer';
import { Myaccordian } from '../Myaccordian';
import Navbar from '../navbar';

export const Rasogulla = () => {
    const [data, setData] = useState(questions17);
    return (
        <>
        <Navbar />
            <section className="product-detail m-0">
                <div className="container">            
                <div className="product-container">                            
                    <div className="row">
                        <div className="col-md-5">
                                <div className="produ_img" data-aos="fade-left" data-aos-delay="500" data-aos-once="true" data-aos-duration="1000">
                                    <img src="./images/Rasgolla.png" alt="" />
                                 </div>
                                 </div>
                                 <div className="col-md-7">
                                <div className="produ_cont" data-aos="fade-right" data-aos-delay="500" data-aos-once="true" data-aos-duration="1000">
                                    <h4>Rasogulla</h4>
                                    <p>Red Cow Rasogulla is a quintessential Bengali sweet dish. A classic sweet dumpling made of sugar and milk, it is hygienically processed by Red Cow Dairy and is also supplied to reputed sweet makers of Kolkata. This tin of sweets serves as a perfect gift for your family and all those who wish to celebrate with great taste  </p>
                                    </div>
                                </div>
                            </div> 
                        <ul className="tick">
                            <li data-aos="fade-up" data-aos-delay="500" data-aos-once="true" data-aos-duration="1000"><img src="images/tick01.png" alt=""/><span>No Sugar Added</span></li>
                            <li data-aos="fade-up" data-aos-delay="600" data-aos-once="true" data-aos-duration="1000"><img src="images/tick02.png" alt=""/><span>No Preservatives</span></li>
                            <li data-aos="fade-up" data-aos-delay="700" data-aos-once="true" data-aos-duration="1000"><img src="images/tick03.png" alt=""/><span>A Grade</span></li>
                        </ul>                          
                    </div>
                </div>
            </section>
            <section className="accordians">
                <div className="container">
                    <div className="product-container"> 
                        <div className="accordian">                            
          {
              data.map((curElem) => {
                  const { id } = curElem
                    return <Myaccordian key={ id} { ...curElem} />
            })
            }  
           </div>
                    </div>
                    </div>
                    </section>  
                    <Footer />
        </>
    )
}

