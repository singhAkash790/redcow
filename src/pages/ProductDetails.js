import React, { useEffect, useState } from "react";
import Footer from "../Footer";
import { Myaccordian } from "../Myaccordian";
import Navbar from "../navbar";
import Aos from "aos";
import "aos/dist/aos.css";
import { useHistory, NavLink } from "react-router-dom";
import axios from "axios";
import { Helmet } from "react-helmet";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export const ProductDetails = ({ match }) => {
  const slug = match.params.slug;

  const [pagedata, setPagedata] = useState([]);

  let history = useHistory();

  const [data, setData] = useState([]);
  useEffect(() => {
    let mounted = true;

    Aos.init({ duration: 2000 });

    const loadData = async () => {
      const response = await axios.get(
        `https://triverseadvertising.com/redcow/api/product-details.php?url=${slug}`
      );

      if (response.data.length == 0) {
        console.log("redirect");
        history.push("/404");
        return false;
      }

      if (mounted) {
        setPagedata(response.data);
        setData(response.data.products.accordions);
      }
    };

    loadData();

    return () => {
      mounted = false;
    };
  }, []);
  if (pagedata.length == 0) {
    console.log("no data");
    return null;
  }

  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 3000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  let URL = window.location.pathname;
  return (
    <>
      <Navbar />
      <Helmet>
        <title>{pagedata.meta_title}</title>
        <meta name="description" content={pagedata.meta_descp} />
      </Helmet>
      {pagedata.products.map((product, index) => {
        return (
          <>
            <section
              className="product-detail m-0"
              style={{ backgroundImage: `url(${product.bg_img})` }}
              key={index}
            >
              <div className="container">
                <div className="product-container">
                  <div className="row">
                    <div className="col-md-5">
                      <div
                        className="produ_img"
                        data-aos="fade-left"
                        data-aos-delay="500"
                        data-aos-once="true"
                        data-aos-duration="1000"
                      >
                        <img src={product.img} alt={product.title} />
                      </div>
                    </div>
                    <div className="col-md-7">
                      <div
                        className="produ_cont"
                        data-aos="fade-right"
                        data-aos-delay="500"
                        data-aos-once="true"
                        data-aos-duration="1000"
                      >
                        <h4>{product.title}</h4>
                        <p>{product.descp}</p>
                      </div>
                    </div>
                  </div>
                  <ul className="tick">
                    {product.icons.map((icon, index) => {
                      return (
                        <li
                          data-aos="fade-up"
                          key={`icon-${index}`}
                          data-aos-delay={icon.delay}
                          data-aos-once="true"
                          data-aos-duration="1000"
                        >
                          <img src={icon.icon_img} alt={icon.icon_val} />
                          <span>{icon.icon_val}</span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </section>

            <section className="accordians">
              <div className="container">
                <div className="product-container">
                  <div className="accordian">
                    {product.accordions.map((curElem) => {
                      const { id } = curElem;
                      return <Myaccordian key={id} {...curElem} />;
                    })}
                  </div>
                </div>
              </div>
            </section>
          </>
        );
      })}
      {URL == "/our-products/ice-cream" ? (
        <section id="icereammenu">
          <div className="container">
            <a
              href="https://www.redcowdairy.in/icecream"
              target="_blank"
              className="knowmore"
            >
              <span>Know more about ice cream</span>
            </a>
          </div>
        </section>
      ) : null}
      <section className="mt-5 pt-4 pb-5">
        <div
          className="heading mb-5 pb-5"
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-once="true"
          data-aos-duration="500"
        >
          <h1>Other Products</h1>
        </div>
        <div id="proslider">
          <div className="container">
            <div className="product-container">
              <div className="proslider">
                <Slider {...settings}>
                  {pagedata.rpro.map((product, index) => {
                    return (
                      <div>
                        {product.plinkVal != "" ? (
                          <a href={product.plinkVal} target="_blank">
                            <img
                              src={product.img}
                              alt="img"
                              key={`img-${index}`}
                            />
                          </a>
                        ) : (
                          <NavLink
                            exact
                            to={`/our-products/${product.slug}`}
                            target="_blank"
                          >
                            <img
                              src={product.img}
                              alt="img"
                              key={`img-${index}`}
                            />
                          </NavLink>
                        )}
                      </div>
                    );
                  })}
                </Slider>
              </div>
              <div className="cta">
                <NavLink to="/dealers-enquiry">
                  For Business Related Enquiry
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};
