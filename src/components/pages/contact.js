import React, { Component } from "react";
import Footer from "../footer/footer";
import Navbar from "../navigation/navbar";

export default class Contact extends Component{
    render() {
        return (
            <div className="contact-page-wrapper">
                <div className="navbar">
                    <Navbar />
                </div>
                <div className="contact-center">
                    
                </div>
                <div className="footer">
                    <Footer />
                </div>
            </div>
        )
    }
}
