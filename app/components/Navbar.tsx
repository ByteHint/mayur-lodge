'use client';

import Link from 'next/link';
import localFont from 'next/font/local';
import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs';
import { Phone } from 'lucide-react';

const aderoTrial = localFont({
  src: '../fonts/AderotrialRegular-ZVreq.otf',
  variable: '--font-adero-trial',
  display: 'swap',
});

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full bg-black/70 text-white backdrop-blur-[8px]">
      <div className="relative flex flex-col md:flex-row justify-between items-center px-6 py-4 gap-4">
        
        <div className={`${aderoTrial.className} text-[14px] font-bold uppercase`}>
          <Link href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            Mayur Lodge
          </Link>
        </div>

        <div className= {`${aderoTrial.className} flex flex-wrap gap-4 justify-center text-[14px] uppercase`}>
          <Link href="#about" className="hover:text-yellow-300">About Us</Link>
          <Link href="#facilities" className="hover:text-yellow-300">Facilities & Services</Link>
          <Link href="#gallery" className="hover:text-yellow-300">Gallery</Link>
          <Link href="#location" className="hover:text-yellow-300">Location</Link>
          <Link href="#menu" className="hover:text-yellow-300">Menu</Link>
          <Phone/>
        </div>

          <SignedOut>
            <SignInButton mode="modal">
              <button className="px-4 py-1 rounded-full bg-white text-black text-xs font-semibold">
                Sign In
              </button>
            </SignInButton>
            <SignUpButton mode="modal">
              <button className="px-4 py-1 rounded-full bg-white text-black text-xs font-semibold">
                Sign Up
              </button>
            </SignUpButton>
          </SignedOut>

          <SignedIn>
            <UserButton />
          </SignedIn>
      </div>
    </nav>
  );
}
