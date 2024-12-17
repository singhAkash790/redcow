import React from 'react'

export const BootstrapMulti = () => {
  return (
    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel" data-bs-ride="carousel" data-bs-interval="false" data-aos="flip-right" data-aos-delay="500" data-aos-once="true" data-aos-duration="500">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src='https://redcowdairy.in/image/9150645710banner1.jpg'/>
    </div>    
    <div className="carousel-item">
    <img src='https://redcowdairy.in/image/9150645710banner1.jpg'/>
    </div>
    <div className="carousel-item">
    <img src='https://redcowdairy.in/image/9150645710banner1.jpg'/>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
</div>
  )
}
export default BootstrapMulti;