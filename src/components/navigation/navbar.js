import React from "react";
import { withRouter } from "react-router";
import { NavLink } from "react-router-dom";
import Logo from "../../../static/images/logos/CrackShot Retro001.png";
const Navbar = (props) => {
  return (
    <div className="nav-wrapper">
      {
        //remember to hide the left anchor links on contact page
        //the elements they link do not exist on contact page
      }
      <div className="left-nav-wrapper">
        <a href="#decals">Sticker Decals</a>
        <a href="#apparel">Apparel</a>
        <a href="#logos">Logo Designing</a>
      </div>
      <div className="mid-nav-wrapper">
        <img src={Logo} alt="Logo" />
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
