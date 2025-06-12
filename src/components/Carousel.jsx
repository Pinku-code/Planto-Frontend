import React, { useState, useEffect, useRef } from "react";

const Carousel = ({ images }) => {
  const [current, setCurrent] = useState(1); // Start at 1 because of clone
  const [isTransitioning, setIsTransitioning] = useState(true);
  const slideRef = useRef(null);
  const timeoutRef = useRef(null);
  const length = images.length;

  const totalSlides = length + 2; // Includes cloned first and last

  // Auto Slide
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrent((prev) => prev + 1);
    setIsTransitioning(true);
  };

  const prevSlide = () => {
    setCurrent((prev) => prev - 1);
    setIsTransitioning(true);
  };

  // Handle loop back to real slide after clone
  useEffect(() => {
    if (current === totalSlides - 1) {
      // If at cloned first (last image), reset to real first
      timeoutRef.current = setTimeout(() => {
        setIsTransitioning(false);
        setCurrent(1);
      }, 700);
    }
    if (current === 0) {
      // If at cloned last (first image), reset to real last
      timeoutRef.current = setTimeout(() => {
        setIsTransitioning(false);
        setCurrent(length);
      }, 700);
    }
    return () => clearTimeout(timeoutRef.current);
  }, [current, length]);

  // Touch Swipe
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const distance = touchStartX.current - touchEndX.current;
    if (distance > 50) nextSlide();
    else if (distance < -50) prevSlide();

    touchStartX.current = null;
    touchEndX.current = null;
  };

  // Render slides: [lastClone, ...images, firstClone]
  const slides = [
    images[length - 1], // Clone of last
    ...images,
    images[0], // Clone of first
  ];

  return (
    <div
      className="relative mt-25 w-full max-w-[95%] mx-auto shadow-2xl h-[380px] sm:h-[400px] md:h-[500px] overflow-hidden rounded-2xl"
      data-aos="fade-up"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Slider */}
      <div
        ref={slideRef}
        className={`flex h-full ${
          isTransitioning ? "transition-transform duration-700 ease-in-out" : ""
        }`}
        style={{ transform: `translateX(-${current * 100}%)` }}
        onTransitionEnd={() => setIsTransitioning(true)}
      >
        {slides.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Slide ${index}`}
            className="w-full flex-shrink-0 object-cover h-[380px] sm:h-[400px] md:h-[500px]"
            draggable="false"
          />
        ))}
      </div>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setCurrent(index + 1); // +1 to skip the clone
              setIsTransitioning(true);
            }}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              current === index + 1 ? "bg-green-600 scale-105" : "bg-white/60"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
