"use client";

import { useState, useEffect } from "react";

const PcParts = () => {
  const images = [
    "banner-1.webp",
    "banner-2.webp",
    "banner-3.webp",
    "banner-4.webp",
    "banner-5.webp",
    "banner-6.webp",
    "banner-7.webp",
    "banner-8.webp",
    "banner-9.webp",
    "banner-10.webp",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 50000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full flex justify-center items-center">
      <img
        src={images[currentImageIndex]}
        className="w-[700px] h-[350px] object-cover transition-opacity duration-700 ease-in-out"
        alt={`intro to PC part ${currentImageIndex + 1}`}
      />

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <span
            key={index}
            className={`text-5xl cursor-pointer transition-colors duration-300 ${
              currentImageIndex === index
                ? "text-gray-800"
                : "text-white opacity-50"
            }`}
            onClick={() => setCurrentImageIndex(index)}
          >
            -
          </span>
        ))}
      </div>
    </section>
  );
};

export default PcParts;
