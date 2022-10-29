import React, { Component } from "react";
import Footer from "../footer/footer";
import Navbar from "../navigation/navbar";
import ContactForm from "../form/contact-form";

export default class Contact extends Component{
    render() {
        return (
            <div className="contact-page-wrapper">
                <div className="contact-center">
                    <ContactForm></ContactForm>
                </div>
                <div className="footer">
                    <Footer />
                </div>
            </div>
        )
    }
}
