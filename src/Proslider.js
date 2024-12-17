import React from 'react';

export const Proslider = () => {
  return (
    <>
     <div id="carouselExample" className="carousel slide w-100" data-bs-ride="carousel" data-bs-interval="6000">
   <div className="carousel-inner">
     <div className="carousel-item active">
       <img className="d-block w-100" src="./images/slider01.jpg" alt="First slide" />
     </div>
     <div className="carousel-item">
       <img className="d-block w-100" src="./images/slider02.jpg" alt="Second slide" />
     </div>
   </div>
   <button className="carousel-control-prev" data-bs-target="#carouselExample" type="button" data-bs-slide="prev">
     <span className="carousel-control-prev-icon" aria-hidden="true"></span>
     <span className="visually-hidden">Previous</span>
   </button>
   <button className="carousel-control-next" data-bs-target="#carouselExample" type="button" data-bs-slide="next">
     <span className="carousel-control-next-icon" aria-hidden="true"></span>
     <span className="visually-hidden">Next</span>
   </button>
  </div>
    </>
  )
}
export default Proslider;