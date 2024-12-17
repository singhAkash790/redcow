import React, { useState } from 'react';
import { questions16 } from '../API/accordianapi';
import Footer from '../Footer';
import { Myaccordian } from '../Myaccordian';
import Navbar from '../navbar';

export const Gulabjamun = () => {
    const [data, setData] = useState(questions16);
    return (
        <>
        <Navbar />
            <section className="product-detail m-0">
                <div className="container">            
                <div className="product-container">                            
                    <div className="row">
                        <div className="col-md-5">
                                <div className="produ_img" data-aos="fade-left" data-aos-delay="500" data-aos-once="true" data-aos-duration="1000">
                                    <img src="./images/gulab-jamun.png" alt="" />
                                 </div>
                                 </div>
                                 <div className="col-md-7">
                                <div className="produ_cont" data-aos="fade-right" data-aos-delay="500" data-aos-once="true" data-aos-duration="1000">
                                    <h4>Gulab jamun</h4>
                                    <p>Gulab Jamun is a popular North Indian delicacy, commonly served as a dessert. Red Cow Gulab Jamun are the classic small sweet balls or sweet dumplings made from flour, sugar and milk solids, and fried before they are dipped luxuriously in sweetened sugary syrup. Perfect for auspicious occasions at home or for everyday treat with family and friends.</p>
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

