import React from 'react'

export const Products = () => {
    return (
        <>
        <div className="productslider">
        <div className="container">
        <div className="web-container">
                <div className="heading">
                    <h2>Our Product</h2>
                </div>
            <div id="carouselExample1" className="carousel slide w-100" data-bs-ride="carousel" data-bs-interval="6000">
   <div className="carousel-inner">
     <div className="carousel-item active">
     <div className="prodimg">
                                <img src="./images/milk.jpg" alt="" />
                                <h5>Milk</h5>
                            </div>
     </div>
     <div className="carousel-item">
     <div className="prodimg">
                                <img src="./images/lassi.jpg" alt="" />
                                <h5>Lassi</h5>
                            </div>
     </div>
     <div className="carousel-item">
     <div className="prodimg">
                                <img src="./images/Doi.jpg" alt="" />
                                <h5>Doi</h5>
                            </div>
     </div>
     <div className="carousel-item">
     <div className="prodimg">
                                <img src="./images/Ghee.jpg" alt="" />
                                <h5>Ghee</h5>
                            </div>
     </div>
   </div>
   <button className="carousel-control-prev" data-bs-target="#carouselExample1" type="button" data-bs-slide="prev">
     <span className="carousel-control-prev-icon" aria-hidden="true"></span>
     <span className="visually-hidden">Previous</span>
   </button>
   <button className="carousel-control-next" data-bs-target="#carouselExample1" type="button" data-bs-slide="next">
     <span className="carousel-control-next-icon" aria-hidden="true"></span>
     <span className="visually-hidden">Next</span>
   </button>
  </div>
  </div>
  </div>
  </div>
        </>
    )
}
