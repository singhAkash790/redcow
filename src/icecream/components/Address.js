import React from "react";

export const Address = (props) => {
  return (
    <>
      <div
        className="outlateshapes"
        data-aos="fade-up"
        data-aos-offset="100"
        data-aos-easing="ease-in-sine"
        data-aos-once="true"
        data-aos-duration="500"
      >
        <div className="ctitle">
          {props.Title ? <h3>{props.Title}</h3> : null}
          <p>{props.Address}</p>
        </div>
      </div>
    </>
  );
};
