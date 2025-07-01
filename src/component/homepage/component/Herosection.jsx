"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const HeroSection = () => {
  const slides = [
    {
      image: 'https://www.houseofindya.com/img/new-main-banner.jpg',
      title: 'NEW ARRIVALS',
      subtitle: 'Shop the latest trends in ethnic wear',
      cta: 'SHOP NOW',
      link: '/new-arrivals'
    },
    {
      image: 'https://www.houseofindya.com/img/summer-sale-banner.jpg',
      title: 'SUMMER SALE',
      subtitle: 'Up to 50% off on selected items',
      cta: 'SHOP SALE',
      link: '/sale'
    },
    {
      image: 'https://www.houseofindya.com/img/ethnic-wear-banner.jpg',
      title: 'ETHNIC WEAR',
      subtitle: 'Traditional styles with modern twist',
      cta: 'EXPLORE',
      link: '/ethnic-wear'
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section className="relative h-64 md:h-96 overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div 
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
        >
          <img 
            src={slide.image} 
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
            <div className="text-center px-4">
              <h1 className="text-2xl md:text-4xl font-bold mb-2 text-white">{slide.title}</h1>
              <p className="text-sm md:text-base text-white mb-4">{slide.subtitle}</p>
              <Link 
                href={slide.link}
                className="inline-block bg-white text-red-600 px-6 py-2 rounded-md font-medium hover:bg-gray-100 transition-colors"
              >
                {slide.cta}
              </Link>
            </div>
          </div>
        </div>
      ))}

      {/* Slide Indicators */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${index === currentSlide ? 'bg-white' : 'bg-gray-400'}`}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;