import React, { useEffect, useState } from "react";
import Navbar from "./navbar";
import Footer from "./Footer";
import Aos from "aos";
import "aos/dist/aos.css";
import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";
import arrow from "./images/down-arrow.webp";
import Number from "./Number";
import axios from "axios";
import { Helmet } from "react-helmet";

const Home = () => {
  const [pagedata, setPagedata] = useState([]);

  useEffect(() => {
    let mounted = true;

    Aos.init({ duration: 2000 });

    const loadData = async () => {
      const response = await axios.get(
        "https://triverseadvertising.com/redcow/api/home.php"
      );
      if (mounted) {
        setPagedata(response.data);
      }
    };

    loadData();

    return () => {
      mounted = false;
    };
  }, []);

  if (pagedata.length === 0) {
    return null;
  }

  return (
    <>
      <Navbar />
      <Helmet>
        <title>Red Cow Dairy: Homepage</title>
        <meta
          name="description"
          content="Know more about Red Cow Dairy | Procuring carefully selected milk, all the way till the products reach your table| fastest growing dairy company"
        />
      </Helmet>
      {pagedata.banners ? (
        <div
          id="carouselExampleIndicators"
          className="carousel slide homeslider"
          data-bs-ride="carousel"
          data-bs-interval="false"
          data-aos="flip-right"
          data-aos-delay="0"
          data-aos-once="true"
          data-aos-duration="800"
        >
          <div className="carousel-indicators">
            {pagedata.banners.map((banner, index) => {
              return (
                <button
                  type="button"
                  key={`slide-dot${index}`}
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to={index}
                  className={`${index === 0 ? "active" : null}`}
                  aria-current="true"
                  aria-label={`Slide ${index + 1}`}
                ></button>
              );
            })}
          </div>
          <div className="carousel-inner">
            {pagedata.banners.map((banner, index) => {
              return (
                <div
                  className={`carousel-item ${index === 0 ? "active" : null}`}
                >
                  {banner.banner_link ? (
                    <a href={banner.banner_link} target={banner.target}>
                      <img
                        className="w-100 desktop-show"
                        src={banner.img}
                        alt={banner.alt}
                        width="1920px"
                        height="870px"
                      />
                      <img
                        className="w-100 mobile-show"
                        src={banner.mobile_img}
                        alt={banner.alt}
                        width="612px"
                        height="980px"
                      />
                    </a>
                  ) : (
                    <>
                      <img
                        className="w-100 desktop-show"
                        src={banner.img}
                        alt={banner.alt}
                        width="1920px"
                        height="870px"
                      />
                      <img
                        className="w-100 mobile-show"
                        src={banner.mobile_img}
                        alt={banner.alt}
                        width="612px"
                        height="980px"
                      />
                    </>
                  )}
                  {banner.banner_text ? (
                    <div className="slidercont" id="product">
                      <h3
                        dangerouslySetInnerHTML={{ __html: banner.banner_text }}
                      />
                    </div>
                  ) : null}
                </div>
              );
            })}
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
          <Link to="product" smooth={true} duration={500}>
            <div className="downarrow">
              <span className="animated bounce white_line"></span>
            </div>
          </Link>
        </div>
      ) : null}
      <div className="productslider">
        <div className="container">
          <div className="web-container">
            <div className="heading">
              <h2>Our products</h2>
            </div>
            <div
              id="carouselExample1"
              className="carousel slide w-100"
              data-bs-ride="carousel"
              data-bs-interval="6000"
            >
              <div className="carousel-inner">
                {pagedata.products.map((product, index) => {
                  return (
                    <div
                      className={`carousel-item ${
                        index === 0 ? "active" : null
                      }`}
                      key={index}
                    >
                      {product.plinkVal != "" ? (
                        <a href={product.plinkVal} target="_blank">
                          <div className="prodimg">
                            <img
                              src={product.home_img}
                              alt={product.name}
                              width="1230px"
                              height="576px"
                            />
                            <div className="probtn">
                              <span className="btn-3">
                                <span>{product.name}</span>
                              </span>
                            </div>
                          </div>
                        </a>
                      ) : (
                        <NavLink to={`/our-products/${product.slug}`}>
                          <div className="prodimg">
                            <img
                              src={product.home_img}
                              alt={product.name}
                              width="1230px"
                              height="576px"
                            />
                            <div className="probtn">
                              <span className="btn-3">
                                <span>{product.name}</span>
                              </span>
                            </div>
                          </div>
                        </NavLink>
                      )}
                    </div>
                  );
                })}
              </div>
              <button
                className="carousel-control-prev"
                data-bs-target="#carouselExample1"
                type="button"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                data-bs-target="#carouselExample1"
                type="button"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <Number numbers={pagedata} />

      <section>
        <div className="sweetbanner">
          <div className="container">
            <div className="row">
              <div className="web-container">
                <h2
                  data-aos="fade-up"
                  data-aos-delay="50"
                  data-aos-once="true"
                  data-aos-duration="100"
                  dangerouslySetInnerHTML={{ __html: pagedata.about.quote }}
                />
                <a href="/icecream" target="_blank" className="knowmore">
                  <span>Know more</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="aboutus">
          <div className="container">
            <div className="row">
              <div className="web-container">
                <div className="heading">
                  <h2
                    data-aos="fade-up"
                    data-aos-delay="500"
                    data-aos-once="true"
                    data-aos-duration="1000"
                  >
                    {pagedata.about.heading}
                  </h2>
                  <p
                    data-aos="fade-up"
                    data-aos-delay="500"
                    data-aos-once="true"
                    data-aos-duration="1000"
                  >
                    {pagedata.about.content}
                  </p>
                  <NavLink to="/our-story">
                    <div
                      className="probtn btncenter"
                      data-aos="fade-up"
                      data-aos-delay="500"
                      data-aos-once="true"
                      data-aos-duration="1000"
                    >
                      <span className="btn-3">
                        <span>Know more</span>
                      </span>
                    </div>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Home;
