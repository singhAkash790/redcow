import React, { useEffect, useState } from 'react';
import Navbar from './navbar';
import Footer from './Footer';
import Aos from 'aos';
import "aos/dist/aos.css";
import { questions } from './API/accordianapi'
import { Myaccordian } from './Myaccordian';

export const Ghee = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
     }, []);
     const [data, setData] = useState(questions);
    return (
        <>
            <Navbar />
            <section className="product-detail m-0">
                <div className="container">            
                <div className="product-container">                            
                    <div className="row">
                        <div className="col-md-5">
                                <div className="produ_img" data-aos="fade-left" data-aos-delay="500" data-aos-once="true" data-aos-duration="1000">
                                    <img src="./images/ghee01.png" alt="" />
                                 </div>
                                 </div>
                                 <div className="col-md-7">
                                <div className="produ_cont" data-aos="fade-right" data-aos-delay="500" data-aos-once="true" data-aos-duration="1000">
                                    <h4>Ghee</h4>
                                    <p>Red Cow Ghee is what your Grand Ma would approve of! Made from our carefully procured fresh milk which is churned into 100% butterfat in our state-of-the-art plant; to eventually make genuine aromatic and flavourful Cow Gawa Ghee, which is so loved by the discerning food enthusiasts of Eastern India.</p>
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

export default Ghee;