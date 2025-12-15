import React, { useState } from "react";
import "../style/carousel.css";
import { IonIcon } from '@ionic/react';
import { arrowBackCircleOutline } from 'ionicons/icons';
import { arrowForwardCircleOutline } from 'ionicons/icons';

function Carousel({ slides }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) =>
      prev === slides.length - 1 ? 0 : prev + 1
    );
  };

  const prev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1
    );
  };

  return (
    <div className="carousel">
      <IonIcon className="back" icon={arrowBackCircleOutline} onClick={prev}></IonIcon>

      <div className="carousel-window">
        <div
          className="carousel-track"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <img key={index} src={slide} alt="" />
          ))}
        </div>
      </div>

      <IonIcon className="forward" icon={arrowForwardCircleOutline} onClick={next}></IonIcon>
    </div>
  );
}

export default Carousel;
