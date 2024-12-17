import React, { useEffect, useState } from 'react';
import Aos from 'aos';
import "aos/dist/aos.css";
import axios from 'axios';
import { NavLink } from 'react-router-dom';

const Home = (props) => { 
  console.log(props);
  return (
    <>
    
    <div id='proslider'>
      <div className='container'>
          <div className='product-container'> 
          <div className="proslider">
          <div className="owl-carousel">
            <div> Your Content </div>
            <div> Your Content </div>
            <div> Your Content </div>
            <div> Your Content </div>
            <div> Your Content </div>
            <div> Your Content </div>
            <div> Your Content </div>
          </div>
          </div>             
    <div className='proslider desktop-show'>
      <div id="carouselExampleIndicators3" className="carousel slide" data-bs-ride="carousel" data-bs-interval="4000">
  <div className="carousel-indicators mobile-show">
    <button type="button" data-bs-target="#carouselExampleIndicators3" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators3" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators3" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active col3">
    <img src='https://redcowdairy.in/image/category/467315582285583Lassi-1.png' alt="img" />
    <img src='https://redcowdairy.in/image/category/467315582285583Lassi-1.png' alt="img" />
    <img src='https://redcowdairy.in/image/category/467315582285583Lassi-1.png' alt="img" />
    </div>    
    <div className="carousel-item col3">
    <img src='https://redcowdairy.in/image/category/467315582285583Lassi-1.png' alt="img" />
    <img src='https://redcowdairy.in/image/category/3718498695Ghee.png' alt="img" />
    <img src='https://redcowdairy.in/image/category/1876189192Untitled-1.png' alt="img"/>
    </div>
    <div className="carousel-item col3">
    <img src='https://redcowdairy.in/image/category/3485222736red3.png' alt="img" />
    <img src='https://redcowdairy.in/image/category/6181994959Cream.png' alt="img" />
    <img src='https://redcowdairy.in/image/category/1999423570pro01.png' alt="img" />
  </div>
  <button className="carousel-control-prev newbtn" type="button" data-bs-target="#carouselExampleIndicators3" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators3" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
</div>
</div>
<div className='proslider mobile-show'>
      <div id="carouselExampleIndicators4" className="carousel slide" data-bs-ride="carousel" data-bs-interval="4000">
  <div className="carousel-indicators mobile-show">
    <button type="button" data-bs-target="#carouselExampleIndicators4" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators4" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators4" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active col3">
      <img src='https://redcowdairy.in/image/category/137638596095884Milk.png' alt="img" />
    </div>    
    <div className="carousel-item col3">
    <img src='https://redcowdairy.in/image/category/467315582285583Lassi-1.png' alt="img"/>
    </div>
    <div className="carousel-item col3">
    <img src='https://redcowdairy.in/image/category/3485222736red3.png' alt="img" />
  </div>
  <button className="carousel-control-prev newbtn" type="button" data-bs-target="#carouselExampleIndicators4" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators4" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
</div>
</div>
<div className='cta'>
        <NavLink to="/dealers-enquiry">
                    For Business Related Enquiry
                  </NavLink>
          </div>
</div>
        </div>
    
    </div>
     </>
  );
};

export default Home;
