// YouTubeChannel.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./YoutubeChannel.css";
import youtubeLogoImg from "../../assets/images/youtube.png";

const YouTubeChannel = () => {
  const channelUrl = "https://www.youtube.com/@tridentclasses";

  return (
    <div
      className="section-youtube--homepage"
      data-aos="zoom-in-up"
      id="youtube"
    >
      <div className="container grid grid-two--cols">
        <div className="contact-content">
          <h2 className="contact-title">Discover Trident Classes on YouTube</h2>
          <p>
            Join us on our YouTube channel and dive into a wealth of math
            tutorials, problem-solving sessions, exam tips, and live Q&A
            sessions. Enhance your learning journey with Trident Classes.
          </p>
          <div>
            <a
              href={channelUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn contact-btn"
            >
              Visit Channel
            </a>
          </div>
        </div>
        <div className="contact-image">
          <img src={youtubeLogoImg} alt="Trident Classes YouTube Channel" />
        </div>
      </div>
    </div>
  );
};

export default YouTubeChannel;
