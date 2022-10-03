import React from "react";

import SlideShow from "../slides/slide-show";
import Navbar from "../navigation/navbar";
import Footer from "../footer/footer";
import Slide1 from "../../../static/images/FAMILY REUNION MOCKUP 002.png";
import Slide2 from "../../../static/images/backshirt002.jpg";
import Slide3 from "../../../static/images/backshirt002.jpg";


export default function () {
    return (
      <div className="homepage-wrapper">
        <div className="navbar">
          <Navbar />
        </div>
        <div className="homepage-center">
          <div className="slides">
            <SlideShow image1={Slide1} image2={Slide2} image3={Slide3}/>
          </div>
          <div className="product-list" id="apparel">
            Hi
          </div>
          <div className="product-list" id="logos">

          </div>
          <div className="product-list" id="decals">

          </div>
        </div>
        <div id="footer">
          <Footer />
        </div>
      </div>
    );
  }