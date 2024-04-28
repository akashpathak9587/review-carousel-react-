import React, { useState } from "react";
import data from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = () => {
  const [index, setIndex] = useState(0);
  const { name, job, img, text } = data[index];

  const nextReview = () => {
    if (index === data.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };

  const prevReview = () => {
    if (index === 0) {
      setIndex(data.length - 1);
    } else {
      setIndex(index - 1);
    }
  };

  const randomReview = () => {
    const randomNum = Math.floor(Math.random() * data.length);
    if (randomNum === index) {
      return randomReview();
    } else {
      setIndex(randomNum);
    }
  };

  return (
    <div className="review">
      <div className="img-container">
        <img src={img} alt={name} className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="button-container">
        <button className="prev-btn" onClick={prevReview}>
          <FaChevronLeft />
        </button>
        <button className="next-btn" onClick={nextReview}>
          <FaChevronRight />
        </button>
      </div>
      <button className="random-btn" onClick={randomReview}>
        suprise me
      </button>
    </div>
  );
};

export default Review;
