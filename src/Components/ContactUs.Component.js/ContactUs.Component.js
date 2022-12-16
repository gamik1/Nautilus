import React from "react";
import "./ContactUs.Component.css";

// React component for Contact Us

export default function ContactUs(){
    return(
        <section className="section-contact">
        <div className="container">
            <h4 className="section-heading">Contact Us:</h4>
            <form className="contact" action="" method="post">
                <fieldset>
                    <label for="name" hidden>Name:</label>  
                    <input id="name" placeholder="Your Name" type="text" required />
                </fieldset>
                <fieldset>
                    <label for="email" hidden>Name:</label>
                    <input id="email" placeholder="Your Email Address" type="email" required />
                </fieldset>
                <fieldset>
                    <label for="phone" hidden>Name:</label>
                    <input id="phone" placeholder="Phone Number (optional)" type="tel" required />
                </fieldset>
                <fieldset>
                    <label for="message" hidden>Name:</label>
                    <textarea id="message" placeholder="Type your message here...." required></textarea>
                </fieldset>
                <fieldset>
                    <button name="submit" type="submit" id="contact-submit" data-submit="...Sending">Submit</button>
                </fieldset>
            </form>
        </div>
    </section>
    );
}