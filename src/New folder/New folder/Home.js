import React from "react";
import Navbar from "./navbar";
import Footer from "./Footer";
import Header from "./Header";
import { Products } from "./Products";
import { Bengal } from "./Bengal";
import Aboutus from "./Aboutus";


const Home = () => {
  return (
    <>
       <Navbar />
      <Header />
      <Products />
      <Bengal />
      <Aboutus />
      <Footer /> 
    </>
  );
};

export default Home;
