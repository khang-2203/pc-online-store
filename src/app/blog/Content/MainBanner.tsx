"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const PcParts = () => {
  const images = [
    "/banner-1.webp",
    "/banner-2.webp",
    "/banner-3.webp",
    "/banner-4.webp",
    "/banner-5.webp",
    "/banner-6.webp",
    "/banner-7.webp",
    "/banner-8.webp",
    "/banner-9.webp",
    "/banner-10.webp",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="relative w-full overflow-hidden">
      <div className="relative w-full h-[180px] sm:h-[220px] md:h-[280px] lg:h-[350px]">
        <Image
          src={images[currentImageIndex]}
          alt={`PC part ${currentImageIndex + 1}`}
          fill
          className="object-cover transition-opacity duration-700 ease-in-out"
          priority
        />
      </div>
    </section>
  );
};

export default PcParts;
