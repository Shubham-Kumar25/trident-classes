// Header.jsx
import React from "react";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { Link, animateScroll as scroll } from "react-scroll";
import "./Header.css";
import myLogo from "../../assets/logo/logo.png";

const Header = () => {
  const location = useLocation();

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <div>
      <header className="section-navbar">
        <div className="container">
          <div className="navbar-brand">
            <RouterLink to="/" onClick={scrollToTop}>
              <img
                src={myLogo}
                alt="Trident Classes Logo"
                width="10%"
                height="auto"
              />
            </RouterLink>
          </div>
          <nav className="navbar">
            <ul>
              <li className="nav-item">
                <RouterLink to="/" onClick={scrollToTop}>
                  Home
                </RouterLink>
              </li>
              {location.pathname === "/" && (
                <>
                  <li className="nav-item">
                    <Link to="about" smooth={true} duration={200}>
                      About Us
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="youtube" smooth={true} duration={200}>
                      YouTube Channel
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link to="contact-us" smooth={true} duration={200}>
                      Join Us
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Header;
