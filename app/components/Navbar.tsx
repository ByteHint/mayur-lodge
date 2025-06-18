'use client';

import Link from 'next/link';
import { SignInButton, SignUpButton } from "@clerk/nextjs";
import localFont from 'next/font/local';

const aderoTrial = localFont({
  src: '../fonts/AderotrialRegular-ZVreq.otf',
  variable: '--font-adero-trial',
  display: 'swap',
});

export default function Navbar() {
  return (
    <div className="sticky top-0 z-50 w-full bg-gradient-to-b from-black via-black/90 to-black/70 text-white shadow-md backdrop-blur">
      <div className="flex items-center justify-between px-6 py-4 w-full">
        
        {/* Left - Logo */}
        <div className={`${aderoTrial.className} text-2xl font-bold uppercase`}>
          <Link href="/">Mayur Lodge</Link>
        </div>

        {/* Center - Navigation Links */}
        <div className={`hidden md:flex gap-8 text-sm font-medium uppercase ${aderoTrial.className}`}>
          <Link href="/#about" className="hover:text-yellow-300 transition">About Us</Link>
          <Link href="/#facilities" className="hover:text-yellow-300 transition">Facilities & Services</Link>
          <Link href="/#gallery" className="hover:text-yellow-300 transition">Gallery</Link>
          <Link href="/#location" className="hover:text-yellow-300 transition">Location</Link>
          <Link href="/#menu" className="hover:text-yellow-300 transition">Menu</Link>
        </div>

        {/* Right - SignIn/SignUp Buttons */}
        <div className="flex items-center gap-4">
          <SignInButton>
            <button className="bg-white text-black px-4 py-2 rounded hover:bg-gray-200 transition text-sm">
              Sign In
            </button>
          </SignInButton>
          <SignUpButton>
            <button className="bg-yellow-400 text-black px-4 py-2 rounded hover:bg-yellow-500 transition text-sm">
              Sign Up
            </button>
          </SignUpButton>
        </div>
      </div>
    </div>
  );
}
