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
    <section className="min-h-screen bg-[#FFFFFF] py-16 px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-center relative">
      <div className="relative w-full md:w-1/2 max-w-2xl text-[#3C3C3C] mx-auto md:mr-1 p-8 sm:p-12 rounded-2xl shadow-md overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/Bg.jpg"
            alt="Mayur Lodge text background"
            layout="fill"
            objectFit="cover"
            quality={80}
            className="!static"
          />

          <div className="absolute inset-0 bg-gray-200 opacity-80"></div>
        </div>

        <div className="relative z-10">
          <p className="mb-4 text-xl text-center sm:text-balance leading-relaxed">
            Welcome to Mayur Lodge, your trusted home away from home,
            strategically located near MIDC Chakan-Kuruli, one of
            Maharashtra&apos;s most dynamic and rapidly developing industrial
            zones. Surrounded by major manufacturing giants such as
            Mercedes-Benz, Volkswagen, Skoda, and Bajaj, we offer unmatched
            convenience for professionals and travellers alike. Whether
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

        <div className="absolute bottom-4 left-8 z-20">
          <h2
            className={`${kugile.className} text-2xl sm:text-3xl md:text-4xl text-[#3c3c3c] whitespace-nowrap select-none `}
          >
            About Us
          </h2>
        </div>
      </div>

      <div className="w-full md:w-1/2 mt-8 md:mt-0 flex flex-col items-center justify-center space-y-3">
        <div className="w-full max-w-lg h-64 sm:h-72 md:h-80 relative rounded-4xl overflow-hidden shadow-lg">
          <Image
            src="/pic1.jpg"
            alt="Mayur Lodge Room 1"
            layout="fill"
            objectFit="cover"
            quality={80}
          />
        </div>
        <div className="w-full max-w-lg h-64 sm:h-72 md:h-80 relative rounded-4xl overflow-hidden shadow-lg">
          <Image
            src="/pic2.jpg"
            alt="Mayur Lodge Room 2"
            layout="fill"
            objectFit="cover"
            quality={80}
          />
        </div>
      </div>
    </section>
  );
}
