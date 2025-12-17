import React, { useEffect, useRef, useState } from "react";
import "../style/carousel.css";
import { IonIcon } from '@ionic/react';
import { arrowBackCircleOutline } from 'ionicons/icons';
import { arrowForwardCircleOutline } from 'ionicons/icons';

  function Carousel({ 
    slides,
    autoPlay = true,
    interval = 3000, 
  }) {

  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef(null);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  //Navigation
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

  //Autoplay
  useEffect(() => {
    if (!autoPlay) return;

    intervalRef.current = setInterval(next, interval);

    return () => clearInterval(intervalRef.current);
  }, [currentIndex, autoPlay, interval]);

  const resetAutoplay = () => {
    if (!autoPlay) return;
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(next, interval);
  };

  //Swipe
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const distance = touchStartX.current - touchEndX.current;

    if (distance > 50) {
      next();
      resetAutoplay();
    }

    if (distance < -50) {
      prev();
      resetAutoplay();
    }
  };
  return (
    <div 
      className="carousel"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}  
    >
      <IonIcon className="back" icon={arrowBackCircleOutline} onClick={() => { prev(); resetAutoplay(); }}></IonIcon>

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

      <IonIcon className="forward" icon={arrowForwardCircleOutline} onClick={() => { next(); resetAutoplay(); }}></IonIcon>
    </div>
  );
}

export default Carousel;
