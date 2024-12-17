import React from 'react'
import { NavLink } from 'react-router-dom';

export const Brands = () => {
    return (
        <>
            <section id="ourpartners">
        <div className="ourpartners">
            <div className="container">
                <div className="row">
                    <div className="service-container">
                    <div className="heading">
                        <h4>Clout Edge Brands</h4>
                    </div>
                            <div className="leftstn">
                                    <div className="partner-logos">
                            <img src="./images/sbi-logo.svg" alt="State Bank of India" />
                        </div>
                        <div className="partner-logos">
                            <img src="./images/hdfc-logo.svg" alt="HDFC Bank" />
                        </div>
                        <div className="partner-logos">
                            <img src="./images/kotak-mahindra-logo.svg" alt="Kotak Mahindra Bank" />
                        </div>
                        <div className="partner-logos">
                            <img src="./images/rbl-logo.svg" alt="RBL Bank" />
                        </div>
                        <div className="partner-logos">
                            <img src="./images/andhra-logo.svg" alt="Andhra Bank" />
                        </div>
                        <div className="partner-logos">
                            <img src="./images/union-bank-of-india-logo.svg" alt="Union Bank of India" />
                        </div>
                        <div className="partner-logos">
                            <img src="./images/citi-logo.svg" alt="Citi Bank" />
                        </div>
                        <div className="partner-logos">
                            <img src="./images/axis-logo.svg" alt="Axis Bank" />
                        </div>
                        <div className="partner-logos">
                            <img src="./images/icici-logo.svg" alt="ICICI Bank" />
                        </div>
                        <div className="partner-logos">
                            <img src="./images/idfc-first-logo.svg" alt="IDFC First Bank" />
                        </div>
                        <div className="partner-logos">
                            <img src="./images/yes-logo.svg" alt="Yes Bank" />
                        </div>
                        <div className="partner-logos">
                            <img src="./images/federal-logo.svg" alt="Feberal Bank" />
                        </div>
                        <div className="partner-logos">
                            <img src="./images/indusind-logo.svg" alt="IndusInd Bank" />
                        </div>
                        <div className="partner-logos">
                            <img src="./images/clix-logo.svg" alt="Clix" />
                        </div>
                        <div className="partner-logos">
                           <NavLink to="brand"> <span><strong>50+</strong></span></NavLink>
                        </div>
                            </div>
                        </div>
                    </div>
                </div>
    </div>
    </section>
        </>
    )
}
export default Brands;
