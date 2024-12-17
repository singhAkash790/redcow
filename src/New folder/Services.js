import React from "react";
import { NavLink } from "react-router-dom";

const Services = () => {
  return (
    <>
       <section className="service-main-container servicebox mt-0 mb-50">
      <div className="webbanner">
          <img src="./images/service-banner.jpg" />
        </div>
        <div className="container">
          <div className="service-container">
          <div className="row">
              <div className="col-md-12">
                <div className="heading"><h4>Our Service</h4></div>                
                  <div className="row">
                    <div className="col-md-4">
                    <div className="serviceimg">
                  <img src="./images/latest-project-3.jpg" />
                  <div className="layer">
                    <div className="layerdiv">
                      <h2>Home Automation Lighting</h2>
                      <NavLink to="/home-automation-lighting">Know More</NavLink>
                      </div>
                    </div>
                </div>
                    </div>
                    <div className="col-md-4">
                    <div className="serviceimg">
                  <img src="./images/latest-project-2.jpg" />
                  <div className="layer">
                    <div className="layerdiv">
                      <h2>Architectural Lighting</h2>
                      <NavLink to="/architectural-lighting">Know More</NavLink>
                      </div>
                    </div>
                </div>
                    </div>
                    <div className="col-md-4">
                    <div className="serviceimg">
                  <img src="./images/latest-project-1.jpg" />
                  <div className="layer">
                    <div className="layerdiv">
                    <h2>Bespoke Decorative</h2>
                    <NavLink to="/bespoke-decorative">Know More</NavLink>
                      </div>
                    </div>
                </div>
                    </div>
                    </div>
              </div>
              </div>
            </div>
        </div>
      </section>
    </>
  );
};

export default Services;
