import React from 'react'
import Navbar from './navbar';
import Footer from './Footer';

export const Product_details = () => {
    return (
        <>
            <Navbar />
            <section className="product-detail m-0">
                <div className="container">            
                <div className="product-container">                            
                    <div className="row">
                        <div className="col-md-5">
                                <div className="produ_img">
                                    <img src="./images/ghee01.png" alt="" />
                                 </div>
                                 </div>
                                 <div className="col-md-7">
                                <div className="produ_cont">
                                    <h4>Ghee</h4>
                                    <p>Red Cow Ghee is what your Grand Ma would approve of! Made from our carefully procured fresh milk which is churned into 100% butterfat in our state-of-the-art plant; to eventually make genuine aromatic and flavourful Cow Gawa Ghee, which is so loved by the discerning food enthusiasts of Eastern India.</p>
                                    </div>
                                </div>
                            </div> 
                        <ul className="tick">
                            <li><img src="images/tick01.png" alt=""/><span>No Sugar Added</span></li>
                            <li><img src="images/tick02.png" alt=""/><span>No Preservatives</span></li>
                            <li><img src="images/tick03.png" alt=""/><span>A Grade</span></li>
                            <li><img src="images/tick04.png" alt=""/><span>No Preservatives</span></li>
                        </ul>                          
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Product_details;