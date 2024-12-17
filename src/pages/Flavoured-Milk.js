import React, { useEffect, useState } from 'react';
import Footer from '../Footer'
import Navbar from '../navbar'
import Aos from 'aos';
import "aos/dist/aos.css";
import { Myaccordian } from '../Myaccordian';
import { questions8 } from '../API/accordianapi'

export const Flavoured_Milk = () => {
    const [data, setData] = useState(questions8);
    useEffect(() => {
        Aos.init({ duration: 2000 });
     }, []);
    return (
        <>
            <Navbar />
              <section className="product-detail m-0 cream">
                <div className="container">            
                <div className="product-container">                            
                    <div className="row">
                        <div className="col-md-5">
                                <div className="produ_img" data-aos="fade-left" data-aos-delay="500" data-aos-once="true" data-aos-duration="1000">
                                    <img src="./images/badam-milk.png" alt="" />
                                 </div>
                                 </div>
                                 <div className="col-md-7">
                                <div className="produ_cont" data-aos="fade-right" data-aos-delay="500" data-aos-once="true" data-aos-duration="1000">
                                    <h4>Badam  Milk</h4>
                                    <p>Red Cow Badam Flavoured Milk is an on-the-go energising health drink that will keep you refreshed. It is sterilised at high temperatures and packed aseptically to ensure high quality and purity. Pour it in your favourite glass or drink straight from the can to feel the creamy flavour of badam milk.</p>
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
            <section className="accordians cream-milk">
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
