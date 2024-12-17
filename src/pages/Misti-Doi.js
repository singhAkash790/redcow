import React, { useState } from 'react';
import { Myaccordian } from '../Myaccordian';
import { questions11 } from '../API/accordianapi'

export const MistiDoi = () => {
    const [data, setData] = useState(questions11);
    return (
        <>
           <section className="product-detail premium-milk">
                <div className="container">            
                <div className="product-container">                            
                    <div className="row">
                        <div className="col-md-5">
                                <div className="produ_img" data-aos="fade-left" data-aos-delay="500" data-aos-once="true" data-aos-duration="1000">
                                    <img src="./images/milk-pro.png" alt="" />
                                 </div>
                                 </div>
                                 <div className="col-md-7">
                                <div className="produ_cont" data-aos="fade-right" data-aos-delay="500" data-aos-once="true" data-aos-duration="1000">
                                    <h4>Misti Doi</h4>
                                    <p>Red Cow Doi is creamy and delicious, with all the goodness of our good old gut cooling dish. Red Cow brings you Mishti Doi from the land of sweets, our pride all over the world. Not leaving behind the king of fruit, Mango, Red Cow Aam Doi gives you the real taste of the fruit.</p>
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
