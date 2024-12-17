import React, { useEffect, useState } from 'react';
import Footer from './Footer'
import Navbar from './navbar'
import Aos from 'aos';
import "aos/dist/aos.css";
import rightarrow from './images/right-arrow.webp'
import { NavLink } from 'react-router-dom';
import axios from 'axios';

export const Sitemap = () => {
	const [pagedata, setPagedata] = useState([]);
    useEffect(() => {
		let mounted = true;
        Aos.init({ duration: 2000 });
		const loadData = async () => {
            const response = await axios.get('https://triverseadvertising.com/redcow/api/products.php')
            if(mounted){
                setPagedata(response.data);
            }
            
        }

        loadData();
		return () => {
            mounted = false;
        }
     }, []);
	 if(pagedata.length===0){
		return null;
	}
  return (
    <>
    <Navbar/>
    <section id="stemap">
        <div className='container'>
			<div className="web-container">
                
	<div className="stemap">
				<div className="heading">
				<h1>Sitemap</h1>
			</div>
			<div className="smap">
			    <div className="sitembox">
			    <ul>
			        <li className="stxmn"><NavLink to='/'>Home</NavLink></li>
			        <li className="stxmn"><NavLink to='/our-story'>Our Story</NavLink></li>
                    <li className="stxmn"><NavLink to='/our-infrastructure'> Our Infrastucture</NavLink></li>  		        
			    </ul>
			    </div>
			    <div className="sitembox">
			        <ul>
			        <li className="stxmn"><NavLink to='/our-products'>Our Products</NavLink>
			            <ul className="stxbdr">
						{pagedata.products ? 
                                pagedata.products.map((product, index) => {
                                return  <li className="stxmns" key={index} ><NavLink to={`/our-products/${product.slug}`}><img src={rightarrow}/>{product.name}</NavLink></li> 
                                }) : null }
			            </ul>
			        </li>
			    </ul>
			    </div>
			    <div className="sitembox">
			    <ul>
		                          
                <li className="stxmn"><NavLink to='/our-csr'>Our CSR</NavLink></li>
                    <li className="stxmn"><a href="https://redcowdairy.in/dairy-blog/" target="_blank">
               Dairy Blog
               </a></li>
			        <li className="stxmn"><NavLink to='/contact-us'>Contact Us</NavLink></li>	
                    <li className="stxmn"><NavLink to='/career'>Career</NavLink></li>	
                    <li className="stxmn"><NavLink to='/dealers-enquiry'>Dealers Enquiry</NavLink></li>	
                    <li className="stxmn"><NavLink to='/suppliers-enquiry'>Suppliers Enquiry</NavLink></li>	
                    <li className="stxmn"><NavLink to='/vendor-registration'>Vendor Registration</NavLink></li>	
                    <li className="stxmn"><NavLink to='/tendor-management'>Tendor Management</NavLink></li>	
			    </ul>
			    </div>
			    </div>
                </div>
			</div>
	</div>
</section>
        <Footer/>
    </>
  )
}
