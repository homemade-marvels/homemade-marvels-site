'use client';

import React, { useState, useEffect } from 'react';

interface HeroCarouselProps {
  images: string[];
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
  accentColor: string;
}

export default function HeroCarousel({ 
  images, 
  title, 
  subtitle, 
  ctaText, 
  ctaLink,
  accentColor 
}: HeroCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section id="accueil" className="relative h-[600px] overflow-hidden">
      {/* Image Carousel */}
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={image}
            alt={`Hero ${index + 1}`}
            className="w-full h-full object-cover"
          />
        </div>
      ))}

      {/* Dark Overlay for Text Readability */}
      <div className="absolute inset-0 bg-black bg-opacity-40" />

      {/* Content Overlay */}
      <div className="relative z-10 h-full flex items-center justify-center px-4">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 drop-shadow-lg">
            {title}
          </h1>
          <p className="text-xl md:text-2xl mb-8 drop-shadow-md">
            {subtitle}
          </p>
          <a
            href={ctaLink}
            className="inline-block px-8 py-3 rounded-md text-white font-medium text-lg hover:opacity-90 transition-opacity shadow-lg"
            style={{ backgroundColor: accentColor }}
          >
            {ctaText}
          </a>
        </div>
      </div>

      {/* Carousel Indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2.5 h-2.5 rounded-full transition-all ${
              index === currentIndex 
                ? 'bg-white w-8' 
                : 'bg-white bg-opacity-50 hover:bg-opacity-75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
