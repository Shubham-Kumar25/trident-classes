// WhyUs.jsx
import React from "react";
import "./WhyUs.css";

const Feature = ({ number, title, description }) => (
  <div
    className="why-choose--div"
    data-aos="zoom-in-up"
    data-aos-delay={number * 100}
  >
    <p className="common-text--highlight">{number}</p>
    <h3 className="section-common--title">{title}</h3>
    <p>{description}</p>
  </div>
);

const WhyUs = () => {
  return (
    <section className="section-why--choose">
      <div className="container">
        <h2 className="section-common-heading">Why Choose Trident Classes?</h2>
        <p className="section-common-subheading">
          Making math understandable and fun for school and college students.
        </p>
      </div>

      <div className="container grid grid-two--cols">
        <div className="choose-left--div text-align--right">
          <Feature
            number={1}
            title="Clear Math Tutorials"
            description="We simplify math concepts, from basics to advanced topics."
          />

          <Feature
            number={2}
            title="Engaging Problem Solving"
            description="Math problems become puzzles to solve."
          />
        </div>

        <div className="choose-right--div text-align--left">
          <Feature
            number={3}
            title="Exam Tips"
            description="We share smart study tips to excel in tests and exams."
          />

          <Feature
            number={4}
            title="Live Q&A"
            description="Ask your math questions during our live sessions."
          />
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
