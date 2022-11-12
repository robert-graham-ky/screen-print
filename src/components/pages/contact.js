import React, { Component } from "react";
import Footer from "../footer/footer";
import Navbar from "../navigation/navbar";
import ContactForm from "../form/contact-form";
import { useEffect } from "react";
export default function () {
  useEffect(() => {
    document.getElementById("left-nav-wrapper").style.display = "none";
  });
  return (
    <div className="contact-page-wrapper">
      <div className="contact-center">
        <ContactForm></ContactForm>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}
