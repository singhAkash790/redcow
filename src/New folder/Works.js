import React from "react";
import { NavLink } from "react-router-dom";

export const Works = () => {
  return (
    <>
      <section className="service-main-container">
        <div className="container">
            <div className="heading">
                <h4>Clout Edge Work</h4>
              </div>
          <div className="service-container">
          <div className="row">
              <div className="col-md-4">
              <img src="./images/img04.jpg" alt=""/>
              <h3>Work Name</h3>
              <p>Designs Name</p>
              </div>
              <div className="col-md-4">
              <img src="./images/img06.jpg" alt=""/>
              <h3>Work Name</h3>
              <p>Designs Name</p>
              </div>
              <div className="col-md-4">
              <img src="./images/img07.jpg" alt=""/>
              <h3>Work Name</h3>
              <p>Designs Name</p>
              </div>
              <div className="col-md-4">
              <img src="./images/img08.jpg" alt=""/>
              <h3>Work Name</h3>
              <p>Designs Name</p>
              </div>
              <div className="col-md-4">
              <img src="./images/img09.jpg" alt="" />
              <h3>Work Name</h3>
              <p>Designs Name</p>
              </div>
              <div className="col-md-4">
              <img src="./images/img10.jpg" alt="" />
              <h3>Work Name</h3>
              <p>Designs Name</p>
              </div>
              <div className="col-md-12 text-center">
                <div className="btn">
                  <NavLink className="cta mb-0" to="/work"><span>Explore Work</span></NavLink>
                  </div>
              </div>
          </div>
          </div>
          </div>
          </section>
    </>
  )
}
export default Works;