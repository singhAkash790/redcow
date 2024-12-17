import React, { useState } from 'react'
import { Myaccordian } from './Myaccordian';
import { questions4 } from './API/accordianapi'

export const Premium_milk = () => {
    const [data, setData] = useState(questions4);
    return (
        <>
            <section className="product-detail premium-milk">
                <div className="container">            
                <div className="product-container">                            
                    <div className="row">
                        <div className="col-md-5">
                                <div className="produ_img" data-aos="fade-left" data-aos-delay="500" data-aos-once="true" data-aos-duration="1000">
                                    <img src="./images/premium-milk.png" alt="" />
                                 </div>
                                 </div>
                                 <div className="col-md-7">
                                <div className="produ_cont" data-aos="fade-right" data-aos-delay="500" data-aos-once="true" data-aos-duration="1000">
                                    <h4>Premium Milk</h4>
                                    <p>Red Cow Dairy procures fresh raw milk from dairy farmers of West Bengal. After runningvarious quality tests, the milk is goes through several processes and pasteurization to ensure utmost purity and customer satisfaction. Catering to varied consumer needs, Red Cow offers right from Full Cream, Regular and Low Fat Milk.</p>
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
            <section className="accordians premiummilk">
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
