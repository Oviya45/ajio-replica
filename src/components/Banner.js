import React, { useState } from 'react';
import './Banner.css';

const Banner = () => {
  const images = [
    'https://img.paisawapas.com/ovz3vew9pw/2022/06/03161046/ajio2-ep-deal-.jpg',
    'https://cdn.grabon.in/gograbon/blog/wp-content/uploads/2021/03/Ajio-Coupons-Deals-About.jpg',
    'https://static.toiimg.com/thumb/resizemode-4,width-1280,height-720,msid-108228390/108228390.jpg',
    'https://pbs.twimg.com/media/FHn9ngiXwAM9nk-.jpg',
    'https://i.pinimg.com/originals/75/0c/5a/750c5a15c9ea550e86f802f0f87a6603.jpg',
    'https://i.ytimg.com/vi/uJ90UJPgRvQ/maxresdefault.jpg'
    // Add your image URLs here
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="banner">
      <div className="banner-content">
        <button className="arrow left" onClick={handlePrev}>
          &#60;
        </button>
        <div
          className="banner-image"
          style={{
            backgroundImage: `url(${images[currentIndex]})`,
          }}
        ></div>
        <button className="arrow right" onClick={handleNext}>
          &#62;
        </button>
      </div>
    </div>
  );
};

export default Banner;
