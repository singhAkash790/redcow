import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Call from "./images/call.webp";
import Email from "./images/message.webp";
import Map from "./images/map.webp";
import Logo from "./images/redcow.webp";
import axios from "axios";
import Ftr from "./images/certificate-logo.webp";

const Footer = () => {
  const [contact, setConact] = useState([]);

  useEffect(() => {
    let mounted = true;

    const loadData2 = async () => {
      const response = await axios.get(
        "https://triverseadvertising.com/redcow/api/contact.php"
      );

      if (mounted) {
        setConact(response.data.contact);
      }
    };

    loadData2();

    return () => {
      mounted = false;
    };
  }, []);

  return (
    <>
      {contact ? (
        <footer>
          <div className="container">
            <div className="row">
              <div className="col-12 col-lg-10 mx-auto">
                <div className="heading contftr">
                  <h2
                    data-aos="fade-up"
                    data-aos-delay="500"
                    data-aos-once="true"
                    data-aos-duration="1000"
                  >
                    Our Co-ordinates
                  </h2>
                </div>
                <div className="row">
                  <div className="ftrstnbox">
                    <div className="ftrserow">
                      <div className="fterbox">
                        <ul
                          data-aos="fade-up"
                          data-aos-delay="1000"
                          data-aos-once="true"
                          data-aos-duration="1000"
                        >
                          <li>
                            <a href="#" id="disabledLink">
                              Goodness awaits you. <br />
                              Follow us today!
                            </a>
                          </li>
                        </ul>
                        <ul
                          className="sociallinks"
                          data-aos="fade-up"
                          data-aos-delay="1100"
                          data-aos-once="true"
                          data-aos-duration="1000"
                        >
                          <li>
                            <a
                              href={contact.facebook}
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label="Visit our Facebook page"
                            >
                              <i
                                className="fab fa-facebook-f"
                                aria-hidden="true"
                              ></i>
                            </a>
                          </li>
                          <li>
                            <a
                              href={contact.twitter}
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label="Visit our Twitter page"
                            >
                              <i
                                className="fab fa-twitter"
                                aria-hidden="true"
                              ></i>
                            </a>
                          </li>
                          <li>
                            <a
                              href={contact.linkedin}
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label="Visit our LinkedIn page"
                            >
                              <i
                                className="fab fa-linkedin-in"
                                aria-hidden="true"
                              ></i>
                            </a>
                          </li>
                          <li>
                            <a
                              href={contact.instagram}
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label="Visit our Instagram page"
                            >
                              <i
                                className="fab fa-instagram"
                                aria-hidden="true"
                              ></i>
                            </a>
                          </li>
                          <li>
                            <a
                              href={contact.youtube}
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label="Visit our YouTube channel"
                            >
                              <i
                                className="fab fa-youtube"
                                aria-hidden="true"
                              ></i>
                            </a>
                          </li>
                        </ul>
                      </div>

                      <div className="fterbox">
                        <ul
                          data-aos="fade-up"
                          data-aos-delay="600"
                          data-aos-once="true"
                          data-aos-duration="1000"
                        >
                          <li className="contactus">
                            <span>
                              <img
                                src={Call}
                                alt="redcow call"
                                width="50px"
                                height="50px"
                              />
                            </span>
                            <label>
                              <a href={`tel:${contact.phone}`}>
                                {contact.phone}
                              </a>
                              <a href={`tel:${contact.phone2}`}>
                                {contact.phone2}
                              </a>
                            </label>
                          </li>
                        </ul>
                      </div>
                      <div className="fterbox">
                        <ul
                          data-aos="fade-up"
                          data-aos-delay="700"
                          data-aos-once="true"
                          data-aos-duration="1000"
                        >
                          <li className="contactus">
                            <span>
                              <img
                                src={Email}
                                alt="redcow email"
                                width="50px"
                                height="50px"
                              />
                            </span>
                            <label>
                              <a href={`mailto:${contact.email}`}>
                                {contact.email}
                              </a>
                            </label>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="ftrserow">
                      <div className="fterbox">
                        <ul
                          data-aos="fade-up"
                          data-aos-delay="800"
                          data-aos-once="true"
                          data-aos-duration="1000"
                        >
                          <li>
                            <NavLink
                              className="nav-link"
                              exact
                              activeClassName="active_class"
                              to="/sitemap"
                            >
                              Site Map
                            </NavLink>
                          </li>
                          <li>
                            {" "}
                            <NavLink
                              className="nav-link"
                              exact
                              activeClassName="active_class"
                              to="/cookies-policy"
                            >
                              Cookies Policy
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              className="nav-link"
                              exact
                              activeClassName="active_class"
                              to="/privacy-policy"
                            >
                              Privacy Policy
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              className="nav-link"
                              exact
                              activeClassName="active_class"
                              to="/terms-of-use"
                            >
                              Terms Of Use
                            </NavLink>
                          </li>
                        </ul>
                      </div>
                      <div className="fterbox">
                        <ul
                          data-aos="fade-up"
                          data-aos-delay="900"
                          data-aos-once="true"
                          data-aos-duration="1000"
                        >
                          <li className="contactus">
                            <span>
                              <img
                                src={Map}
                                alt="Redcow Location"
                                width="50px"
                                height="50px"
                              />
                            </span>{" "}
                            <label
                              dangerouslySetInnerHTML={{
                                __html: contact.address,
                              }}
                            ></label>
                          </li>
                        </ul>
                      </div>

                      <div className="fterbox">
                        <ul
                          data-aos="fade-up"
                          data-aos-delay="500"
                          data-aos-once="true"
                          data-aos-duration="1000"
                        >
                          <li className="ftrmlogo">
                            <a href="/" id="disabledLink">
                              <img
                                src={Logo}
                                alt="redcow logo"
                                width="268px"
                                height="169px"
                              />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="ftrserow">
                      <div className="fterbox mt-0">
                        <ul
                          data-aos="fade-up"
                          data-aos-delay="500"
                          data-aos-once="true"
                          data-aos-duration="1000"
                        >
                          <li className="certificate">
                            <a href="/" id="disabledLink">
                              <img
                                src={Ftr}
                                alt="redcow certification"
                                width="250px"
                                height="64px"
                              />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="copyright">
                  <p className="main-hero-para text-center w-100">
                    &copy; 2024 All Rights Reserved | Red Cow Dairy Pvt. Ltd.
                  </p>
                  <p className="main-hero-para text-center w-100">
                    <a
                      href="https://triverseadvertising.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Site : triverse
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </footer>
      ) : null}
    </>
  );
};

export default Footer;
