import React from 'react'
import Footer from './Footer';
import Navbar from './navbar';
import { NavLink } from 'react-router-dom';

export const Our_products = () => {
    return (
        <>
            <Navbar />
            <section className="our-products m-0">
                <div className="container">
                    <div className="row">
                            <div className="heading">
                                <h2>Our Product</h2>
                            </div>
                            <div className="prolist">
                                <div className="probox">
                                    <NavLink to="/product-details">
                                    <img src="./images/Milk.png" alt="" />
                                    <h4>Milk</h4>
                                    </NavLink>
                                </div>
                                <div className="probox">
                                    <img src="./images/flavoured_milk.png" alt="" />
                                    <h4>Flavoured Milk</h4>
                                </div>
                                <div className="probox">
                                    <img src="./images/Doi.png" alt="" />
                                    <h4>Doi</h4>
                                </div>
                                <div className="probox">
                                    <img src="./images/Lassi.png" alt="" />
                                    <h4>Lassi</h4>
                                </div>
                                <div className="probox">
                                    <img src="./images/Ghee.png" alt="" />
                                    <h4>Ghee</h4>
                                </div>
                                <div className="probox">
                                    <img src="./images/Paneer.png" alt="" />
                                    <h4>Paneer</h4>
                                </div>
                                <div className="probox">
                                    <img src="./images/Cream.png" alt="" />
                                    <h4>Cream</h4>
                                </div>
                                <div className="probox">
                                    <img src="./images/Gulab_Jamun.png" alt="" />
                                    <h4>Gulab Jamun</h4>
                                </div>
                                <div className="probox">
                                    <img src="./images/pro01.png" alt="" />
                                    <h4>Rasogulla</h4>
                                </div>
                            </div>
                        </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default  Our_products;