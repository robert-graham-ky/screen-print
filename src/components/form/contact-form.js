import React from "react";

const ContactForm = () => {
    return (
        <div className="form-wrapper">
            <form action="https://formsubmit.co/pickles40324@gmail.com" method="POST" onsubmit="confirm()" id="form1">
                <input type="text" name="name" placeholder="Your name" required ></input>
                <input type="email" name="email" placeholder="Your email address" required ></input>
                <textarea type="text" name="message" placeholder="Your message" required ></textarea>
                <input type="text" name="_honey" style={{display: "none"}} />
                <button type="submit">Send</button>
            </form>
            <div id="confirmation" className = "hidden">
                <h1>Thank you</h1>
                <h2>Your message was sent</h2>
            </div>
        </div>
    )
}

const confirm = () => {
    document.getElementById("form1").className = "hidden";
    document.getElementById("confirmation").className = "active";
}

export default ContactForm;