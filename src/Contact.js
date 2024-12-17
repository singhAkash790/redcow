import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import Navbar from "./navbar";
import Aos from "aos";
import "aos/dist/aos.css";
import contactimg from "./images/contact.webp";
import emailjs from "emailjs-com";
import { Helmet } from "react-helmet";
import axios from "axios";

const Result = () => {
  return (
    <div className="allt">
      <p>Your message has been successfully sent. We will contact you soon.</p>
    </div>
  );
};
function Contact(props) {
  const [result, showResult] = useState(false);
  const [pagedata, setPagedata] = useState([]);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ps5qh02",
        "template_cdogczk",
        e.target,
        "user_5hRrfiWl7XYk6pyJ7FJBi"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
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

    const loadData2 = async () => {
      const response = await axios.get(
        "https://triverseadvertising.com/redcow/api/contact.php"
      );

      if (mounted) {
        setPagedata(response.data.contact);
      }
    };

    loadData2();

    return () => {
      mounted = false;
    };
  }, []);

  if (pagedata.length === 0) {
    return false;
  }

  return (
    <>
      <Navbar />
      <Helmet>
        <title>Red Cow Dairy: Contact Us Page</title>
        <meta
          name="description"
          content="Red Cow Dairy Contact Us | need assistance with Red Cow Dairy products | Contact us on
03212- 237004"
        />
      </Helmet>
      <section className="m-0">
        <div className="story-banner">
          <img src={contactimg} alt="" />
          <div className="slidercont">
            <h3
              data-aos="fade-up"
              data-aos-delay="500"
              data-aos-once="true"
              data-aos-duration="1000"
            >
              We are here to <em>help</em>
            </h3>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="row">
            <div className="web-container">
              <div className="contactdtl">
                <div className="heading">
                  <h1>Contact Us</h1>
                </div>
                <div className="probtn">
                  <span className="btn-3">
                    <span>Corporate Office</span>
                  </span>
                </div>
                <p dangerouslySetInnerHTML={{ __html: pagedata.address }} />
                <p className="contact-number">
                  <a href={`tel:${pagedata.phone}`}>Ph - {pagedata.phone}</a> ,
                  <a href={`tel:${pagedata.phone2}`}>{pagedata.phone2}</a>
                </p>
                <p>
                  {/* Fax - {pagedata.fax} */}

                  <a href={`mailto:${pagedata.email}`}>
                    Email - {pagedata.email}
                  </a>
                </p>
                <div className="probtn">
                  <span className="btn-3">
                    <span>Factory</span>
                  </span>
                </div>
                <div className="corporat">
                  <div className="corporatbox">
                    <h4>{pagedata.factory1}</h4>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: pagedata.factory1_addr,
                      }}
                    />
                  </div>
                  <div className="corporatbox">
                    <h4>{pagedata.factory2}</h4>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: pagedata.factory2_addr,
                      }}
                    />
                  </div>
                  <div className="corporatbox">
                    <h4>{pagedata.factory3}</h4>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: pagedata.factory3_addr,
                      }}
                    />
                  </div>
                </div>
                <div className="career">
                  <h4>Have a Query?</h4>
                  <p>We are pleased to know your interest in Red Cow Dairy.</p>
                  <p className="desktop-show">
                    Please fill out the form below and one of our executives
                    <br /> will get in touch with you.
                  </p>
                  <p className="mobile-show">
                    Please fill out the form below and one of our executives
                    will get in touch with you.
                  </p>
                  <form action="" onSubmit={sendEmail}>
                    <ul>
                      <li>
                        <input
                          type="text"
                          name="name"
                          placeholder="Name *"
                          required
                        />
                      </li>
                      <li>
                        <input
                          type="email"
                          name="email"
                          placeholder="Email *"
                          required
                        />
                      </li>
                      <li>
                        <input
                          type="tel"
                          name="mobile"
                          placeholder="Mobile Number *"
                          pattern="^[6-9]\d{9}$"
                          minLength="10"
                          maxLength="10"
                          required
                        />
                      </li>
                      <li>
                        <textarea
                          placeholder="How we can help you?"
                          name="message"
                        ></textarea>
                      </li>
                      <li>
                        <input type="submit" value="submit" />
                      </li>
                    </ul>
                    <div className="alerts">{result ? <Result /> : null}</div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Contact;
