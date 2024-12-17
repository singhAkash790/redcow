import React from "react";

const Footer = () => {
  return (
    <>
     <section>
                <div className="social-media">
                    <div className="container">
                        <div className="row">
                            <div className="web-container">
                                <div className="socialicons">
                                    <img src="images/social-media.png" alt="" />
                                    <ul>
                                        <li><a href="#"><img src="images/facebook.png" alt="" /></a></li>
                                        <li><a href="#"><img src="images/instagram.png" alt="" /></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-10 mx-auto">
                <div className="heading">
                    <h2>Our Co-ordinates</h2>
                </div>
              <div className="row">    
                <div className="fterbox">
                    <ul>
                      <li><a>INSTAGRAM</a></li>
                      <li><a>FACEBOOK</a></li>
                      </ul>
                  </div>
                  <div className="fterbox">
                  <ul>
                      <li className="contact"><a><span>T.</span>03212-237004</a></li>
                      </ul>
                  </div>
                  <div className="fterbox">
                  <ul>
                      <li><a>info@redcowdairy.in</a></li>
                      </ul>
                  </div>
                    <div className="fterbox">
                  <ul>
                      <li><a>Site Map</a></li>
                      <li><a>Cookies Policy</a></li>
                      <li><a>Privacy Policy</a></li>
                      <li><a>Terms Of Use</a></li>
                      </ul>
                  </div>
                    <div className="fterbox">
                    <ul>
                      <li className="contact"><a><span>A.</span>Red Cow Dairy (P) ltd, Nandan Housing Complex, Station road, Dankuni, Hooghly, West Bengal. Pin - 712311.</a></li>
                      </ul>
                  </div>
                    <div className="fterbox">
                    <ul>
                      <li><a>GOOGLE MAPS</a></li>
                      </ul>
                      <ul className="sociallinks">
                      <li><a><i className="fab fa-facebook-f"></i></a></li>
                      <li><a><i className="fab fa-twitter"></i></a></li>
                      <li><a><i className="fab fa-linkedin-in"></i></a></li>
                      <li><a><i className="fab fa-instagram"></i></a></li>
                      <li><a><i className="fab fa-pinterest-p"></i></a></li>
                      </ul>
                  </div>
                </div>
              </div>    
              <div className="web-container">          
              <div className="copyright">
                <p className="main-hero-para text-center w-100">
                  &copy; 2021 All Rights Reserved | Red Cow
                </p>
                <p className="main-hero-para text-center w-100">
                  <a href="https://triverseadvertising.com/" target="_blank" rel="noreferrer">
                  Site : triverse</a>
                </p>
                </div>
              </div>
            </div>
          </div>
      </footer>
    </>
  );
};

export default Footer;
