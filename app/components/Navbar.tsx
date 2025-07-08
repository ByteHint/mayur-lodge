'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";
import { useRouter, usePathname } from 'next/navigation';

import localFont from 'next/font/local';

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
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const goToSection = (id: string) => {
    if (pathname === '/') {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        setIsMenuOpen(false); // close menu on mobile
      }
    } else {
      router.push(`/?scrollTo=${id}`);
    }
  };

  return (
    <div className="sticky top-0 z-50 bg-[#FFFFFF] text-[#3C3C3C] w-full mb-4 shadow-sm">
      <div className="relative flex items-center justify-between w-full mx-auto px-4 py-2 sm:px-6 md:px-10 lg:px-16 h-[72px]">
        {/* Logo */}
        <div className={`${kugile.className} text-2xl sm:text-4xl mt-2 md:mt-0 font-normal tracking-wider whitespace-nowrap`}>
          <Link href="/">Pratik Lodge</Link>
        </div>

        {/* Desktop Nav Links */}
        <div className={`${aderoTrial.className} hidden md:flex justify-center flex-1 gap-10 text-sm font-semibold`}>
          <button onClick={() => goToSection('about')} className="hover:text-yellow-500 hover:scale-105 transition-all delay-150 duration-300 ease-in-out cursor-pointer uppercase">
            About Us
          </button>
          <button onClick={() => goToSection('facilities')} className="hover:text-yellow-500 hover:scale-105 transition-all delay-150 duration-300 ease-in-out cursor-pointer uppercase">
            Facilities & Services
          </button>
          <button onClick={() => goToSection('gallery')} className="hover:text-yellow-500 hover:scale-105 transition-all delay-150 duration-300 ease-in-out cursor-pointer uppercase">
            Gallery
          </button>
          <button onClick={() => goToSection('location')} className="hover:text-yellow-500 hover:scale-105 transition-all delay-150 duration-300 ease-in-out cursor-pointer uppercase">
            Location
          </button>
        </div>

        {/* Right Actions */}
        <div className="hidden md:flex items-center gap-5">
          <Link href="/contact">
            <button className={`${aderoTrial.className} bg-white text-[#3C3C3C] text-sm border border-[#3C3C3C] px-3 py-2 rounded-3xl hover:scale-105 transition cursor-pointer`}>
              Reach Out
            </button>
          </Link>

          <Link href="/profile">
            <div className="border border-gray-400 rounded-full p-[6px] hover:scale-105 transition-all delay-150 duration-300 ease-in-out">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-[16px] h-[16px] text-black">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
              </svg>
            </div>
          </Link>

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

        {/* Hamburger for Mobile */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </>
              ) : (
                <>
                  <line x1="4" y1="6" x2="20" y2="6" />
                  <line x1="4" y1="12" x2="20" y2="12" />
                  <line x1="4" y1="18" x2="20" y2="18" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white px-6 py-4 flex flex-col gap-4 text-sm font-semibold border-t">
          <button onClick={() => goToSection('about')} className="uppercase">About Us</button>
          <button onClick={() => goToSection('facilities')} className="uppercase">Facilities & Services</button>
          <button onClick={() => goToSection('gallery')} className="uppercase">Gallery</button>
          <button onClick={() => goToSection('location')} className="uppercase">Location</button>

          <Link href="/contact">
            <button className="px-6 py-2 text-center uppercase border border-[#3C3C3C] rounded-3xl mx-auto block">
              Reach Out
            </button>
          </Link>

          <Link href="/profile" className="w-full">
            <button className="w-full text-center uppercase">Profile</button>
          </Link>

          <SignedOut>
            <SignInButton>
              <button className="items-center">Sign In</button>
            </SignInButton>
            <SignUpButton>
              <button className="items-center">Sign Up</button>
            </SignUpButton>
          </SignedOut>
        </div>
      )}
    </div>
  );
}
