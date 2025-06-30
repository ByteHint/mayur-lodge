import React from "react";
<<<<<<< HEAD

import { Wifi, UtensilsCrossed } from "lucide-react";

=======
import {  Wifi, UtensilsCrossed } from "lucide-react";
>>>>>>> Anuj
import { FaBoxOpen } from "react-icons/fa";

import localFont from "next/font/local";

const kugile = localFont({
  src: "../fonts/Kugile_Demo.ttf",

  variable: "--font-kugile",

  display: "swap",
});

const features = [
  {
<<<<<<< HEAD
    icon: <Wifi size={32} className="text-[#292929]" />,

    title: "Free & Fast Wi-Fi",

=======
    icon: <FaBoxOpen  size={32} className="text-[#292929]" />,
    title: "Personalised Service",
    description:
      "We offer special personalised services, along with amenities that are tailored according to your preferences and distinct price value.",
  },

  {
    icon: <Wifi size={32} className="text-[#292929]" />,
    title: "Free & Fast Wi-Fi",
>>>>>>> Anuj
    description:
      "Stay seamlessly connected with high-speed internet throughout your stay.",
  },

  {
    icon: <FaBoxOpen size={32} className="text-[#292929]" />,

    title: "Personalized Room Service",

    description:
      "Enjoy attentive in-room service specially tailored to your needs.",
  },

  {
    icon: <UtensilsCrossed size={32} className="text-[#292929]" />,

    title: "Breakfast",

    description:
      "Start your day with a range of healthy and satisfying breakfast options.",
  },
];

export default function FacilitiesServices() {
  return (
<<<<<<< HEAD
    <section
      id="facilities"
      className="bg-[#FFFFFF] text-[#3C3C3C] py-24 px-4 sm:px-6 md:px-12 lg:px-24 min-h-[80vh] flex flex-col justify-center"
    >
      <h2
        className={`${kugile.className} text-3xl sm:text-4xl md:text-5xl mb-10 text-start tracking-wider`}
      >
=======
    <section id="facilities" className="bg-[#FFFFFF] text-[#3C3C3C] py-16 px-4 sm:px-6 md:px-12 lg:px-24">
      <h2 className={`${kugile.className} text-[67px] sm:text-4xl md:text-5xl md:mb-10 mb-2 text-start tracking-wider`}>
>>>>>>> Anuj
        Facilities and Services
      </h2>

      <div className="relative z-10 w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
<<<<<<< HEAD
              className="rounded-xl p-6 text-start bg-gray-300 shadow-sm transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg cursor-pointer"
=======
              className="rounded-xl p-6 text-center bg-[#F3F3F3] backdrop-blur-md border border-white/30 shadow-md hover:shadow-lg transition hover:scale-105 duration-300 ease-out"
>>>>>>> Anuj
            >
              <div className="mb-4 flex justify-start">{feature.icon}</div>

              <h3 className="text-lg font-semibold text-[#3C3C3C] mb-2">
                {feature.title}
              </h3>

              <p className="text-sm text-[#3C3C3C]">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}