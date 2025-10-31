import React, { useState, useEffect } from 'react';
import './Hero.css';

interface Slide {
  id: number;
  title: string;
  subtitle: string;
  image: string;
}

const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides: Slide[] = [
    {
      id: 1,
      title: 'Welcome to the Stadium',
      subtitle: 'Experience the Thrill of the Steward Family Game',
      image: `${import.meta.env.BASE_URL}images/image1.jpg`
    },
    {
      id: 2,
      title: 'Welcome to the Stadium',
      subtitle: 'Experience the Thrill of the Steward Family Game',
      image: `${import.meta.env.BASE_URL}images/image2.jpg`
    },
    {
      id: 3,
      title: 'Welcome to the Stadium',
      subtitle: 'Experience the Thrill of the Steward Family Game',
      image: `${import.meta.env.BASE_URL}images/image3.jpg`
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section className="hero">
      <div className="hero-slider">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`hero-slide ${index === currentSlide ? 'active' : ''}`}
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="hero-overlay"></div>
            <div className="hero-content">
              <h1 className="hero-title">{slide.title}</h1>
              <p className="hero-subtitle">{slide.subtitle}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="hero-indicators">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`indicator ${index === currentSlide ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;

