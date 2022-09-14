import React from "react";
import { withRouter } from "react-router";
import { NavLink } from "react-router-dom";

const Footer = (props) => {
  return (
    <div className="footer-wrapper">
      <div className="footer-contact-wrapper">
        <span className="phone-wrapper">555-555-5555</span>
        <span className="hours-wrapper">11:30 AM to 8 PM</span>
      </div>
      <div className="footer-nav-wrapper">
        <div className="footer-link-wrapper">
          {
            <NavLink exact to="/" activeClassName="nav-link-active">
              Home
            </NavLink>
          }
        </div>
        <div className="footer-link-wrapper">
          {
            <NavLink exact to="/contact" activeClassName="nav-link-active">
              About
            </NavLink>
          }
        </div>

      </div>
      <div className="copyright-wrapper">
        &copy; Example Inc &#124; All rights reserved
      </div>
    </div>
  );
};

export default withRouter(Footer);