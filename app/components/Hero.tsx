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
        <div className="bg-[#F3F3F3] md:-ml-4 w-full h-[645px] rounded-3xl flex relative overflow-hidden">
          
          {/* Left Side */}
          <div className="md:w-1/2 flex flex-col justify-start pl-10 pt-16 gap-6 z-10 bg-[#F3F3F3]">
            <h1 className={`${kugile.className} text-[48px] sm:text-[48px] md:text-[64px] lg:text-[80px] font-normal leading-tight text-left text-[#3C3C3C]`}>
              Experience <br /> Luxury
            </h1>
            <p className={`${poppins.className} text-[#3C3C3C] text-[12px] md:text-[22px] font-normal leading-[100%] whitespace-nowrap`}>
              Affordable - Accessible - Comfortable.
            </p>
            <div className="hidden md:flex gap-x-4">
              <button className={`${aderoTrial.className} bg-[#3C3C3C] text-[#FFFFFF] px-4 py-2 rounded-3xl hover:scale-105 transition-all delay-150 duration-300 ease-in-out border border-[#3C3C3CCC] uppercase cursor-pointer`}>
                reserve now
              </button>
              <button className={`${aderoTrial.className} bg-[#FFFFFF] text-[#3C3C3C] px-4 py-2 rounded-3xl hover:scale-105 transition-all delay-150 duration-300 ease-in-out border border-[#3C3C3CCC] uppercase cursor-pointer`}>
                Rooms
              </button>
            </div>
          </div>
          
          {/* Right Side Image */}
          <div className="relative w-1/2 h-full sm:w-full sm:h-[300px]">
  <Image
    src="/Home.jpg"
    alt="Background"
    fill
    className="object-cover w-full"
    priority
  />
  
  {/* Gradient Overlay */}
  <div
    className={`
      absolute z-10
      w-80 h-full left-0 top-0 
      bg-[linear-gradient(270deg,rgba(243,243,243,0)_0%,#F3F3F3_100%)]
      sm:w-full sm:h-full sm:bg-[linear-gradient(180deg,rgba(243,243,243,0)_0%,#F3F3F3_100%)]
    `}
  />
          </div>
        </div>

    <div className="
  absolute 
  top-[280px] left-[50px] 
  w-[312px] h-[270px]
  rounded-[25px] 
  border-[2px] border-[#FFFFFF4D] 
  backdrop-blur-[10px] 
  bg-[#0000000D]/70 
  flex flex-col items-center justify-between 
  px-4 py-4 gap-4 z-30 
  shadow-[0px_4px_11.6px_0px_#00000026]

  sm:left-1/2 sm:transform sm:-translate-x-[50%] 
  sm:top-auto sm:bottom-4 
  sm:w-[95%] sm:max-w-[1300px] 
  sm:h-auto sm:flex-row sm:justify-between 
  sm:rounded-[20px] 
  sm:px-8 sm:py-6 sm:gap-8
">



        
      <div className={`${aderoTrial.className} hidden md:flex justify-center items-center uppercase text-[#3C3C3C] text-[20px] font-bold tracking-widest sm:pl-[50px]`}>
        Mayur Lodge
      </div>

      <VerticalSeparator/>
    
      <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 text-[#3C3C3C]">
            
            <div className="flex items-center gap-2">
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
            </div>

            <div className="flex items-center gap-2">
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
      </div>
      
      <VerticalSeparator/>
      <button
          className={`${aderoTrial.className} flex items-center gap-2 px-4 py-2 bg-[#3C3C3C] md:bg-white text-white md:text-[#3C3C3C] hover:scale-105 transition-all delay-150 duration-300 ease-in-outtext-sm font-semibold rounded-2xl border border-[#FFFFFF4D] shadow-md hover:shadow-lg cursor-pointer`}
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