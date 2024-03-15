// ContactUsMain.jsx
import React, { useEffect } from "react";
import "./ContactUsMain.css";

const ContactUsMain = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted!");
  };

  return (
    <div className="section-contact" id="contact-us">
      <div className="container">
        <h2 className="section-common-heading">Contact Trident Classes</h2>
        <p className="section-common-subheading">
          Have any questions or need assistance with our math tutorials? We are
          dedicated to assisting you.
        </p>
      </div>

      <div className="container grid grid-two--cols">
        <div className="contact-content">
          <form method="POST" action="https://getform.io/f/payngvrb">
            <div className="grid grid-two--cols mb-3">
              <div>
                <label htmlFor="name">Your Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  autoComplete="off"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label htmlFor="email">Your Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="off"
                  required
                  placeholder="example@tridentclasses.com"
                />
              </div>
            </div>

            <div className="mb-3">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                name="subject"
                id="subject"
                placeholder="Your main title"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="message">Message</label>
              <textarea
                name="message"
                id="message"
                cols="30"
                rows="10"
                placeholder="Enter your message"
              ></textarea>
            </div>

            <div>
              <button type="submit" className="btn btn-submit">
                Send Message
              </button>
            </div>
          </form>
        </div>

        <div className="contact-map">
          <iframe
            className="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3490.008201894174!2d77.66346597499582!3d28.98712796789082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390c6567ee23fd67%3A0x2d8fce7edd91d769!2sTrident%20classes!5e0!3m2!1sen!2sin!4v1710059821194!5m2!1sen!2sin"
            width="100%"
            height="450px"
            style={{ border: 0 }}
            allowfullscreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactUsMain;
