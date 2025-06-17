'use client';

import localFont from "next/font/local";

const kugile = localFont({
  src: "../fonts/Kugile_Demo.ttf",
  variable: "--font-kugile",
  display: "swap",
});

export default function Hero() {
  return (
    <div className="absolute top-[69px] left-0 w-full h-auto px-6 py-16 flex flex-col gap-8 text-white z-10">
      <div className="text-center sm:text-left">
        <h1 className={`${kugile.className} text-[40px] sm:text-[60px] md:text-[80px] lg:text-[95px] leading-tight`}>
          Affordable.<br />
          Accessible.<br />
          Comfortable.
        </h1>
      </div>
      <div className="flex gap-4 justify-center sm:justify-start">
        <button className="px-6 py-3 rounded-full bg-white text-black text-sm uppercase font-bold">Reserve Now</button>
        <button className="px-6 py-3 rounded-full border border-white text-white text-sm uppercase font-bold">Rooms</button>
      </div>
    </div>
  );
}
