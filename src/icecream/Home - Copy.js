import React, { useEffect, useState } from "react";
import Logo from "./images/logo.png";
import { Link, animateScroll as scroll } from "react-scroll";
import Aos from "aos";
import "aos/dist/aos.css";
import Banner from "./images/ice-cream.png";
import Banner1 from "./images/icecreamslide01.png";
import Banner2 from "./images/icecreamslide02.png";
import Banner3 from "./images/icecreamslide03.png";
import Slider from "react-slick";
import Img01 from "./images/gallery01.png";
import Img02 from "./images/gallery02.png";
import Img03 from "./images/gallery03.png";
import Img04 from "./images/gallery04.png";
import Img06 from "./images/gallery06.png";
import Img07 from "./images/gallery09a.png";
import Img08 from "./images/gallery08.png";
import Img09 from "./images/gallery09.png";
import Img10 from "./images/gallery10.png";
import Img11 from "./images/gallery11.png";
import Icecream01 from "./images/icecream01.png";
import Icecream02 from "./images/icecream02.png";
import Icecream03 from "./images/icecream03.png";
import Icecream04 from "./images/icecream04.png";
import sunday01 from "./images/sundae01.png";
import sunday02 from "./images/sundae02.png";
import milkshake01 from "./images/milkshake01.png";
import milkshake02 from "./images/milkshake02.png";
import "../icecream/stylesheet.css";
import "../icecream/responsive.css";
import { Address } from "./components/Address";
import AdressData from "./Data/AddressData.json";
import axios from "axios";

export const Home = () => {
  const canonical = window.location.href;
  const [icmenus, setActive] = useState(false);
  const [col12, setNavbar] = useState(false);
  const [data, setData] = useState(null); // Initialize data as null

  useEffect(() => {
    let mounted = true;

    const loadData = async () => {
      try {
        const response = await axios.get(
          "https://redcowdairy.in/api/json_api.php"
        );
        if (mounted) {
          setData(response.data);
        }
      } catch (error) {
        // Handle any error that might occur during the API request
        console.error(error);
      }
    };

    loadData();

    return () => {
      mounted = false;
    };
  }, []);

  useEffect(() => {
    Aos.init({ duration: 1000 });
    window.addEventListener("scroll", changeBackground);

    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, []);

  const handleToggle = () => {
    setActive(!icmenus);
  };

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  console.log(canonical);

  // Check if data or data.customAddress is undefined before accessing it
  if (!data || !data.custom) {
    return null; // Return early or handle loading state here
  }

  console.log("this is the api json data", data.custom);

  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: false,
    speed: 600,
    arrows: true,
    Default: true,
    autoplaySpeed: 8000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 680,
        settings: {
          slidesToShow: 1,
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
  var settings3 = {
    dots: false,
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    speed: 500,
    arrows: true,
    Default: true,
    autoplaySpeed: 8000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 680,
        settings: {
          slidesToShow: 1,
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
  var settings2 = {
    dots: false,
    fade: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    speed: 600,
    arrows: false,
    Default: true,
    autoplaySpeed: 8000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 680,
        settings: {
          slidesToShow: 1,
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
  return (
    <>
      <main>
        <section
          id="header"
          className="position-absolute left-0 top-0 right-0 col-12"
        >
          <header className={col12 ? "col12 fixed" : "col12"}>
            <div className="container">
              <div className="row">
                <div className="col-4">
                  <div
                    className="logo"
                    data-aos="fade-in"
                    data-aos-offset="100"
                    data-aos-easing="ease-in-sine"
                    data-aos-once="true"
                    data-aos-duration="500"
                  >
                    <Link
                      activeClass="active"
                      to="header"
                      spy={true}
                      smooth={true}
                      offset={-40}
                      duration={500}
                    >
                      {" "}
                      <img src={Logo} />{" "}
                    </Link>
                  </div>
                </div>
                <div className="col-8 d-flex align-items-center justify-content-end">
                  <div className="navbar navright">
                    <div className={icmenus ? "icmenus active" : "icmenus"}>
                      <ul className="d-flex">
                        <li>
                          <Link
                            activeClass="active"
                            to="header"
                            spy={true}
                            smooth={true}
                            offset={-40}
                            duration={500}
                          >
                            Home
                          </Link>
                        </li>
                        <li>
                          <Link
                            activeClass="active"
                            to="creamy-dreamy"
                            spy={true}
                            smooth={true}
                            offset={-40}
                            duration={500}
                          >
                            Flavours
                          </Link>
                        </li>
                        <li>
                          <Link
                            activeClass="active"
                            to="sundaes"
                            spy={true}
                            smooth={true}
                            offset={-40}
                            duration={500}
                          >
                            Sundaes
                          </Link>
                        </li>
                        <li>
                          <Link
                            activeClass="active"
                            to="milkshakes"
                            spy={true}
                            smooth={true}
                            offset={-40}
                            duration={500}
                          >
                            Milkshakes
                          </Link>
                        </li>
                        <li>
                          <Link
                            activeClass="active"
                            to="outlates"
                            spy={true}
                            smooth={true}
                            offset={-40}
                            duration={500}
                          >
                            Outlets
                          </Link>
                        </li>
                        <li>
                          <a href="https://www.redcowdairy.in/">
                            Go to website
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="mobile-show">
                      <button
                        onClick={handleToggle}
                        className={icmenus ? "hemburgurss active" : "hemburgurss"}
                      >
                        <span></span>
                        <span></span>
                        <span></span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </header>
        </section>
        <section id="banner">
          <div className="banner">
            <div className="container">
              <div className="row">
                <div className="web-container">
                  <div className="col-12 row">
                    <div className="col-md-7 col-xs-12">
                      <Slider {...settings2}>
                        <div>
                          <img src={Banner} alt="icecream" />
                        </div>
                        <div>
                          <img src={Banner1} alt="icecream" />
                        </div>
                        <div>
                          <img src={Banner2} alt="icecream" />
                        </div>
                        <div>
                          <img src={Banner3} alt="icecream" />
                        </div>
                      </Slider>
                    </div>
                    <div className="col-md-5 col-xs-12">
                      <div className="webcont">
                        <h1
                          data-aos="fade-in"
                          data-aos-offset="80"
                          data-aos-easing="ease-in-sine"
                          data-aos-once="true"
                          data-aos-duration="500"
                        >
                          Enjoy the scoop of Happiness
                        </h1>
                        <p
                          data-aos="fade-in"
                          data-aos-offset="100"
                          data-aos-easing="ease-in-sine"
                          data-aos-once="true"
                          data-aos-duration="1000"
                        >
                          Serving scoops of happiness, one scoop at a time. Grab
                          your favourite scoop at Red Cow Dairy World today.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="creamylicious">
          <div className="Creamylicious">
            <div className="container">
              <div className="row">
                <div className="web-container">
                  <div className="title">
                    <h2
                      data-aos="flip-up"
                      data-aos-offset="100"
                      data-aos-easing="ease-in-sine"
                      data-aos-once="true"
                      data-aos-duration="500"
                    >
                      Creamylicious Goodness!
                    </h2>
                    <p
                      data-aos="fade-up"
                      data-aos-offset="100"
                      data-aos-easing="ease-in-sine"
                      data-aos-once="true"
                      data-aos-duration="500"
                    >
                      Introduced in the year 2022, Red Cow ice creams are made
                      with the pure goodness of Red Cow milk. Made using only
                      premium ingredients available, so you get the best. Red
                      Cow ice creams are the epitome of richness in quality, we
                      serve you creamylicious deliciousness in over 30 flavours
                      along with specially curated sundaes and milkshakes. Grab
                      yours today!
                    </p>
                  </div>
                  <div
                    className="slider"
                    data-aos="fade-up"
                    data-aos-offset="100"
                    data-aos-easing="ease-in-sine"
                    data-aos-once="true"
                    data-aos-duration="500"
                  >
                    <Slider {...settings}>
                      <div>
                        <div className="homeslider slide02">
                          <img src={Img09} alt="" />
                        </div>
                      </div>
                      <div>
                        <div className="homeslider slide02">
                          <img src={Img07} alt="" />
                        </div>
                      </div>
                      <div>
                        <div className="homeslider slide02">
                          <img src={Img10} alt="" />
                        </div>
                      </div>
                      <div>
                        <div className="homeslider slide02">
                          <img src={Img11} alt="" />
                        </div>
                      </div>
                      <div>
                        <div className="homeslider slide01">
                          <img src={Img01} alt="" />
                        </div>
                      </div>
                      <div>
                        <div className="homeslider slide02">
                          <img src={Img02} alt="" />
                        </div>
                      </div>
                      <div>
                        <div className="homeslider slide01">
                          <img src={Img03} alt="" />
                        </div>
                      </div>
                      <div>
                        <div className="homeslider slide02">
                          <img src={Img04} alt="" />
                        </div>
                      </div>
                      <div>
                        <div className="homeslider slide02">
                          <img src={Img06} alt="" />
                        </div>
                      </div>
                      <div>
                        <div className="homeslider slide02">
                          <img src={Img08} alt="" />
                        </div>
                      </div>
                    </Slider>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="creamy-dreamy">
          <div className="creamy-dreamy">
            <div className="container">
              <div className="row">
                <div className="web-container">
                  <div className="title">
                    <span
                      data-aos="zoom-in"
                      data-aos-offset="100"
                      data-aos-easing="ease-in-sine"
                      data-aos-once="true"
                      data-aos-duration="500"
                    >
                      Flavours
                    </span>
                    <h2
                      data-aos="flip-up"
                      data-aos-offset="100"
                      data-aos-easing="ease-in-sine"
                      data-aos-once="true"
                      data-aos-duration="500"
                    >
                      Creamy & Dreamy
                    </h2>
                    <p
                      data-aos="fade-up"
                      data-aos-offset="100"
                      data-aos-easing="ease-in-sine"
                      data-aos-once="true"
                      data-aos-duration="500"
                    >
                      Introducing over 30 flavours and 15 plus topping to choose
                      from. Go get your favourite creamy & dreamy Red Cow ice
                      cream today.
                    </p>
                  </div>
                  <div
                    className="creamy"
                    data-aos="fade-up"
                    data-aos-offset="100"
                    data-aos-easing="ease-in-sine"
                    data-aos-once="true"
                    data-aos-duration="500"
                  >
                    <div className="cdreamy">
                      <div className="ctitle">
                        <h3>Classic</h3>
                      </div>
                      <ul>
                        <li>FRENCH VANILLA</li>
                        <li>BUTTER SCOTCH CRUNCH</li>
                        <li>DUTCH CHOCOLATE</li>
                        <li>BLUE CANDY</li>
                        <li>RABRI MALAI</li>
                      </ul>
                      <div className="ice-cream">
                        <img src={Icecream01} className="icecream01" />
                      </div>
                    </div>
                    <div className="cdreamy">
                      <div className="ctitle">
                        <h3>premium</h3>
                      </div>
                      <ul>
                        <li>FRESH STRAWBERRY</li>
                        <li>ALPHONSO MANGO</li>
                        <li>TUTTY FRUITY</li>
                        <li>BELGIAN CHOCOLATE</li>
                        <li>NOLEN GUR (SEASONAL)</li>
                        <li>COFFEE TOFFE</li>
                      </ul>
                    </div>
                    <div className="cdreamy">
                      <div className="ice-cream">
                        <img src={Icecream02} className="icecream02" />
                      </div>
                      <ul>
                        <li>FIG & HONEY</li>
                        <li>RED VELVET</li>
                        <li>BLACKCURRANT</li>
                        <li>CHOCO CHIPS ROYAL</li>
                        <li>OREO N CREAM</li>
                      </ul>
                    </div>
                    <div className="cdreamy">
                      <div className="ctitle">
                        <h3>Exotica</h3>
                      </div>
                      <ul>
                        <li>FRUIT OVERLOAD</li>
                        <li>TENDER COCONUT</li>
                        <li>SITAPHAL</li>
                        <li>MADAGASCAR CHOCOLATE</li>
                        <li>KESAR PISTA</li>
                        <li>HONEY NUT CRUNCH</li>
                        <li>MINT CHOCO CHIPS</li>
                      </ul>
                      <div className="ice-cream">
                        <img src={Icecream03} className="icecream03" />
                      </div>
                    </div>
                    <div className="cdreamy">
                      <div className="ice-cream">
                        <img src={Icecream04} className="icecream04" />
                      </div>
                      <ul>
                        <li>CHOCOLATE PRALINE</li>
                        <li>PRALINE N CREAM</li>
                        <li>BLUEBERRY CHEESE CAKE</li>
                        <li>HERSHEY'S CHOCOLATE OVERLOAD</li>
                        <li>BISCOTTINO</li>
                        <li>HAZELNUT </li>
                        <li>ROASTED CALIFORNIA ALMOND</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="sundaes">
          <div className="sundaes">
            <div className="container">
              <div className="row">
                <div className="web-container">
                  <div className="title">
                    <span
                      data-aos="zoom-in"
                      data-aos-offset="100"
                      data-aos-easing="ease-in-sine"
                      data-aos-once="true"
                      data-aos-duration="500"
                    >
                      Sundaes
                    </span>
                    <h2
                      data-aos="flip-up"
                      data-aos-offset="100"
                      data-aos-easing="ease-in-sine"
                      data-aos-once="true"
                      data-aos-duration="500"
                    >
                      Sundaes make Sundays better!
                    </h2>
                    <p
                      data-aos="fade-up"
                      data-aos-offset="100"
                      data-aos-easing="ease-in-sine"
                      data-aos-once="true"
                      data-aos-duration="500"
                    >
                      Grab the specially curated creamy delights, to match your
                      taste buds!
                    </p>
                  </div>
                  <div className="ctitle">
                    <h3
                      data-aos="flip-up"
                      data-aos-offset="100"
                      data-aos-easing="ease-in-sine"
                      data-aos-once="true"
                      data-aos-duration="500"
                    >
                      SUNDAES
                    </h3>
                  </div>
                  <div className="sundaesent">
                    <div className="sunday">
                      <div className="sundayimg">
                        <img src={sunday01} />
                      </div>
                      <div className="sundaycont">
                        <ul>
                          <li>HOT FUDGE </li>
                          <li>BANANA ROYAL</li>
                          <li>DUSTY ROADS </li>
                          <li>OREO COOKIE DELIGHTS</li>
                          <li>KIDDI GEMS</li>
                          <li>DOUBLE SCOOP </li>
                        </ul>
                      </div>
                    </div>
                    <div className="sunday">
                      <div className="sundayimg">
                        <img src={sunday02} />
                      </div>
                      <div className="sundaycont">
                        <ul>
                          <li>NUTTY PROFESSOR</li>
                          <li>TRIPLE SCOOP </li>
                          <li>TULIP </li>
                          <li>CHOCO MADNESS FANTASY </li>
                          <li>FRESH FRUITS</li>
                          <li>BROWNIE A LA MODE</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="milkshakes">
          <div className="sundaes milkshakes pt-0">
            <div className="container">
              <div className="row">
                <div className="web-container">
                  <div className="title">
                    <span
                      data-aos="zoom-in"
                      data-aos-offset="100"
                      data-aos-easing="ease-in-sine"
                      data-aos-once="true"
                      data-aos-duration="500"
                    >
                      Milkshakes
                    </span>
                    <h2
                      data-aos="flip-up"
                      data-aos-offset="100"
                      data-aos-easing="ease-in-sine"
                      data-aos-once="true"
                      data-aos-duration="500"
                    >
                      Choose your taste!
                    </h2>
                    <p
                      data-aos="fade-up"
                      data-aos-offset="100"
                      data-aos-easing="ease-in-sine"
                      data-aos-once="true"
                      data-aos-duration="500"
                    >
                      Grab your favourite creamy shakes, available in over 10
                      rich flavours. Choose your favourite and enjoy the milky
                      goodness.
                    </p>
                  </div>
                  <div className="ctitle">
                    <h3
                      data-aos="flip-up"
                      data-aos-offset="100"
                      data-aos-easing="ease-in-sine"
                      data-aos-once="true"
                      data-aos-duration="500"
                    >
                      Milkshakes
                    </h3>
                  </div>
                  <div className="sundaesent">
                    <div className="sunday">
                      <div className="sundayimg">
                        <img src={milkshake01} />
                      </div>
                      <div className="sundaycont">
                        <ul>
                          <li>PINA COLADA </li>
                          <li>VANILLA SHAKE </li>
                          <li>MANGO BERRY</li>
                          <li>FRESH STRAWBERRY</li>
                          <li>CANDY DREAMS</li>
                          <li>FRUIT OVERLOAD</li>
                        </ul>
                      </div>
                    </div>
                    <div className="sunday">
                      <div className="sundayimg">
                        <img src={milkshake02} />
                      </div>
                      <div className="sundaycont">
                        <ul>
                          <li>DRY FRUIT PUNCH</li>
                          <li>KESAR PISTA SHAKE</li>
                          <li>CHOCOLATE OVERLOAD</li>
                          <li>CARAMEL CHOCOLATE TWIST </li>
                          <li>CHOCO OREO SURPRISE</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="outlates">
          <div className="outlates">
            <div className="container">
              <div className="row">
                <div className="web-container">
                  <div className="title">
                    <span
                      data-aos="zoom-in"
                      data-aos-offset="100"
                      data-aos-easing="ease-in-sine"
                      data-aos-once="true"
                      data-aos-duration="500"
                    >
                      OUTLETS
                    </span>
                    <h2
                      data-aos="flip-up"
                      data-aos-offset="100"
                      data-aos-easing="ease-in-sine"
                      data-aos-once="true"
                      data-aos-duration="500"
                    >
                      Hop over to Red Cow Dairy World.
                    </h2>
                    <p
                      data-aos="fade-up"
                      data-aos-offset="100"
                      data-aos-easing="ease-in-sine"
                      data-aos-once="true"
                      data-aos-duration="500"
                    >
                      Hop over to the land of flavours at Red Cow Dairy World to
                      get your favourite scoop of happiness today. Now located
                      near you!
                    </p>
                  </div>
                  <div className="outlates_slider">
                    <Slider {...settings3}>
                      {data.custom.map((address, index) => (
                        <Address
                          key={index}
                          Title={address.name}
                          Address={address.address}
                        />
                      ))}
                    </Slider>
                  </div>

                  {/* <div
                    className="outlateshapes"
                    data-aos="fade-up"
                    data-aos-offset="100"
                    data-aos-easing="ease-in-sine"
                    data-aos-once="true"
                    data-aos-duration="500"
                  >
                    <div className="ctitle">
                      <h3>Saltlake</h3>
                      <p>
                        BG 1, Sector II, Saltlake Near Tank no.7 700064, Kolkata
                        West Bengal, India{" "}
                      </p>
                    </div>
                    <div className="ctitle">
                      <h3>Lake Town</h3>
                      <p>
                        P-74, Lake Town Block B Opp. Central Bank of India
                        700089, Kolkata West Bengal, India
                      </p>
                    </div>
                    <div className="ctitle">
                      <h3>Rajpur Sonarpur</h3>
                      <p>
                        Shop No.5, Rajpur Sonarpur Opp. B.D. Memorial School
                        700103, Kolkata West Bengal, India
                      </p>
                    </div>
                  </div>
                  <div
                    className="outlateshapes "
                    data-aos="fade-up"
                    data-aos-offset="100"
                    data-aos-easing="ease-in-sine"
                    data-aos-once="true"
                    data-aos-duration="500"
                  >
                    <div className="ctitle">
                      <h3>Madhyamgram</h3>
                      <p>
                        74/4/2, Jessore Road (South), Nabatirtha. Hridaypur,
                        Opposite Star Mall Kolkata-700127
                      </p>
                    </div>
                    <div className="ctitle">
                      <h3>ALAMBAZAR</h3>
                      <p>
                        Red Cow Dairy World, 62 Deshbandhu Road, Near Kalitala
                        Math, Kolkata-700035
                      </p>
                    </div>
                    <div className="ctitle">
                      <h3>BALLYGUNGE</h3>
                      <p>
                        13 Pramathes Barua Road, Ground Floor, Beside Automobile
                        Club, Kolkata-700019
                      </p>
                    </div>
                  </div> */}
                  {/* <div
                    className="outlateshapes "
                    data-aos="fade-up"
                    data-aos-offset="100"
                    data-aos-easing="ease-in-sine"
                    data-aos-once="true"
                    data-aos-duration="500"
                  >
                    <div className="ctitle">
                      <h3>Camac Street</h3>
                      <p>
                        18, Camac Street, Kolkata-700016, Opposite Joyalukkas
                        Jewellry Shop
                      </p>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
          <div className="outlates reliance">
            <div className="container">
              <div className="row">
                <div className="web-container">
                  <div className="title">
                    <h2
                      data-aos="flip-up"
                      data-aos-offset="100"
                      data-aos-easing="ease-in-sine"
                      data-aos-once="true"
                      data-aos-duration="500"
                    >
                      Reliance Smart bazaar
                    </h2>
                  </div>
                  <div className="outlates_slider">
                    <Slider {...settings3}>
                      {data.reliance_smart_bazaar.map((address, index) => (
                        <Address
                          key={index}
                          Title={address.name}
                          Address={address.address}
                        />
                      ))}
                    </Slider>
                  </div>
                  {/* <div
                    className="outlateshapes"
                    data-aos="fade-up"
                    data-aos-offset="100"
                    data-aos-easing="ease-in-sine"
                    data-aos-once="true"
                    data-aos-duration="500"
                  >
                    <div className="ctitle widthA">
                      <p>
                        Ground Floor, 74, Diamond Harbour Road Ward No-77,
                        Opposite St. Thomas School, Kolkata.
                      </p>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="copyrights">
          <div className="copyrights">
            <div className="container">
              <div className="row">
                <div className="web-container">
                  <div className="copycontent">
                    <p>&copy; 2023 All rights reserved. Red Cow Dairy</p>
                    <p>
                      <a href="https://triverseadvertising.com/">
                        design: triverse
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Mobile show button */}
        <div className="visitwebsite mobile-show">
          <a href="https://www.redcowdairy.in/">Go to website</a>
        </div>
        {/* Mobile show button */}
      </main>
    </>
  );
};
export default Home;
