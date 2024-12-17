import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import logo from "./images/redcow.webp";
import { Helmet } from "react-helmet";

const Navbar = () => {
  const canonical = window.location.href;
  console.log(canonical);
  const [navbar, setNavbar, show, setShow] = useState(false);
  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);

    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, []);

  const [isActive, setActive] = useState("false");

  const handleToggle = () => {
    setActive(!isActive);
  };
  return (
    <>
        <Helmet>
          <link rel="canonical" href={canonical} />
        </Helmet>
      <section id="navbar" className="m-0">
        <div className={navbar ? "navbar-bg fixed" : "navbar-bg"}>
          <nav className="navbar navbar-expand-lg navbar-light ">
            <div className="container"> 
              <div className="menus">
                <div className="logo mobile-show">
                  <NavLink
                    className="nav-link"
                    exact
                    activeClassName="active_class"
                    to="/"
                  >
                    <img src={logo} alt="Redcow Logo" />
                  </NavLink>
                </div>
                <ul className="navbar-nav">
                  <li className="nav-item desktop-show">
                    <NavLink
                      className="nav-link"
                      exact
                      activeClassName="active_class"
                      to="/our-story"
                    >
                      Our Story
                    </NavLink>
                  </li>
                  <li className="nav-item desktop-show">
                    <NavLink
                      className="nav-link"
                      exact
                      activeClassName="active_class"
                      to="/our-infrastructure"
                    >
                      Our Infrastucture
                    </NavLink>
                  </li>
                  <li className="nav-item desktop-show">
                    <NavLink
                      className="nav-link"
                      exact
                      activeClassName="active_class"
                      to="/our-products"
                    >
                      Our Products
                    </NavLink>
                  </li>
                  <li className="nav-item desktop-show">
                    <NavLink
                      className="nav-link"
                      exact
                      activeClassName="active_class"
                      to="/"
                    >
                      <img
                        src={logo}
                        alt="Redcow"
                        width="268px"
                        height="170px"
                      />
                    </NavLink>
                  </li>
                  <li className="nav-item desktop-show">
                    <NavLink
                      className="nav-link"
                      exact
                      activeClassName="active_class"
                      to="/our-csr"
                    >
                      Our CSR
                    </NavLink>
                  </li>

                  <li className="nav-item desktop-show">
                    <a href="#" id="disabledLink">
                      Dairy Blog
                    </a>
                  </li>
                  <li className="nav-item contact desktop-show">
                    <NavLink
                      className="nav-link"
                      exact
                      activeClassName="active_class"
                      to="/contact-us"
                    >
                      Contact Us
                    </NavLink>
                  </li>
                  <li
                    className={isActive ? "isActive toggle" : "isActive tshow"}
                  >
                    <button onClick={handleToggle} className="hemburgur" id="_hemburgur" aria-label="__hemburgur">
                      <span></span>
                      <span></span>
                      <span></span>
                    </button>
                    <ul className="display-flex hemmenu">
                      <li className="mobile-show">
                        <NavLink
                          className="nav-link"
                          exact
                          activeClassName="active_class"
                          to="/our-story"
                        >
                          Our Story
                        </NavLink>
                      </li>
                      <li className="mobile-show">
                        <NavLink
                          className="nav-link"
                          exact
                          activeClassName="active_class"
                          to="/our-infrastructure"
                        >
                          Our Infrastucture
                        </NavLink>
                      </li>
                      <li className="mobile-show">
                        <NavLink
                          className="nav-link"
                          exact
                          activeClassName="active_class"
                          to="/our-products"
                        >
                          Our Products
                        </NavLink>
                      </li>
                      <li className="mobile-show">
                        <NavLink
                          className="nav-link"
                          exact
                          activeClassName="active_class"
                          to="/our-csr"
                        >
                          Our CSR
                        </NavLink>
                      </li>
                      <li className="mobile-show">
                        <a>Dairy Blog</a>
                      </li>
                      <li className="mobile-show">
                        {" "}
                        <NavLink
                          className="nav-link"
                          exact
                          activeClassName="active_class"
                          to="/contact-us"
                        >
                          Contact Us
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          className="nav-link"
                          exact
                          activeClassName="active_class"
                          to="/career"
                        >
                          Career
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          className="nav-link"
                          exact
                          activeClassName="active_class"
                          to="/dealers-enquiry"
                        >
                          Dealer's Enquiry
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          className="nav-link"
                          exact
                          activeClassName="active_class"
                          to="/suppliers-enquiry"
                        >
                          Suppliers Enquiry
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          className="nav-link"
                          exact
                          activeClassName="active_class"
                          to="/vendor-registration"
                        >
                          Vendor Registration
                        </NavLink>
                      </li>
                      {/* <li><NavLink className="nav-link" exact activeClassName="active_class" to="/tender-management">Tender Management</NavLink></li> */}
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </section>
    </>
  );
};

export default Navbar;
