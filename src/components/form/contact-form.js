import React, { Component } from "react";
import { useEffect } from "react";

export default class ContactForm extends Component {
  constructor() {
    super();

    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }
  handleFormSubmit() {
    document.getElementById("confirmation").classList.add = "active-confirmation";
    document.getElementById("confirmation").classList.remove = "hidden-confirmation";
  }
  render() {
    return (
      <div className="form-wrapper">
        <form
          action="https://formsubmit.co/pickles40324@gmail.com"
          method="POST"
          onSubmit={this.handleFormSubmit}
          id="form1"
        >
          <input
            type="text"
            name="name"
            placeholder="Your name"
            required
          ></input>
          <input
            type="email"
            name="email"
            placeholder="Your email address"
            required
          ></input>
          <textarea
            type="text"
            name="message"
            placeholder="Your message"
            required
          ></textarea>
          <input type="text" name="_honey" style={{ display: "none" }} />
          <button type="submit">Send</button>
        </form>
        <div id="confirmation" className="hidden-confirmation">
          <h1>Thank you</h1>
          <h2>Your message was sent</h2>
        </div>
      </div>
    );
  }
}
