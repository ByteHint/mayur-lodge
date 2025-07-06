'use client';

import localFont from 'next/font/local';
import Image from 'next/image';
import { Poppins as PoppinsFont } from 'next/font/google';
import { AnimatedPinDemo } from '../components/location';

const poppins = PoppinsFont({
  weight: ['400'],
  subsets: ['latin'],
});

const kugile = localFont({
  src: '../fonts/Kugile_Demo.ttf',
  variable: '--font-kugile',
  display: 'swap',
});

export default function LocationSection() {
  return (
    <section
      id="location"
      className={`${kugile.className} bg-[#FFFFFF] text-[#3C3C3C] py-16 px-4 sm:px-6 md:px-12 lg:px-24`}
    >
      <h2 className="text-3xl sm:text-4xl md:text-5xl mb-10 text-start">
        Our Location
      </h2>

      {/* Flex container for image and pin */}
      <div className="flex flex-col lg:flex-row gap-10 items-start">
        {/* Location Image Block */}
        <div
          className="relative rounded-[20px] overflow-hidden shadow-xl w-fit hover:scale-105 transition-all delay-150 duration-300 ease-in-out"
          style={{ width: '671px', height: '718px', top: '-4px' }}
        >

          <Image
            src="/location_image.jpg"
            alt="Background"
            fill
            className="object-cover"
          />

          <div
            className="absolute left-0 top-0 h-full w-full z-10"
            style={{
              background:
                'linear-gradient(180deg, rgba(60, 60, 60, 0) 45.24%, #000000 100%)',
            }}
          />

          <h6
            className={`${poppins.className} absolute bottom-22 left-2 text-[#FFFFFF] text-[28px] px-4 py-2 z-20`}
          >
            Getting here
          </h6>

          <p
            className={`${poppins.className} absolute bottom-4 left-2 text-[#FFFFFFB2] text-[22px]  px-4 py-2 z-20`}
          >
            Pratik Lodge, Gate No. 613, MIDC Road, near Pratik Kata, Kuruli,
            Chakan, Pune 410 501
          </p>
        </div>
        
        <div
          className="relative rounded-[20px] overflow-hidden shadow-xl w-fit hover:scale-105 transition-all delay-150 duration-300 ease-in-out"
          style={{ width: '671px', height: '718px', top: '-4px', left:'40px' }}
        >

          <Image
            src="/location-pratik.png"
            alt="Background"
            fill
            className="object-cover"
            style={{ filter: 'blur(2px)' }}
          />

          <div
            className="absolute left-0 top-0 h-full w-full z-10"
            style={{
              background:
                'linear-gradient(180deg, rgba(60, 60, 60, 0) 45.5%, rgba(140, 140, 140, 0.7) 100%)',
            }}
          />

          {/* AnimatedPinDemo on the right */}
              <div className="flex-1">
                <AnimatedPinDemo />
              </div>
        </div>
        
      </div>
    </section>
  );
}
