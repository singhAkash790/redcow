import React, { useEffect, useState } from 'react';
import Aos from 'aos';
import "aos/dist/aos.css";
import Footer from './Footer';
import Navbar from './navbar';
import axios from 'axios';
import { Helmet } from 'react-helmet';


export const Csr = () => {
    const [pagedata, setPagedata] = useState([]);


    useEffect(() => {

        let mounted = true;

        Aos.init({ duration: 2000 });

        const loadData = async () => {
            const response = await axios.get(`https://triverseadvertising.com/redcow/api/csr.php`);

            if (mounted) {
                setPagedata(response.data);
            }
            
        }

        loadData();

        return () => {
            mounted = false;
        }

    }, []);
    
    if (pagedata.length == 0) {
        return null;
    }

    

  return <>
            <Navbar/>
            <Helmet>
            <title>Red Cow: Our CSR | Corporate Social Responsibility</title>
            <meta name="description" content="Corporate Social Responsibility | commonly known as CSR | our responsibility towards the
society and dairy farms"/>
            </Helmet>
            <section className="m-0">
        <div className="story-banner">
          <img src={pagedata.csr.banner} alt="" />
          <div className="slidercont">
            <h3 data-aos="fade-up" data-aos-delay="500" data-aos-once="true" data-aos-duration="1000" dangerouslySetInnerHTML={{__html: pagedata.csr.banner_heading}} />
       </div>    
        </div>
      </section>
      <section id='founder' className="m-0">
          <div className='founder'>
              <div className='container'>
                  <div className='row'>
                      <div className='web-container'>
                          <div className='heading mb-25'>
                            <h1>Our CSR</h1>
                            </div>
                          <div data-aos="fade-up" data-aos-delay="500" data-aos-once="true" data-aos-duration="1000" dangerouslySetInnerHTML={{__html: pagedata.csr.descp}} />
               
                      <div className='initiatives'>
                      <div className='heading' data-aos="fade-up" data-aos-delay="500" data-aos-once="true" data-aos-duration="1000">
                          <h2>Our Initiatives</h2>
                      </div>
                      {pagedata.initiatives.map((initiative,index) => {
                          return <div className='initiativescont' key={index}>
                          <div className='initiativeimg' data-aos="fade-up" data-aos-delay="500" data-aos-once="true" data-aos-duration="1000">
                              <img src={initiative.img} alt/>
                          </div>
                          <div className='initiativecont' data-aos="fade-up" data-aos-delay="500" data-aos-once="true" data-aos-duration="1000">
                              <h3>{initiative.title}</h3>
                              <p>{initiative.descp}</p>
                          </div>
                      </div>
                      })}
                      </div>
                  </div>
              </div>
              
              </div>
          </div>
      </section>
        <Footer/>
  </>;
};
export default Csr;

