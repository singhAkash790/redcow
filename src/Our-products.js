import React, { useEffect, useState } from 'react';
import Footer from './Footer';
import Navbar from './navbar';
import { NavLink } from 'react-router-dom';
import Aos from 'aos';
import "aos/dist/aos.css";
import axios from 'axios';
import { Helmet } from 'react-helmet';

export const Our_products = () => {
    
    const [pagedata, setPagedata] = useState([]);
    
    useEffect(() => {
        let mounted = true;
        Aos.init({ duration: 2000 });
        const loadData = async () => {
            const response = await axios.get('https://triverseadvertising.com/redcow/api/products.php')
            if(mounted){
                console.log('data');
                setPagedata(response.data);
            }
            
        }

        loadData();

        return () => {
            console.log('unmount');
            mounted = false;
        }
        
     }, []);

     console.log(pagedata);

     if(pagedata.length===0){
         return null;
     }

    return (
        <>
            <Navbar />
            <Helmet>
            <title>Red Cow Dairy: Our Products | Leading Dairy product manufacturers in West Bengal</title>
            <meta name="description" content="Leading Dairy products manufacturers | Every year, we process over 4+ lakh litres of milk as
well as a variety of ranges in value-added products and sell it all over east India"/>
            </Helmet>
            <section className="our-products m-0">
                <div className="container">
                    <div className="row">
                        <div className="web-container">
                            <div className="heading" data-aos="fade-up" data-aos-delay="500" data-aos-once="true" data-aos-duration="1000">
                                <h1>Our Products</h1>
                            </div>
                            <div className="prolist">

                                {pagedata.products ? 
                                pagedata.products.map((product, index) => {
                                return <div className="probox" key={index} data-aos="fade-up" data-aos-delay="500" data-aos-once="true" data-aos-duration="1000">  
                                
                                {(product.plinkVal!='') ? 
                                <a href={product.plinkVal}  activeClassName="active_class" target='_blank'>
                                    <img src={product.img} alt={product.name}/>
                                    <h4>{product.name}</h4>   
                                </a>
                                :  <NavLink exact activeClassName="active_class" to={`/our-products/${product.slug}`}>
                                       <img src={product.img} alt={product.name} />
                                    <h4>{product.name}</h4>   
                                    </NavLink>
                                }
                                </div>
                                }) : null }
                                
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