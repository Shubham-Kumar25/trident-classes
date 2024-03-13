// ContactUs.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./ContactUs.css";
import contactUsImg from "../../assets/images/contact-us.webp";

const ContactUs = () => (
  <div className="section-contact--homepage" data-aos="zoom-in-up" id="contact">
    <div className="container grid grid-two--cols">
      <div className="contact-content">
        <h2 className="contact-title">Contact Trident Classes</h2>
        <p>
          Have any questions or need assistance with our math tutorials? Our
          team is ready to assist you on your learning journey.
        </p>
        <div>
          <Link to="/contactus" className="btn contact-btn">
            Get in Touch
          </Link>
        </div>
      </div>
      <div className="contact-image">
        <img src={contactUsImg} alt="Contact us illustration" />
      </div>
    </div>
  </div>
);

export default ContactUs;
