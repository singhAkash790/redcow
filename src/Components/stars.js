import React, { useState } from "react";
import { MdStar } from "react-icons/md"; // Import the MdStar icon
import { Rating } from "react-simple-star-rating";

const fillColor = "#FFD700"; // Yellow color for filled stars

const RatingDemo = () => {
  // Dynamically handle state for multiple ratings
  const [ratings, setRatings] = useState(); // For 12 rating items

  return (
    <div className="container px-4 px-md-3 mt-5 pt-5">
      <div className="row mb-5 pb-md-4 align-items-center">
        <div className="col-12 col-lg-10 mx-auto">
          <div className="box">
            <h3>{`Rating `}</h3>
            <div className="demo">
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RatingDemo;
