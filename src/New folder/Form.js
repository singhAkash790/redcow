import React from "react";
import emailjs from "emailjs-com";

export const Form = () => {

    function sendEmail(e){
            e.preventDefault();
        
            emailjs.sendForm('service_r6sh9w4', 'template_uf01uht', Form.current, 'user_uUHK6tJLiJR9JiEIg7ltC')
              .then((result) => {
                  console.log(result.text);
              }, (error) => {
                  console.log(error.text);
              });
              e.target.reset();
    }
    return (
        <>
            <form onSubmit={sendEmail}>
    <div className="row">
        <div className="col-12 col-lg-6 contact-input-feild">
            <input type="text" name="firstName" id="" className="form-control" placeholder="First Name" />
        </div>
        <div className="col-12 col-lg-6 contact-input-feild">
            <input type="text" name="lastName" id="" className="form-control" placeholder="Last Name" />
        </div>
    </div>
    <div className="row">
        <div className="col-12 col-lg-6 contact-input-feild">
            <input type="text" name="phone" id="" className="form-control" placeholder="Phone Number" />
        </div>
        <div className="col-12 col-lg-6 contact-input-feild">
            <input type="text" name="email" id="" className="form-control" placeholder="Email ID" />
        </div>
    </div>
    <div className="row">
        <div className="col-12 contact-input-feild">
            <input type="text" name="subject" id="" className="form-control" placeholder="Subject" />
        </div>
    </div>

    <div className="row">
        <div className="col-12 ">
            <input type="text" name="message" id="" className="form-control" placeholder="Enter Your Message" />
        </div>
    </div>
    <div className="btn contactbtn"><span className="cta m-0"><span><button type="submit">
                    Send Message
                </button></span></span></div>

</form>
        </>
    )
}

export default Form;
