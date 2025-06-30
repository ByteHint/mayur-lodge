import React from "react";

import localFont from "next/font/local";

import Image from "next/image";

const kugile = localFont({
  src: "../fonts/Kugile_Demo.ttf",

  variable: "--font-kugile",

  display: "swap",
});

export default function AboutUsPage() {
  return (
    <section className="min-h-screen bg-[#FFFFFF] py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden flex flex-col items-center justify-start pt-28 pb-2">
      <div className="absolute bottom-7 left-15 sm:bottom-12 sm:left-20 md:bottom-16 md:left-25 z-10">
        <h2
<<<<<<< HEAD
          className={`${kugile.className} text-3xl sm:text-4xl md:text-5xl text-gray-600 whitespace-nowrap select-none `}
=======
          className={`${kugile.className} text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#3c3c3c]  whitespace-nowrap select-none` }
          style={{ fontSize: 'clamp(2.5rem, 8vw, 5rem)' }}
>>>>>>> Anuj
        >
          About Us
        </h2>
      </div>

<<<<<<< HEAD
      <div className="max-w-5xl text-[#3C3C3C] mx-auto text-center leading-relaxed text-base sm:text-lg md:text-xl z-20 p-8 sm:p-12 rounded-2xl shadow-md relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/Bg.jpg"
            alt="Mayur Lodge background"
            layout="fill"
            objectFit="cover"
            quality={80}
            className="!static"
          />
=======
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
>>>>>>> Anuj

          <div className="absolute inset-0 bg-gray-200 opacity-80"></div>
        </div>

        <div className="relative z-10">
          <p className="mb-8">
            Welcome to Mayur Lodge, your trusted home away from home,
            strategically located near MIDC Chakan-Kuruli, one of
            Maharashtra&apos;s most dynamic and rapidly developing industrial
            zones. Surrounded by major manufacturing giants such as
            Mercedes-Benz, Volkswagen, Skoda, and Bajaj, we offer unmatched
            convenience for professionals and travellers alike.Whether
            you&apos;re visiting for a business assignment, engineering project,
            or a relaxing getaway, Mayur Lodge caters to every kind of
            guest—corporate teams, solo adventurers, families, and couples. Our
            lodge is designed to deliver a clean, peaceful, and budget-friendly
            experience without compromising on comfort. At Mayur Lodge, we
            believe in genuine hospitality, efficient service, and a restful
            atmosphere—making us a preferred stay option in the Chakan-Kuruli
            area. Whether it&apos;s a short trip or an extended visit, we ensure
            your stay is smooth, secure, and satisfying.
          </p>
        </div>
      </div>
    </section>
  );
}
