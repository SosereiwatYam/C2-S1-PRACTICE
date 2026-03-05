import React, { useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

export const Carousel = ({ images }) => {
  if (!images || images.length === 0) {
    return null;
  }

  const [currentIndex, setCurrentIndex] = useState(0);

  function onPrevious() {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  }

  function onNext() {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  }

  const currentImage = images[currentIndex];

  return (
    <div className="carousel">
      <BsArrowLeftCircleFill className="arrow arrow-left" onClick={onPrevious} />

      <img src={currentImage.src} alt={currentImage.alt} className="slide" />

      <BsArrowRightCircleFill className="arrow arrow-right" onClick={onNext} />
    </div>
  );
};
