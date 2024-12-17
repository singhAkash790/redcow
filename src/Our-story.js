import React, { useState, useEffect } from 'react';
import Navbar from "./navbar";
import Footer from "./Footer";
import Aos from 'aos';
import "aos/dist/aos.css";
import Number from './Number';
import ethos1 from './images/vision.webp'
import ethos2 from './images/mission.webp'
import ethos3 from './images/core-value.webp'
import axios from 'axios';
import { Helmet } from 'react-helmet';

const Our_story = () => {

  const [pagedata, setPagedata] = useState([]);

  useEffect(() => {
    let mounted = true;

    Aos.init({ duration: 2000 });

    const loadData = async () => {
      const response = await axios.get('https://triverseadvertising.com/redcow/api/about.php');
      if (mounted) {
        setPagedata(response.data);
      }
    }

    loadData();

    return () => {
      mounted = false;
    }

  }, []);


  if (pagedata.length === 0) {
    return null;
  }

  return (
    <>
      <Navbar />
      <Helmet>
      <title>Red Cow Dairy: About us</title>
      <meta name="description" content="Know more About Red Cow Dairy: 12 Districts | 1+ Lac Dairy Farmers | 4+ Lakh litre/day 
production | 3 Processing Units | 24 Milk Chilling Plants| 300+ Distributors | 600 Employees"/>
      </Helmet>
      <section className="m-0">
        <div className="story-banner">
          <img src={pagedata.about.banner} alt="our story" />
          <div className="slidercont">
            <h3 data-aos="fade-up" data-aos-delay="500" data-aos-once="true" data-aos-duration="1000" dangerouslySetInnerHTML={{__html: pagedata.about.banner_heading}} />
          </div>
        </div>
      </section>
      <section id='aboutus'>
        <div className="container">
          <div className="row">
            <div className="web-container">
              <div className="about">
                <div className="row">
                  <div className="col-md-6">
                    <div className="content" data-aos="fade-right" data-aos-delay="500" data-aos-once="true" data-aos-duration="1000">
                      <div className="heading" data-aos="fade-up" data-aos-delay="500" data-aos-once="true" data-aos-duration="1000">
                        <h2>{pagedata.about.about_heading}</h2>
                      </div>
                      <img src={pagedata.about.about_img} />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="content" data-aos="fade-left" data-aos-delay="500" data-aos-once="true" data-aos-duration="1000" dangerouslySetInnerHTML={{__html: pagedata.about.about_content}} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="bannercont img01">
          <Number numbers={pagedata} />
        </div>
      </section>
      <section id='started'>
        <div className="container">
          <div className="row">
            <div className="web-container">
              <div className="about">
                <div className="heading" data-aos="fade-up" data-aos-delay="500" data-aos-once="true" data-aos-duration="1000">
                  <h2>How it all started </h2>
                </div>
                <h3 data-aos="fade-right" data-aos-delay="500" data-aos-once="true" data-aos-duration="1000">{pagedata.about.started_heading}</h3>
                <div className="row">
                  <div className="col-md-6">
                    <div className="content" data-aos="fade-right" data-aos-delay="500" data-aos-once="true" data-aos-duration="1000" dangerouslySetInnerHTML={{__html: pagedata.about.started_content}} />
                    
                  </div>
                  <div className="col-md-6">
                    <div className="content" data-aos="fade-left" data-aos-delay="500" data-aos-once="true" data-aos-duration="1000" dangerouslySetInnerHTML={{__html: pagedata.about.started_content2}} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="author">
        <div className="bannercont img02">
          <div className="container">
            <div className="row">
              <div className="web-container">
                <div className="mission" data-aos="fade-up" data-aos-delay="500" data-aos-once="true" data-aos-duration="1000">
                  <h5>{pagedata.about.founder_quote}</h5>
                  <h6>{pagedata.about.founder_name}</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="founder">
          <div className="container">
            <div className="row">
              <div className="web-container">
                <div className="heading">
                  <h2 data-aos="fade-up" data-aos-delay="500" data-aos-once="true" data-aos-duration="1000">Meet the Team</h2>
                </div>
                <div className='founderinfo'>
                  <img src={pagedata.about.team_img} data-aos="fade-up" data-aos-delay="500" data-aos-once="true" data-aos-duration="1000"/>
                  <h4 data-aos="fade-up" data-aos-delay="500" data-aos-once="true" data-aos-duration="1000">{pagedata.about.team_founder}</h4>
                  <h5 data-aos="fade-up" data-aos-delay="500" data-aos-once="true" data-aos-duration="1000">{pagedata.about.team_founder_designation}</h5>
                  <p data-aos="fade-up" data-aos-delay="500" data-aos-once="true" data-aos-duration="1000">{pagedata.about.team_founder_content}</p>
                  <div className='line' data-aos="fade-up" data-aos-delay="500" data-aos-once="true" data-aos-duration="1000"></div>
                  <h4 data-aos="fade-up" data-aos-delay="500" data-aos-once="true" data-aos-duration="1000">{pagedata.about.team_founder2}</h4>
                  <h5 data-aos="fade-up" data-aos-delay="500" data-aos-once="true" data-aos-duration="1000">{pagedata.about.team_founder2_designation}</h5>
                  <p data-aos="fade-up" data-aos-delay="500" data-aos-once="true" data-aos-duration="1000">{pagedata.about.team_founder_content2}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="desk">
        <div className='desk'>
          <div className='container'>
            <div className='row'>
              <div className='web-container'>
                <div className='director'>
                  <div className='heading'>
                    <h2>From the Director’s Desk</h2>
                  </div>
                  <div className='directorcont founder'>
                    <div dangerouslySetInnerHTML={{__html: pagedata.about.director_content}} />
                    <span data-aos="fade-up" data-aos-delay="500" data-aos-once="true" data-aos-duration="1000"><strong>{pagedata.about.director_name} </strong>{pagedata.about.director_designation}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='container'>
          <div className='row'>
            <div className='web-container'>
              <div className='direcont'>
                <div className='direcont06' data-aos="fade-up" data-aos-delay="500" data-aos-once="true" data-aos-duration="1000">
                  <span ><strong>{pagedata.about.director_name2}</strong><br />{pagedata.about.director_designation2}</span>
                  <div dangerouslySetInnerHTML={{__html: pagedata.about.director_content2}} />
                </div>
                <div className='direcont06' data-aos="fade-up" data-aos-delay="500" data-aos-once="true" data-aos-duration="1000">
                  <span><strong>{pagedata.about.director_name3}</strong><br />{pagedata.about.director_designation3}</span>
                  <div dangerouslySetInnerHTML={{__html: pagedata.about.director_content3}} />
                </div>
              </div> </div>
          </div>
        </div>
      </section>
      <section id="author">
        <div className="bannercont img03">
          <div className="container">
            <div className="row">
              <div className="web-container">
                <div className="mission" data-aos="fade-up" data-aos-delay="500" data-aos-once="true" data-aos-duration="1000">
                  <h5 dangerouslySetInnerHTML={{__html: pagedata.about.quote}} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id='our-ethos'>
        <div className="container">
          <div className="row">
            <div className="web-container">
              <div className="heading" data-aos="fade-up" data-aos-delay="500" data-aos-once="true" data-aos-duration="1000">
                <h1>Our Ethos</h1>
              </div>
              <div className="our-ethos" data-aos="fade-up" data-aos-delay="500" data-aos-once="true" data-aos-duration="1000">
                <div className='ethosicon'>
                  <img src={ethos1} />
                </div>
                <div className='ethiscont' dangerouslySetInnerHTML={{__html: pagedata.about.vision}} />
              </div>
              <div className="our-ethos" data-aos="fade-up" data-aos-delay="500" data-aos-once="true" data-aos-duration="1000">
                <div className='ethosicon'>
                  <img src={ethos2} />
                </div>
                <div className='ethiscont' dangerouslySetInnerHTML={{__html: pagedata.about.mission}} />
              </div>
              <div className="our-ethos" data-aos="fade-up" data-aos-delay="500" data-aos-once="true" data-aos-duration="1000">
                <div className='ethosicon'>
                  <img src={ethos3} />
                </div>
                <div className='ethiscont' dangerouslySetInnerHTML={{__html: pagedata.about.community}} />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="video">
          <div className="container">
            <div className="row">
              <div className="web-container">
                <div className="heading" data-aos="fade-up" data-aos-delay="500" data-aos-once="true" data-aos-duration="1000">
                  <h2>Video</h2>
                </div>
                <div className="videobox text-center" data-aos="fade-up" data-aos-delay="600" data-aos-once="true" data-aos-duration="1000">
                <iframe className="ytb_vdo" src="https://www.youtube.com/embed/dlOPMtMcp74?rel=0" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
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

export default Our_story;
