'use client';

import localFont from 'next/font/local';
import BookNow from './BookNow';

const kugile = localFont({
  src: '../fonts/Kugile_Demo.ttf',
  variable: '--font-kugile',
  display: 'swap',
});

export default function Hero(){
    return (
        <div className="relative w-full h-screen overflow-hidden bg-[#FFFFFF]">
          {/* Overlay Content */}
          <div className="absolute inset-0 bg-black/60 z-10 flex flex-col justify-center px-6 sm:px-12 lg:px-20 gap-8">
            {/* Heading on Left */}
            <div className='bg-[#F3F3F3]'>
              <h1
                className={`${kugile.className} text-[36px] sm:text-[48px] md:text-[64px] lg:text-[80px] font-bold leading-tight text-left text-[#3C3C3C]`}
              >
                Experience <br />
                Luxury<br />
              </h1>
              <h3><p className='text-[#3C3C3C]'> Affordable - Accessible - Comfortable.</p></h3>
            </div>

            {/* BookNow centered below */}
            <div className="max-w-4xl w-full mx-auto">
              <BookNow />
            </div>
          </div>
        </div>
      );

}
  