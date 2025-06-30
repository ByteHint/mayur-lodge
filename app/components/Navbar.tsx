'use client';

import Link from 'next/link';
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";

import localFont from 'next/font/local';
import Hamburger from './Hamburger';

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

export default function Navbar() {

  const scrollToSection = (id: string) => {
    const elem = document.getElementById(id);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="sticky top-0 z-50 bg-white text-[#3C3C3C] md:w-full mb-4">
      <div className="flex items-center justify-between w-full mx-auto px-4 py-2 sm:px-6 md:px-10 lg:px-16 h-[72px]">

        <Hamburger />

        {/* Logo */}
        <div className={`${kugile.className} text-2xl sm:text-4xl mt-2 md:mt-0 font-normal tracking-wider text-center sm:text-start pr-30 whitespace-nowrap`}>
          <Link href="/">Pratik Lodge</Link>
        </div>

        {/* Nav Links */}
        <div className={`hidden pr-4 md:flex gap-10 text-sm font-semibold ${aderoTrial.className}`}>
          <button onClick={() => scrollToSection('about')} className="hover:text-yellow-500 hover:scale-105 transition-all delay-150 duration-300 ease-in-out uppercase">
            About Us
          </button>

          <button onClick={() => scrollToSection('facilities')} className="hover:text-yellow-500 hover:scale-105 transition-all delay-150 duration-300 ease-in-out uppercase">
            Facilities & services
          </button>

          <button onClick={() => scrollToSection('gallery')} className="hover:text-yellow-500 hover:scale-105 transition-all delay-150 duration-300 ease-in-out uppercase">
            Gallery
          </button>

          <button onClick={() => scrollToSection('location')} className="hover:text-yellow-500 hover:scale-105 transition-all delay-150 duration-300 ease-in-out uppercase">
            location
          </button>
          
          <button onClick={() => scrollToSection('menu')} className="hover:text-yellow-500 hover:scale-105 transition-all delay-150 duration-300 ease-in-out uppercase">
            menu
          </button>
        </div>


        <button className={`${aderoTrial.className} bg-[#F3F3F3] text-[#3C3C3C] text-sm border border-[#3C3C3C] px-2 py-2 rounded-3xl hover:scale-105 transition`}>
          Reach Out
        </button>

        {/* Icons + Auth */}
        <div className="absolute right-[8px] top-[1px] h-[30px] mt-5 md:mt-0 flex items-center gap-[8px] md:gap-[10px] md:static md:h-[48px]">
  
          {/* User Icon */}
          <div className="border border-gray-400 rounded-full p-[6px] hover:scale-105 transition-all delay-150 duration-300 ease-in-out">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-[16px] h-[16px] text-black"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
              />
            </svg>
          </div>
        </div>

    <div className="hidden md:flex items-center gap-2">
      <SignedOut>
        <SignInButton>
          <button className="bg-white text-black px-4 py-2 rounded hover:bg-gray-100 hover:scale-105 transition-all delay-150 duration-300 ease-in-out text-sm border border-gray-300">
            Sign In
          </button>
        </SignInButton>
        <SignUpButton>
          <button className="bg-white text-black px-4 py-2 rounded hover:bg-gray-100 hover:scale-105 transition-all delay-150 duration-300 ease-in-out text-sm border border-gray-300">
            Sign Up
          </button>
        </SignUpButton>
      </SignedOut>

      <SignedIn>
        <UserButton afterSignOutUrl="/" />
      </SignedIn>
    </div>
      </div>
    </div>
  );
}