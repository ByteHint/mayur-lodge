import React from "react";
import {  Bed, Wifi, UtensilsCrossed } from "lucide-react";
import { FaBoxOpen } from "react-icons/fa";

import localFont from "next/font/local";

const kugile = localFont({
  src: '../fonts/Kugile_Demo.ttf',
  variable: '--font-kugile',
  display: 'swap',
});

const features = [
  {
    icon: <FaBoxOpen  size={32} className="text-[#292929]" />,
    title: "Personalised Service",
    description:
      "We offer special personalised services, along with amenities that are tailored according to your preferences and distinct price value.",
  },
  {
    icon: <Bed size={32} className="text-[#292929]" />,
    title: "Great Sleep",
    description:
      "We promise a relaxing and comfortable sleep on holistic beds made from 100% cotton linen and pocket spring mattress.",
  },
  {
    icon: <Wifi size={32} className="text-[#292929]" />,
    title: "Blazing Fast Wi-Fi",
    description:
      "Our highly technologically advanced Wi-Fi facility is active 24/7 to furnish our guests with unbeatable network connectivity.",
  },
  {
    icon: <UtensilsCrossed size={32} className="text-[#292929]" />,
    title: "Amazing Breakfast",
    description:
      "We strive to offer an array of awesome tantalizing morning brunch or breakfast specially prepared by culinary experts with passion and care.",
  },
];

export default function FacilitiesServices() {
  return (
    <section id="facilities" className="bg-[#FFFFFF] text-[#3C3C3C] py-16 px-4 sm:px-6 md:px-12 lg:px-24">
      <h2 className={`${kugile.className} text-3xl sm:text-4xl md:text-5xl font-bold mb-10 text-start tracking-wider`}>
        Facilities and Services
      </h2>
    {/* Centered Card Grid */}
      <div className="relative z-10 flex items-center justify-center px-6 py-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4 sm:px-8 md:px-12 py-10 w-full">
          {features.map((feature, index) => (
            <div
              key={index}
              className="rounded-xl p-6 text-center bg-[#F3F3F3] backdrop-blur-md border border-white/30 shadow-md hover:shadow-lg transition hover:scale-105 duration-300 ease-ou"
            >
              <div className="mb-4 flex justify-center">{feature.icon}</div>
              <h3 className="text-lg font-semibold text-[#3C3C3C] mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-[#9D9D9D]/90">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
  </section>
  );
}
