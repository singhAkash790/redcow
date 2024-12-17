import React, { useEffect, useState } from 'react';
import Footer from './Footer';
import Navbar from './navbar';
import Aos from 'aos';
import "aos/dist/aos.css";
import dealersimg from './images/form-banner.jpg'
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
                                        <li><input type='text' placeholder="Company / Farm name*" name="company" required/></li>  
                                        <li>
                                        <select name="farm" required>
                                        <option disabled="disabled" selected="selected">Nature of the Farm *</option>
                                        <option value="Proprietorship">Proprietorship</option>
                                        <option value="Partnership">Partnership</option>
                                        <option value="Joint Venture">Joint Venture</option>
                                        <option value="Private Limited Company">Private Limited Company</option>
                                        <option value="Other">Other</option>
                                        </select>
                                        </li>
                                        <li>
                                        <select name="business" required>
                                        <option disabled="disabled" selected="selected">Type of Business *</option>
                                        <option value="Manufacturing">Manufacturing</option>
                                        <option value="Distribution">Distribution</option>
                                        <option value="Wholesaling">Wholesaling</option>
                                        <option value="Retailing">Retailing</option>
                                        </select>
                                        </li>                        
                                        <li><input type='text' placeholder="State Name*" name='state' required/></li>
                                        <li><input type='text' placeholder="City Name*" name="city" required/></li>
                                        <li><input type='text' placeholder="Contact Person Name*" name="person" required/></li>
                                        <li><input type='tel' placeholder="Contact Number*" name="contact" pattern="^[6-9]\d{9}$" minlength="10" maxlength="10" required/></li>
                                        <li><input type='email' placeholder="Email Id*" name="email" required/></li>
                                        <li><input type='text' placeholder="Area of interest" name="interest" required/></li>
                                        <li><textarea placeholder='Enquiry (Max 500 Characters)' name='message' required></textarea></li>
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
