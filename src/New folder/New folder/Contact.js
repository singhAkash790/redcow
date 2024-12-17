import React from "react";
// import Form from "./Form";

const Contact = () => {
    return (
    <>
      <section className="contactus-section">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-10 mx-auto">
            <div className="heading"><h4>Connect With Our Team.</h4></div>
              <div className="row">
                <div className="contact-leftside col-12 col-lg-6">
                  <figure>
                    <img src="./images/contact.jpg" alt="contatUsImg" className="img-fluid"/>
                  </figure>
                </div>
                <div className="contact-rightside col-12 col-lg-6">
                  {/* <Form /> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
