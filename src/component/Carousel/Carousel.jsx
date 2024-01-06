// Carouselpage.js
import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import exampleImage1 from "../../assets/slide-image-1920-d.jpg";
import exampleImage2 from "../../assets/slide-image-1920-f.jpg";
import exampleImage3 from "../../assets/slide-image-1920-h.jpg";
import "./corosel.page.css"; // Import your custom CSS file

function Carouselpage() {
  const [index, setIndex] = useState(0);
  const [showArrows, setShowArrows] = useState(false);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div
      className="carousel-container"
      onMouseEnter={() => setShowArrows(true)}
      onMouseLeave={() => setShowArrows(false)}
    >
      <Carousel
        nextIcon={showArrows && <span className="custom-arrow">❯</span>}
        prevIcon={showArrows && <span className="custom-arrow">❮</span>}
        indicators={false}
        activeIndex={index}
        onSelect={handleSelect}
      >
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={exampleImage1}
            alt="First slide"
          />
          <Carousel.Caption>
            <div className="caption-content">
              <div className="line"></div>
              <h4>We are getting married</h4>
              <div className="line"></div>
              <div className="heart-container">
                <span className="heart">❤️</span>
                <span className="heart" style={{ color: 'white' }}>❤️</span>
              </div>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={exampleImage2}
            alt="Second slide"
          />
          <Carousel.Caption>
            <div className="caption-content">
              <div className="line"></div>
              <h4>We are getting married</h4>
              <div className="line"></div>
              <div className="heart-container">
                <span className="heart">❤️</span>
                <span className="heart" style={{ color: 'white' }}>❤️</span>
              </div>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={exampleImage3}
            alt="Third slide"
          />
          <Carousel.Caption>
            <div className="caption-content">
              <div className="line"></div>
              <h4>We are getting married</h4>
              <div className="line"></div>
              <div className="heart-container">
                <span className="heart">❤️</span>
                <span className="heart" style={{ color: 'white' }}>❤️</span>
              </div>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Carouselpage;
