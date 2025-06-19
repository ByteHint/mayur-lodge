'use client';

import Link from 'next/link';
import { SignInButton, SignUpButton } from "@clerk/nextjs";
import localFont from 'next/font/local';

const aderoTrial = localFont({
  src: '../fonts/AderotrialRegular-ZVreq.otf',
  variable: '--font-adero-trial',
  display: 'swap',
});

const kugile = localFont({
  src: '../fonts/Kugile_Demo.ttf',
  variable: '--font-kugile',
  display: 'swap',
});

export default function Navbar() {
  return (
    <div className="sticky top-0 z-50 bg-white text-[#3C3C3C] w-full">
      <div className="flex items-center justify-between px-6 md:px-16 h-[72px] max-w-[1440px] mx-auto pt-6">

        {/* Left - Logo */}
        <div className={`${kugile.className} text-4xl font-normal tracking-widest`}>
          <Link href="/">Mayur Lodge</Link>
        </div>

        {/* Center - Navigation Links */}
        <div className={`hidden md:flex gap-10 text-sm font-semibold uppercase ${aderoTrial.className}`}>
          <Link href="/#about" className="hover:text-yellow-500 transition">About Us</Link>
          <Link href="/#facilities" className="hover:text-yellow-500 transition">Facilities & Services</Link>
          <Link href="/#gallery" className="hover:text-yellow-500 transition">Gallery</Link>
          <Link href="/#location" className="hover:text-yellow-500 transition">Location</Link>
          <Link href="/#menu" className="hover:text-yellow-500 transition">Menu</Link>
        </div>

        {/* Right - SignIn/SignUp Buttons */}
        <div className="hidden md:flex items-center gap-4 text-sm">
          <SignInButton>
            <button className={`${aderoTrial.className} bg-white text-black px-4 py-2 rounded hover:bg-gray-100 transition border border-gray-300`}>
              Sign In
            </button>
          </SignInButton>
          <SignUpButton>
            <button className={`${aderoTrial.className} bg-white text-black px-4 py-2 rounded hover:bg-gray-100 transition border border-gray-300`}>
              Sign Up
            </button>
          </SignUpButton>
        </div>
      </div>
    </div>
  );
}
