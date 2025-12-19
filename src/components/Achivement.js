import React, { useState } from "react";
import { achievements, galleryImages } from "../components/AchivementDetail";

export default function Achievement() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  return (
    <div className="container my-5 achivements">
      <div className="row">
        <div className="col-12">
          {achievements.map((item, index) => (
            <div className="achievement-card p-4 mb-4" key={index}>
              <div className="d-flex align-items-start gap-3">
                <div className="achievement-icon">
                  {item.icon}
                </div>
                <div className="flex-grow-1">
                  <span className="badge bg-secondary mb-2">{item.category}</span>
                  <h5 className="fw-semibold mb-2">{item.title}</h5>
                  <p className="text-light mb-0">{item.event}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>


      <div className="mt-5">
        <div className="carousel-container position-relative">
          <div className="carousel-image-wrapper">
            <img
              src={galleryImages[currentIndex]}
              alt={`Achievement ${currentIndex + 1}`}
              className="carousel-image"
            />
          </div>
          
          <button 
            className="carousel-btn carousel-btn-prev"
            onClick={prevSlide}
            aria-label="Previous image"
          >
            ‹
          </button>
          <button 
            className="carousel-btn carousel-btn-next"
            onClick={nextSlide}
            aria-label="Next image"
          >
            ›
          </button>

          {/* Indicators */}
          <div className="carousel-indicators">
            {galleryImages.map((_, index) => (
              <button
                key={index}
                className={`indicator ${index === currentIndex ? 'active' : ''}`}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

