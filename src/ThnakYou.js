import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import Footer from "./Footer";
import Navbar from "./navbar";

const Error404 = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <>
      <Navbar />
      <section id="content">
        <div className="container">
          <div className="row">
            <div className="web-container">
              <div className="heading">
                <h1>Thank You for Your Feedback! </h1>
              </div>
              <div className="contents text-center">
                <p>
                  We appreciate you taking the time to share your thoughts.
                  <br /> Your feedback helps us serve you better and keep the
                  scoops coming!
                </p>
                <div className="social-media-links">
                  <p>
                    Follow us on
                    <a
                      href="https://www.instagram.com/redcowdairy/?hl=en"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Visit our Instagram page"
                      className="social-link"
                    >
                      <i className="fab fa-instagram" aria-hidden="true"></i>{" "}
                      Instagram
                    </a>
                    and
                    <a
                      href="https://www.facebook.com/RedCowDairy"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Visit our Facebook page"
                      className="social-link"
                    >
                      <i className="fab fa-facebook-f" aria-hidden="true"></i>{" "}
                      Facebook
                    </a>
                    for the latest flavors and offers!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Error404;
