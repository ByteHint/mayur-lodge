'use client';

import localFont from 'next/font/local';

import { Poppins } from 'next/font/google';

const poppins = Poppins({ weight: '400', subsets: ['latin'] });


const kugile = localFont({
  src: '../fonts/Kugile_Demo.ttf',
  variable: '--font-kugile',
  display: 'swap',
});

const aderoTrial = localFont({
  src: '../fonts/AderotrialRegular-ZVreq.otf',
  variable: '--font-adero-trial',
  display: 'swap',
});

export default function Hero() {
  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-[#FFFFFF] pt-8">
      {/* Overlay Content */}
      <div className="z-10 flex flex-col justify-start px-4 sm:px-8 lg:px-16">
        {/* Hero Box */}
        <div className="bg-[#F3F3F3] w-full max-w-[1366px] h-[645px] rounded-xl pl-10 py-20 mt-2">
          <h1 className={`${kugile.className} text-[36px] sm:text-[48px] md:text-[64px] lg:text-[80px] font-normal leading-tight text-left text-[#3C3C3C]`}>
            Experience <br />
            Luxury
          </h1>
          <h3>
            <p className={`${poppins.className} text-[#3C3C3C] text-[22px] font-normal leading-[100%] tracking-[0em]`}>
              Affordable - Accessible - Comfortable.
            </p>
          </h3>
          <div className="flex gap-x-4">
            <button className={`${aderoTrial.className} bg-[#3C3C3C] text-white px-4 py-2 rounded-3xl hover:bg-gray-100 transition border border-[#3C3C3CCC] mt-5 uppercase`}>
              reserve now
            </button>
            <button className={`${aderoTrial.className} text-black px-4 py-2 rounded-3xl hover:bg-gray-100 transition border border-[#3C3C3CCC] mt-5 uppercase`}>
              Rooms
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
