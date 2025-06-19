import React from "react";
import { UserCog, Bed, Wifi, UtensilsCrossed } from "lucide-react";
import Image from "next/image";

const features = [
  {
    icon: <UserCog size={32} className="text-red-500" />,
    title: "Personalised Service",
    description:
      "We offer special personalised services, along with amenities that are tailored according to your preferences and distinct price value.",
  },
  {
    icon: <Bed size={32} className="text-red-500" />,
    title: "Great Sleep",
    description:
      "We promise a relaxing and comfortable sleep on holistic beds made from 100% cotton linen and pocket spring mattress.",
  },
  {
    icon: <Wifi size={32} className="text-red-500" />,
    title: "Blazing Fast Wi-Fi",
    description:
      "Our highly technologically advanced Wi-Fi facility is active 24/7 to furnish our guests with unbeatable network connectivity.",
  },
  {
    icon: <UtensilsCrossed size={32} className="text-red-500" />,
    title: "Amazing Breakfast",
    description:
      "We strive to offer an array of awesome tantalizing morning brunch or breakfast specially prepared by culinary experts with passion and care.",
  },
];

export default function FacilitiesServices() {
  return (
    <div id="service"className="relative w-full min-h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
      <Image
        src="/Home.jpg"
        alt="Hotel Background"
        fill
        priority
        sizes="100vw"
        className="object-cover w-full h-full blur-sm brightness-75"
      />
    </div>
    {/* Centered Card Grid */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4 sm:px-8 md:px-12 py-10 w-full">
          {features.map((feature, index) => (
            <div
              key={index}
              className="rounded-xl p-6 text-center bg-white/20 backdrop-blur-md border border-white/30 shadow-md hover:shadow-lg transition"
            >
              <div className="mb-4 flex justify-center">{feature.icon}</div>
              <h3 className="text-lg font-semibold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-white/90">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
