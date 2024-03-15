// YouTubeChannel.jsx
import React from "react";
import "./YoutubeChannel.css";

const YouTubeChannel = () => {
  const channelUrl = "https://www.youtube.com/@tridentclasses";
  const videoUrl = "https://www.youtube.com/embed/ujPofki89xc";

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
          <iframe
            width="250"
            height="445"
            src={videoUrl}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default YouTubeChannel;
