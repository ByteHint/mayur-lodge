import Image from "next/image";
import { FaWhatsapp, FaInstagram, FaEnvelope } from "react-icons/fa";
import localFont from 'next/font/local';

const kugile = localFont({
  src: '../fonts/Kugile_Demo.ttf',
  variable: '--font-kugile',
  display: 'swap',
});

export default function Footer() {
  return (
    <footer className="relative bg-[#FFFFFF] bg-opacity-80 backdrop-blur-sm text-gray-800 z-10 py-10 px-6 sm:px-12 lg:px-24 text-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/Footer.jpg"
          alt="footer background"
          fill
          className="w-full h-full object-cover opacity-40"
        />
        <div
          className="absolute top-0 left-0 w-full h-[300px] z-10 pointer-events-none"
          style={{
            background:
             "linear-gradient(to bottom, rgba(255, 255, 255, 0.98) 0%, rgba(255, 255, 255, 0.7) 65%, rgba(255, 255, 255, 0) 100%)"
          }}
        ></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-screen-xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left: Logo */}
        <div className={`${kugile.className} text-[35px] font-kugile md:flex-shrink-0 mt-60`}>
          Mayur Lodge
        </div>

        {/* Center: Heading + Text + Button */}
        <div className="flex-grow flex flex-col items-center text-center mt-0 mb-30 pr-60">
          <h2 className={`${kugile.className} text-4xl sm:text-5xl mt-4 mb-2`}>
            Request More Information
          </h2>

          <p className="text-base text-gray-600 mb-6">
            Endless Options, We Find The Best Deals.
          </p>

          <button className="bg-[#3C3C3C] text-white py-3 px-8 rounded-full hover:bg-gray-800 transition-all text-lg shadow-lg mb-10">
            Reach Out
          </button>

          <div className="flex gap-6 text-sm mb-8">
            <a href="#" className="hover:underline">
              Terms
            </a>
            <a href="#" className="hover:underline">
              About
            </a>
            <a href="#" className="hover:underline">
              Policy
            </a>
          </div>
        </div>

        {/* Right: Social Icons */}
        <div className="flex gap-4 md:flex-shrink-0 mt-60">
          <a href="#">
            <FaWhatsapp className="text-2xl hover:text-green-500" />
          </a>
          <a href="#">
            <FaInstagram className="text-2xl hover:text-pink-600" />
          </a>
          <a href="#">
            <FaEnvelope className="text-2xl hover:text-blue-600" />
          </a>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="relative z-10 text-center text-xs text-gray-500 mt-6">
        © Copyright 2025. All Rights Reserved by Mayur Lodge.
      </div>
    </footer>
  );
}
