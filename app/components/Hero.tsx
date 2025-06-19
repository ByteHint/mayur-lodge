'use client';

import localFont from 'next/font/local';
import Image from 'next/image';
import { Poppins } from 'next/font/google';
import VerticalSeparator from './VerticalSeparator';
import { Calendar22 } from './DatePicker';
import { Calendar23 } from './DatePicker';


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

const poppins = Poppins({ weight: '400', subsets: ['latin'] });

export default function Hero() {
  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-[#FFFFFF]">
      <div className="w-full mx-auto px-4 sm:px-6 md:px-10 lg:px-16">
        {/* Hero Box */}
        <div className="bg-[#F3F3F3] -ml-4 w-full h-[645px] rounded-3xl flex relative overflow-hidden">
          
          {/* Left Side */}
          <div className="w-1/2 flex flex-col justify-start pl-10 pt-16 gap-6 z-10 bg-[#F3F3F3]">
            <h1 className={`${kugile.className} text-[36px] sm:text-[48px] md:text-[64px] lg:text-[80px] font-normal leading-tight text-left text-[#3C3C3C]`}>
              Experience <br /> Luxury
            </h1>
            <p className={`${poppins.className} text-[#3C3C3C] text-[22px] font-normal leading-[100%]`}>
              Affordable - Accessible - Comfortable.
            </p>
            <div className="flex gap-x-4">
              <button className={`${aderoTrial.className} bg-[#3C3C3C] text-white px-4 py-2 rounded-3xl hover:bg-[#3C3C3C] transition border border-[#3C3C3CCC] uppercase`}>
                reserve now
              </button>
              <button className={`${aderoTrial.className} text-black px-4 py-2 rounded-3xl hover:bg-[#3C3C3C] transition border border-[#3C3C3CCC] uppercase`}>
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
            <div
              className="absolute left-0 top-0 h-full w-80 z-10"
              style={{
                background: 'linear-gradient(270deg, rgba(243, 243, 243, 0) 0%, #F3F3F3 100%)',
              }}
            />
          </div>
        </div>

    <div className="absolute left-1/2 transform -translate-x-1/2 bottom-8 w-[90%] max-w-[1300px] h-[138px] 
      border border-white/40 rounded-[20px] 
      backdrop-blur-[10px] bg-[#0000000D]/70 
      flex justify-between items-center px-6 py-3 z-30 -ml-4
      shadow-[0px_4px_11.6px_0px_#00000026]">
        
      <div className={`${aderoTrial.className} w-[222px] h-[28px] whitespace-nowrap uppercase text-[#3C3C3C] pl-[120px] text-[20px] font-bold tracking-widest flex justify-center items-center`}>
        Mayur Lodge
      </div>

      <VerticalSeparator/>
    
      <div className="flex items-center gap-8 text-[#3C3C3C]">
            <svg 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                strokeWidth="1.5" 
                stroke="currentColor" 
                className="size-6 mt-9">

              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
            </svg>

            <Calendar22 />
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              strokeWidth="1.5" 
              stroke="currentColor" 
              className="size-6 mt-9">

              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
            </svg>
            <Calendar23/>

      </div>
      
      <VerticalSeparator/>
      <button
          className={`${aderoTrial.className} flex items-center gap-2 px-4 py-2 bg-white text-[#3C3C3C] text-sm font-semibold rounded-2xl border border-[#FFFFFF4D] shadow-md hover:shadow-lg transition`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
          FIND ROOMS
        </button>

    </div>
    </div>

    </div>
  );
}
