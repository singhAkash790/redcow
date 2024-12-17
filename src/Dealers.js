import React, { useEffect, useState } from 'react';
import Footer from './Footer';
import Navbar from './navbar';
import Aos from 'aos';
import "aos/dist/aos.css";
import dealersimg from './images/form-banner.webp'
import emailjs from 'emailjs-com'
import { Helmet } from 'react-helmet';
const Result =() =>{
  return(
      <div className='allt'>
      <p>Your message has been successfully sent. We will Contact you soon.</p>
      </div>
  )
};
function Dealers(props) {
  const [result,showResult] = useState(false);
  const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
      .sendForm(
          'service_9dfsa14', 
          'template_1jda7v5', 
          e.target, 
          'user_3LFnOLQ5Q8KTOn0K5kSRH'
          )
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset();
        showResult(true);
    };

    //hide result
    setTimeout(() => {
        showResult(false);
    }, 1500);
    useEffect(() => {
      let mounted = true;
      Aos.init({ duration: 2000 });

      return () => {
        mounted = false;
      }
   }, []);
    return (
    <>
       <Navbar/>
       <Helmet>
       <title>Red Cow Dairy: Dealers Enquiry</title>
      <meta name="description" content="Red Cow Dairy Dealer's Enquiry | a financially rewarding business in the growing dairy
industry | Post your enquiry for dealer/distributorship opportunities"/>
       </Helmet>
       <section className="m-0">
        <div className="story-banner">
          <img src={dealersimg} alt="" />
          <div className="slidercont">
            <h3 data-aos="fade-up" data-aos-delay="500" data-aos-once="true" data-aos-duration="1000">Grow your business with <span><em>Red Cow Dairy</em></span></h3>
       </div>    
        </div>
      </section>
       <section id='forms'>
                <div className='forms'>
                    <div className='container'>
                        <div className='row'>
                            <div className='web-container'>
                                <div className='heading'>
                                    <h1>Dealers Enquiry</h1>
                                </div>
<form action="" onSubmit={sendEmail}>
<ul>
                                        <li><input type='text' placeholder="Name *" name="name" required/></li>  
                                        <li><input type='tel' placeholder="Phone No. *" name="contact" pattern="^[6-9]\d{9}$" minlength="10" maxlength="10" required/></li>
                                        <li><input type='email' placeholder="Email Id*" name="email" required/></li>
                                        <li><input type='text' placeholder="Address *" name='address' required/></li>
                                        <li><input type='text' placeholder="Pincode" name="pincode"/></li>
                                        <li><textarea placeholder='Enquiry (Max 500 Characters)' name='message' maxlength="500"></textarea></li>
                                        <li><input type='submit' value='Submit' /></li>
                                        </ul>
                                        <div className='alerts'>{result ? <Result /> : null}</div>
                            </form>
                          </div>
                      </div>
                  </div>
              </div>
      </section>
       <Footer/>
    </>
  );
};

export default Dealers;
