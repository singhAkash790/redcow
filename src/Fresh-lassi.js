import React, { useEffect, useState } from 'react';
import Aos from 'aos';
import "aos/dist/aos.css";
import { Myaccordian } from './Myaccordian';
import { questions12 } from './API/accordianapi'

export const Freshlassi = () => {
    const [data, setData] = useState(questions12);
    useEffect(() => {
        Aos.init({ duration: 2000 });
     }, []);
    return (
        <>
            <section className="product-detail m-0 cream">
                <div className="container">            
                <div className="product-container">                            
                    <div className="row">
                        <div className="col-md-5">
                                <div className="produ_img" data-aos="fade-left" data-aos-delay="500" data-aos-once="true" data-aos-duration="1000">
                                    <img src="./images/Fresh-Lassi.png" alt="" />
                                 </div>
                                 </div>
                                 <div className="col-md-7">
                                <div className="produ_cont" data-aos="fade-right" data-aos-delay="500" data-aos-once="true" data-aos-duration="1000">
                                    <h4>Fresh Lassi</h4>
                                    <p>Bubbly, frothy, and creamy, the legendary taste of the freshly churned lassi is here for you to savour. Now drink up the delicious goodness of curd, plain or in mango flavour. Red Cow's popular beverage lassi is made untouched by hand in the utmost hygienic environment.</p>
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
        </>
    )
}
