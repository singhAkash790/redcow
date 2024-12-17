import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Menu from "./Menu";

const Navbar = () => {
  const [navbar,setNavbar,show, setShow] = useState(false);
  const changeBackground = () => {
   if(window.scrollY >= 80) {
     setNavbar(true);
   } else {
     setNavbar(false);
   }
  };
  window.addEventListener('scroll', changeBackground);
  return (
    <>
      <section id="navbar" className="m-0">
        <div className={navbar ? 'navbar-bg fixed' : 'navbar-bg'}>
          <nav className="navbar navbar-expand-lg navbar-light ">
          <div className="container">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
              onClick={() => setShow(!show)}>
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="menus">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <NavLink className="nav-link active" aria-current="page" to="">
                    Our Story
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="">
                    Our Infrastucture
                  </NavLink>
                </li>                
                <li className="nav-item">
                  <NavLink className="nav-link" to="">
                    Products
                  </NavLink>
                </li>          
                <li className="nav-item">
                  <NavLink className="nav-link" to="">
                    <img src="./images/redcow.png" alt />
                  </NavLink>
                </li>                
                <li className="nav-item">
                  <NavLink className="nav-link" to="">
                     Farmers Sustainability
                  </NavLink>
                </li>
                
                <li className="nav-item">
                  <NavLink className="nav-link" to="#">
                    Blog
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="">
                    Contact Us
                  </NavLink>
                </li>
                <li className="nav-item">
                 <Menu />
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
