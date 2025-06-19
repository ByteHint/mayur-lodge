'use client';

import localFont from 'next/font/local';
import Image from 'next/image';
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
      <div className="z-10 flex flex-col justify-start px-4 sm:px-8 lg:px-16">
        <div className="bg-[#F3F3F3] w-full h-[645px] rounded-3xl mt-2 flex relative overflow-hidden">
          {/* Left Side Content */}
          <div className="w-1/2 flex flex-col justify-center pl-10 py-20 gap-4 z-10 bg-[#F3F3F3]">
            <h1
              className={`${kugile.className} text-[36px] sm:text-[48px] md:text-[64px] lg:text-[80px] font-normal leading-tight text-left text-[#3C3C3C]`}
            >
              Experience <br /> Luxury
            </h1>
            <p
              className={`${poppins.className} text-[#3C3C3C] text-[22px] font-normal leading-[100%]`}
            >
              Affordable - Accessible - Comfortable.
            </p>

            <div className="flex gap-x-4">
              <button
                className={`${aderoTrial.className} bg-[#3C3C3C] text-white px-4 py-2 rounded-3xl hover:bg-gray-100 transition border border-[#3C3C3CCC] mt-5 uppercase`}
              >
                reserve now
              </button>
              <button
                className={`${aderoTrial.className} text-black px-4 py-2 rounded-3xl hover:bg-gray-100 transition border border-[#3C3C3CCC] mt-5 uppercase`}
              >
                Rooms
              </button>
            </div>
          </div>

          {/* Right Side Image */}
          <div className="w-1/2 relative h-full">
            <Image
              src="/Home.jpg"
              alt="Background"
              fill
              className="object-cover"
              priority
            />

            {/* Smooth White-to-Image Gradient Overlay */}
            <div
              className="absolute left-0 top-0 h-full w-80 z-10"
              style={{
                background:
                  'linear-gradient(270deg, rgba(243, 243, 243, 0) 0%, #F3F3F3 100%)',
              }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}