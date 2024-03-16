// Footer.jsx
import React from "react";
import { IoIosArrowUp } from "react-icons/io";
import { FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Footer.css";
import logo from "../../assets/logo/logo.png"; // Replace with the path to your Trident Classes logo

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer">
      <div className="custom-shape-divider-top">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>

      <div className="container grid grid-three--cols">
        <div className="footer-1--div">
          <div className="logo-brand">
            <Link className="footer-subheading" to="/">
              <img
                src={logo}
                alt="Trident Classes Logo"
                width="50%"
                height="auto"
              />
            </Link>
          </div>
          <p>Where Math Meets Mastery</p>
          <div className="social-footer--icons">
            <Link
              to=""
              rel="noopener noreferrer"
              title="Trident Classes Twitter"
            >
              <i>
                <FaTwitter size={25} />
              </i>
            </Link>
            <Link
              to=""
              rel="noopener noreferrer"
              title="Trident Classes LinkedIn"
            >
              <i>
                <FaLinkedin size={25} />
              </i>
            </Link>
            <Link
              to=""
              rel="noopener noreferrer"
              title="Trident Classes Instagram"
            >
              <i>
                <FaInstagram size={25} />
              </i>
            </Link>
          </div>
        </div>

        <div className="footer-2--div">
          <p className="footer-subheading">Visit Us</p>
          <ul>
            <li>
              Krishna Market
              <br /> Rohta Road, Meerut <br /> 250002
            </li>
          </ul>
        </div>

        <div className="footer-3--div">
          <p className="footer-subheading">Call Us</p>
          <ul>
            <li>+917078072251</li>
          </ul>
        </div>
      </div>

      {/* Scroll to top button/icon */}
      <div className="scroll-to-top" onClick={scrollToTop}>
        <IoIosArrowUp size={30} />
      </div>

      {/* Copyright */}
      <hr className="footer-horizontal-line" />
      <div className="footer-copyright">
        <p>© 2024 Trident Classes. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
