'use client';

import Link from 'next/link';
import { SignInButton, SignUpButton } from '@clerk/nextjs';
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
  return (
    <div className="sticky top-0 z-50 bg-white text-[#3C3C3C] w-full mb-4">
      <div className="max-w-[1366px] w-full mx-auto px-4 sm:px-6 md:px-10 lg:px-16 h-[72px] flex items-center justify-between">
        
        {/* Logo */}
        <div className={`${kugile.className} text-4xl font-normal tracking-widest`}>
          <Link href="/">Mayur Lodge</Link>
        </div>

        {/* Nav Links */}
        <div className={`hidden md:flex gap-10 text-sm font-semibold uppercase ${aderoTrial.className}`}>
          <Link href="/#about" className="hover:text-yellow-500 transition">About Us</Link>
          <Link href="/#facilities" className="hover:text-yellow-500 transition">Facilities</Link>
          <Link href="/#gallery" className="hover:text-yellow-500 transition">Gallery</Link>
          <Link href="/#location" className="hover:text-yellow-500 transition">Location</Link>
          <Link href="/#menu" className="hover:text-yellow-500 transition">Menu</Link>
        </div>

        {/* Icons + Auth */}
        <div className="flex items-center gap-3">
            {/* User Icon */}
            <div className="border border-gray-400 rounded-full p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-5 text-black"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                />
              </svg>
            </div>

            {/* Phone Icon */}
            <div className="border border-gray-400 rounded-full p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-5 text-black"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                />
              </svg>
            </div>

            {/* Book Icon */}
            <div className="border border-gray-400 rounded-full p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-5 text-black"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"
                />
              </svg>
            </div>
          </div>


        <div className="flex items-center gap-2">
          <SignInButton>
            <button className="bg-white text-black px-4 py-2 rounded hover:bg-gray-100 transition text-sm border border-gray-300">
              Sign In
            </button>
          </SignInButton>
          <SignUpButton>
              <button className="bg-white text-black px-4 py-2 rounded hover:bg-gray-100 transition text-sm border border-gray-300">
                Sign Up
              </button>
            </SignUpButton>
          </div>
        </div>
      </div>
  );
}
