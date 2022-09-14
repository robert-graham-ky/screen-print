import React from "react";

import SlideShow from "../slides/slide-show";
import Navbar from "../navigation/navbar";
import Footer from "../footer/footer";

export default function () {
    return (
      <div className="homepage-wrapper">
        <div className="navbar">
          <Navbar />
        </div>
        <div className="homepage-center">
          <div className="slides">
            <SlideShow />
          </div>
          <div className="product-list" id="apparel">

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