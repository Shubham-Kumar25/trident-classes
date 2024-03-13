// Testimonials.jsx
import React, { useState } from "react";
import Card from "./Card";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import reviews from "./Data";
import "./Testimonials.css";

const Testimonials = () => {
  const [index, setIndex] = useState(0);

  const leftShiftHandler = () => {
    if (reviews && reviews.length > 1) {
      setIndex(
        (prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length
      );
    }
  };

  const rightShiftHandler = () => {
    if (reviews && reviews.length > 1) {
      setIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    }
  };

  const surpriseHandler = () => {
    if (reviews && reviews.length > 0) {
      const randomIndex = Math.floor(Math.random() * reviews.length);
      setIndex(randomIndex);
    }
  };

  if (!reviews || reviews.length === 0) {
    return <div className="testimonials-error">No testimonials available.</div>;
  }

  return (
    <div className="testimonials-container section-testimonial">
      <div className="container">
        <h2 className="section-common-heading">Student Testimonials</h2>
        <p className="section-common-subheading">
          Hear what our students have to say about their experiences with
          Trident Classes.
        </p>

        <div className="testimonials-card" data-aos="zoom-in-up">
          <Card review={reviews[index]} />
        </div>

        <div className="testimonials-navigation">
          <button
            onClick={leftShiftHandler}
            className="testimonial-arrow testimonial-left"
          >
            <FiChevronLeft />
          </button>
          <button
            onClick={rightShiftHandler}
            className="testimonial-arrow testimonial-right"
          >
            <FiChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
