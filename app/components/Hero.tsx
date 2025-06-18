'use client';

import { useEffect, useState } from 'react';
import localFont from 'next/font/local';
import BookNow from './BookNow';
import Image from 'next/image';

const kugile = localFont({
  src: '../fonts/Kugile_Demo.ttf',
  variable: '--font-kugile',
  display: 'swap',
});

const images = ['/Home.jpg', '/Room.jpg', '/MIDC.png'];

export default function Hero() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Slideshow */}
      {images.map((img, index) => (
        <Image
          key={index}
          src={img}
          alt={`Slide ${index}`}
          fill
          priority={index === 0}
          className={`absolute object-cover transition-opacity duration-1000 ease-in-out ${
            index === currentImage ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}

      {/* Overlay Content */}
      <div className="absolute inset-0 bg-black/60 z-10 flex flex-col justify-center px-6 sm:px-12 lg:px-20 gap-8">
        {/* Heading on Left */}
        <div>
          <h1
            className={`${kugile.className} text-[36px] sm:text-[48px] md:text-[64px] lg:text-[80px] font-bold leading-tight text-left text-white`}
          >
            Affordable.<br />
            Accessible.<br />
            Comfortable.
          </h1>
        </div>

        {/* BookNow centered below */}
        <div className="max-w-4xl w-full mx-auto">
          <BookNow />
        </div>
      </div>
    </div>
  );
}
