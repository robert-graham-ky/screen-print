import React from "react";
import { withRouter } from "react-router";
import { NavLink } from "react-router-dom";
const Navbar = (props) => {
    return (
        <div className="nav-wrapper">
            {//remember to hide the left anchor links on contact page
            }
            <div className="left-nav-wrapper">
                <a href="#decals">Sticker Decals</a>
                <a href="#apparel">Apparel</a>
                <a href="#logos">Logo Designing</a>
            </div>
            <div className="mid-nav-wrapper">

            </div>
            <div className="right-nav-wrapper">
            <div className="nav-link-wrapper">
          {
            <NavLink exact to="/" activeClassName="nav-link-active">
              Home
            </NavLink>
          }
        </div>

        <div className="nav-link-wrapper">
          {
            <NavLink exact to="/contact" activeClassName="nav-link-active">
              Contact
            </NavLink>
          }
        </div>
            </div>
        </div>
    );
};

export default withRouter(Navbar);