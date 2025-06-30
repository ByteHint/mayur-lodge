"use client";

import { Carousel } from "@/components/ui/carousel";
import localFont from "next/font/local";

const kugile = localFont({
  src: '../fonts/Kugile_Demo.ttf',
  variable: '--font-kugile',
  display: 'swap',
});

const slides = [
  {
    title: "Regular Room",
    button: "Click to view",
    src: "/Room1.jpg",
  },
  {
    title: "Deluxe Room",
    button: "Click to view",
    src: "/Room2.jpg",
  },
  {
    title: "Family Hut",
    button: "Click to view",
    src: "/Room3.jpg",
  },
];


export default function Gallery() {
  return (
    <section id="gallery" className={`${kugile.className} bg-[#FFFFFF] text-[#3C3C3C] py-16 px-4 sm:px-6 md:px-12 lg:px-24 overflow-x-clip`}>
      <h2 className="text-3xl sm:text-4xl md:text-5xl mb-10 text-start">
        Room Showcase
      </h2>
        <Carousel slides={slides} />
    </section>
  );
}
