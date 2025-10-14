import React, { useState, useEffect } from 'react';
import './Hero.css';

interface Slide {
  id: number;
  title: string;
  subtitle: string;
  buttonText: string;
  buttonLink: string;
}

const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides: Slide[] = [
    {
      id: 1,
      title: 'Touchdown Treasury',
      subtitle: 'Your Ultimate Football Memorabilia Collection',
      buttonText: 'Shop Now',
      buttonLink: '#products'
    },
    {
      id: 2,
      title: 'New Arrivals',
      subtitle: 'Exclusive Limited Edition Items',
      buttonText: 'Explore',
      buttonLink: '#new'
    },
    {
      id: 3,
      title: 'Premium Merch',
      subtitle: 'Show Your Team Spirit',
      buttonText: 'View Collection',
      buttonLink: '#merch'
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
          >
            <div className="hero-content">
              <h1 className="hero-title">{slide.title}</h1>
              <p className="hero-subtitle">{slide.subtitle}</p>
              <a href={slide.buttonLink} className="hero-button">
                {slide.buttonText}
              </a>
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

