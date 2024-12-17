import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import Navbar from "./navbar";
import Aos from "aos";
import "aos/dist/aos.css";
import axios from "axios";
import { Helmet } from "react-helmet";

export const Infrastructure = () => {
  const [pagedata, setPagedata] = useState([]);

  useEffect(() => {
    let mounted = true;

    Aos.init({ duration: 2000 });

    const loadData = async () => {
      const response = await axios.get(
        "https://triverseadvertising.com/redcow/api/infrastructure.php"
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
        <title>Red Cow Dairy: Our Infrastucture</title>
        <meta
          name="description"
          content="Know more about Red Cow Dairy Infrastructure: plants located in Shibanipur,
Howrah; Panchghara, Hooghly and Jaugram, Purbo Burdwan"
        />
      </Helmet>
      <section className="m-0">
        <div className="story-banner">
          <img src={pagedata.infra.banner} alt="banner" />
          <div className="slidercont">
            <h3
              data-aos="fade-up"
              data-aos-delay="500"
              data-aos-once="true"
              data-aos-duration="1000"
              dangerouslySetInnerHTML={{
                __html: pagedata.infra.banner_heading,
              }}
            />
          </div>
        </div>
      </section>
      <section id="infraconts">
        <div className="container">
          <div className="row">
            <div className="web-container">
              <div className="infraconts founder">
                <div
                  className="heading"
                  data-aos="fade-up"
                  data-aos-delay="500"
                  data-aos-once="true"
                  data-aos-duration="1000"
                >
                  <h2>{pagedata.infra.first_section_heading}</h2>
                </div>
                <p
                  data-aos="fade-up"
                  data-aos-delay="500"
                  data-aos-once="true"
                  data-aos-duration="1000"
                >
                  {pagedata.infra.first_section_content}
                </p>
              </div>
              <div className="infraconts founder">
                <div
                  className="heading"
                  data-aos="fade-up"
                  data-aos-delay="500"
                  data-aos-once="true"
                  data-aos-duration="1000"
                >
                  <h2>{pagedata.infra.first_section_heading2}</h2>
                </div>
                <p
                  data-aos="fade-up"
                  data-aos-delay="500"
                  data-aos-once="true"
                  data-aos-duration="1000"
                >
                  {pagedata.infra.first_section_content2}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="farm">
        <div className="farm">
          <div className="heading">
            <h2>{pagedata.infra.second_section_heading}</h2>
          </div>
          <img src={pagedata.infra.second_section_img} />
        </div>
      </section>
      <section id="untouched">
        <div className="untouched">
          <div className="container">
            <div className="row">
              <div className="web-container">
                <div
                  className="heading"
                  data-aos="fade-up"
                  data-aos-delay="500"
                  data-aos-once="true"
                  data-aos-duration="1000"
                >
                  <h2
                    dangerouslySetInnerHTML={{
                      __html: pagedata.infra.third_section_heading,
                    }}
                  />
                </div>
                <div
                  className="founder"
                  data-aos="fade-up"
                  data-aos-delay="500"
                  data-aos-once="true"
                  data-aos-duration="1000"
                  dangerouslySetInnerHTML={{
                    __html: pagedata.infra.third_section_content,
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="infragal">
        <div className="infragal">
          <div className="container">
            <div className="row">
              <div
                className="col-md-4 col-sm-12"
                data-aos="fade-up"
                data-aos-delay="500"
                data-aos-once="true"
                data-aos-duration="1000"
              >
                <img src={pagedata.infra.third_section_img1} />
              </div>
              <div
                className="col-md-4 col-sm-12"
                data-aos="fade-up"
                data-aos-delay="500"
                data-aos-once="true"
                data-aos-duration="1000"
              >
                <img src={pagedata.infra.third_section_img2} />
              </div>
              <div
                className="col-md-4 col-sm-12"
                data-aos="fade-up"
                data-aos-delay="500"
                data-aos-once="true"
                data-aos-duration="1000"
              >
                <img src={pagedata.infra.third_section_img3} />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="lovecare">
        <div className="lovecare">
          <div className="container">
            <div className="row">
              <div className="web-container">
                <div
                  className="heading"
                  data-aos="fade-up"
                  data-aos-delay="500"
                  data-aos-once="true"
                  data-aos-duration="1000"
                >
                  <h2
                    dangerouslySetInnerHTML={{
                      __html: pagedata.infra.fourth_section_heading,
                    }}
                  />
                </div>
                <div
                  className="lovecarestn founder"
                  data-aos="fade-up"
                  data-aos-delay="500"
                  data-aos-once="true"
                  data-aos-duration="1000"
                  dangerouslySetInnerHTML={{
                    __html: pagedata.infra.fourth_section_content,
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};
