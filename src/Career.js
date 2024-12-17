import React, { useEffect, useState } from 'react';
import Footer from './Footer';
import Navbar from './navbar';
import Aos from 'aos';
import "aos/dist/aos.css";
import careerimg from './images/career.webp'
import emailjs from 'emailjs-com'
import { Helmet } from 'react-helmet';
const Result =() =>{
  return(
      <div className='allt'>
      <p>Your message has been successfully sent. We will Contact you soon.</p>
      </div>
  )
};
function Career(props) {
  const [result,showResult] = useState(false);
  const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
      .sendForm(
          'service_ps5qh02', 
          'template_igffsz4', 
          e.target, 
          'user_5hRrfiWl7XYk6pyJ7FJBi'
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
       <title>Red Cow Dairy: Career</title>
      <meta name="description" content="Red Cow Dairy Career opens the door to immense professional growth & development |
Apply in one of the fastest growing companies in Dairy Industry"/>
       </Helmet>
      <section className="m-0">
        <div className="story-banner">
          <img src={careerimg} alt="" />
          <div className="slidercont">
            <h3 data-aos="fade-up" data-aos-delay="500" data-aos-once="true" data-aos-duration="1000">Make a real <em>difference</em></h3>
       </div>    
        </div>
      </section>
      <section id='career'>
              <div className='container'>
                  <div className='row'>
                      <div className='web-container'>
                          
          <div className='career'>
                          <div className='heading'>
                              <h1>Career</h1>
                              <p>Red Cow Dairy is an exceptional place to launch or sustain a rewarding career in the domain of Dairy industry. We’re looking for dedicated employees to help us produce the highest quality products at our dairy farms, in our processing plants and at our corporate office. </p>
<p>
If a career in an ever growing industry excites you, please fill in the form: </p>
<form action="" onSubmit={sendEmail}>
<ul>
    <li><input type='text' name="name" placeholder='Name *' required/></li>
    <li><input type='email' name="email" placeholder='Email *' required/></li>
    <li><input type='tel' name="mobile" placeholder='Mobile Number *' pattern="^[6-9]\d{9}$" minlength="10" maxlength="10" required/></li>
    <li><input type='submit' value='submit' /></li>
</ul>
<div className='alerts'>{result ? <Result /> : null}</div>
                            </form>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>
       <Footer/>
    </>
  );
};

export default Career;
