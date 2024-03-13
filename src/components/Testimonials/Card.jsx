// Card.jsx
import React from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import "./Card.css";

const Card = (props) => {
  let review = props.review;

  return (
    <div className="card-container">
      <div className="card-image-container">
        <img className="card-image" src={review.image} alt={review.name} />
        <div className="card-overlay"></div>
      </div>

      <div className="card-text-container">
        <div className="card-header">
          <p className="card-name">{review.name}</p>
          <p className="card-job">{review.grade}</p>
        </div>

        <div className="card-quote">
          <FaQuoteLeft />
        </div>

        <div className="card-review">{review.text}</div>

        <div className="card-quote">
          <FaQuoteRight />
        </div>
      </div>
    </div>
  );
};

export default Card;
