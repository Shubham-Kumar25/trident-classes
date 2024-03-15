// AboutUs.jsx
import React from "react";
import tutorialsImg from "../../assets/images/tutorials.png";
import problemSolvingImg from "../../assets/images/problem-solving.png";
import examTipsImg from "../../assets/images/exam-tips.png";
import liveQnAImg from "../../assets/images/live-qna.png"; // Add an image for Live Q&A
import "./AboutUs.css";

const AboutUs = () => (
  <section id="about" className="section-about">
    <div className="container">
      <h2 className="section-common-heading">Welcome to Trident Classes!</h2>
      <p className="section-common-subheading">
        Your place for all things math. Making math understandable and fun for
        school and college students.
      </p>
    </div>

    <div className="container grid grid-four--cols">
      {" "}
      {/* Change to grid-four--cols */}
      {[
        {
          src: tutorialsImg,
          title: "Clear Math Tutorials",
          text: "We simplify math concepts, from basics to advanced topics.",
        },
        {
          src: problemSolvingImg,
          title: "Engaging Problem Solving",
          text: "Math problems become puzzles to solve.",
        },
        {
          src: examTipsImg,
          title: "Exam Tips",
          text: "We share smart study tips to excel in tests and exams.",
        },
        {
          src: liveQnAImg,
          title: "Live Q&A",
          text: "Ask your math questions during our live sessions.",
        },
      ].map((item, index) => (
        <div
          className="about-div"
          data-aos="fade-up"
          data-aos-delay={index * 300}
          key={index}
        >
          <div className="icon">
            <img src={item.src} alt={`Trident Classes ${item.title}`} />
          </div>
          <h3 className="section-common--title">{item.title}</h3>
          <p>{item.text}</p>
        </div>
      ))}
    </div>
  </section>
);

export default AboutUs;
