// components/AboutUsPage.jsx
import React from 'react';
import localFont from "next/font/local";

const kugile = localFont({
  src: '../fonts/Kugile_Demo.ttf',
  variable: '--font-kugile',
  display: 'swap',
});


export default function AboutUsPage() {
  return (
    <section className="min-h-screen bg-[#FFFFFF] py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden flex items-center justify-center">

      {/* "About Us" heading positioned absolutely at the top left */}
      <div className="absolute top-2 left-2 sm:top-4 sm:left-4 md:top-8 md:left-8 z-0">
        <h2
          className={`${kugile.className} text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#3c3c3c]  whitespace-nowrap select-none` }
          style={{ fontSize: 'clamp(2.5rem, 8vw, 5rem)' }}
        >
          About Us
        </h2>
      </div>

      {/* Main content container */}
      <div className="max-w-4xl text-[#3C3C3C] mx-auto text-center leading-relaxed text-base sm:text-lg md:text-xl z-10 bg-[#F3F3F3] p-6 sm:p-8 rounded-2xl shadow-md transition hover:scale-105 duration-300 ease-out"> {/* Adjusted text and padding for responsiveness */}
        <p className="mb-8">
          Welcome to Pratik Lodge, your trusted home away from home, strategically located
          near MIDC Chakan-Kuruli, one of Maharashtra&apos;s most dynamic and rapidly
          developing industrial zones. Surrounded by major manufacturing giants such as
          Mercedes-Benz, Volkswagen, Skoda, and Bajaj, we offer unmatched convenience for
          professionals and travellers alike.
        </p>
        <p className="mb-8">
          Whether you&apos;re visiting for a business assignment, engineering project, or a relaxing
          getaway, Mayur Lodge caters to every kind of guest—corporate teams, solo
          adventurers, families, and couples. Our lodge is designed to deliver a clean, peaceful,
          and budget-friendly experience without compromising on comfort.
        </p>
        <p>
          At Pratik Lodge, we believe in genuine hospitality, efficient service, and a restful
          atmosphere—making us a preferred stay option in the Chakan-Kuruli area. Whether
          it&apos;s a short trip or an extended visit, we ensure your stay is smooth, secure, and
          satisfying.
        </p>
      </div>

    </section>
  );
}