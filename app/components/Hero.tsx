'use client';

import localFont from 'next/font/local';
import Image from 'next/image';
import VerticalSeparator from './VerticalSeparator';
import { Calendar22 } from './DatePicker';
import { Calendar23 } from './DatePicker';
import { FlipWordsDemo } from './FlipWords';


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
    <div className="relative w-full min-h-screen overflow-hidden bg-[#FFFFFF]">
      <div className="w-full mx-auto px-4 sm:px-6 md:px-10 lg:px-16">
        {/* Hero Box */}
        <div className="bg-[#F3F3F3] -ml-4 w-full md:h-[645px] h-[600px] rounded-3xl flex relative overflow-hidden">

            {/* Desktop Version */}
            <div className="hidden sm:flex flex-col justify-start w-full sm:w-1/2 px-6 pt-16 gap-6 z-10 bg-[#F3F3F3] text-left">
              <h1 className={`${kugile.className} text-[48px] md:text-[64px] lg:text-[80px] font-normal leading-tight text-[#3C3C3C]`}>
                Experience <br /> Luxury
              </h1>

              <FlipWordsDemo />

              <div className="hidden md:flex gap-4">
                <button className={`${aderoTrial.className} bg-[#3C3C3C] text-[#F3F3F3] px-4 py-2 rounded-3xl hover:scale-105 transition`}>
                  Reserve Now
                </button>
                <button className={`${aderoTrial.className} bg-[#F3F3F3] text-[#3C3C3C] border border-[#3C3C3C] px-4 py-2 rounded-3xl hover:scale-105 transition`}>
                  Rooms
                </button>
              </div>
            </div>

            {/* Mobile Version */}
            <div className="sm:hidden absolute top-[80px] left-1/2 transform -translate-x-1/2 z-20 text-left px-4 w-full">
              <h1 className={`${kugile.className} text-[48px] font-normal leading-tight text-[#3C3C3C] drop-shadow-md`}>
                Experience <br /> Luxury
              </h1>
              <FlipWordsDemo />
              <div className="mt-4 flex justify-center gap-4">
              </div>
            </div>


                      
          {/*Image */}
          <div className="w-full sm:w-1/2 relative h-full">
            <Image
              src="/Home.jpg"
              alt="Background"
              fill
              className="object-cover"
              priority
            />

            <div
            className="absolute left-0 top-0 h-full w-80 z-10 hidden sm:block"
            style={{
              background: 'linear-gradient(270deg, rgba(243, 243, 243, 0) 0%, #F3F3F3 100%)',
            }}
          />

          {/*For mobile */}
          <div
            className="absolute left-0 top-0 h-full w-full sm:hidden z-10"
            style={{
              background: 'linear-gradient(180deg, #F3F3F3 0%, rgba(243,243,243,1) 20%, rgba(243,243,243,0) 100%)',
            }}
          />

            </div>
          </div>

          <div className="absolute left-1/2 transform -translate-x-1/2 bottom-90 sm:bottom-4 w-[80%] max-w-[1300px] h-auto border border-white/100 rounded-2xl backdrop-blur-[10px] bg-[#0000000D]/70 flex flex-col sm:flex-row justify-between items-center px-4 py-4 gap-4 z-30 shadow-[0px_4px_11.6px_0px_#00000026]">    
               <div className={`${aderoTrial.className} hidden md:flex justify-center items-center w-[222px] h-[28px] whitespace-nowrap uppercase text-[#3C3C3C] pl-[50px] text-[20px] font-bold tracking-widest `}>
                  Pratik Lodge
                </div>

                <VerticalSeparator/>

              <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-6 text-[#3C3C3C]">
                <div className="flex items-center gap-8 text-[#3C3C3C]">
                      <svg 
                          width="25" 
                          height="29" 
                          viewBox="0 0 25 29" 
                          fill="none" 
                          xmlns="http://www.w3.org/2000/svg"
                          className="relative -top-[24px] left-[24px]">
                        <path d="M6.5 9.11841H18.4062M5.6875 1.97559V4.11869M19.0625 1.97559V4.11843M23 7.11843L23 23.9756C23 25.6324 21.6569 26.9756 20 26.9756H5C3.34315 26.9756 2 25.6324 2 23.9756V7.11843C2 5.46158 3.34315 4.11843 5 4.11843H20C21.6569 4.11843 23 5.46157 23 7.11843Z" 
                              stroke="#3C3C3C" 
                              strokeWidth="3" 
                              strokeLinecap="round" 
                              strokeLinejoin="round"/>
                      </svg>

                      <Calendar22 />      
                </div>

                <div className="flex items-center gap-8 text-[#3C3C3C]">
                      <svg className="relative -top-[24px] left-[24px]" width="25" height="29" viewBox="0 0 25 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.5 9.11841H18.4062M5.6875 1.97559V4.11869M19.0625 1.97559V4.11843M23 7.11843L23 23.9756C23 25.6324 21.6569 26.9756 20 26.9756H5C3.34315 26.9756 2 25.6324 2 23.9756V7.11843C2 5.46158 3.34315 4.11843 5 4.11843H20C21.6569 4.11843 23 5.46157 23 7.11843Z" stroke="#3C3C3C" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <Calendar23/>
                </div>
              </div>
                
                <VerticalSeparator/>
                <button
                  className={`${aderoTrial.className} flex items-center mr-2 md:mr-9 gap-2 px-5 py-4 bg-[#3C3C3C] text-[#F3F3F3] md:bg-[#F3F3F3] md:text-[#3C3C3C] hover:scale-105 transition-all delay-150 duration-300 ease-in-out text-sm font-semibold rounded-[15px] border border-[#FFFFFF4D] shadow-md hover:shadow-lg cursor-pointer`}
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
