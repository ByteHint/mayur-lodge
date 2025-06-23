// components/FacilitiesServices.jsx
import React from "react";
// Import icons that closely match the image
import { FaWifi, FaBoxOpen } from "react-icons/fa";
import { CiForkAndKnife } from "react-icons/ci"; // You'll need to ensure react-icons is installed

// Define the features data to match the image content
const features = [
  {
    icon: <FaWifi size={32} className="text-gray-700" />, // Icon and color matching the image
    title: "Free & Fast Wi-Fi",
    description: "Stay seamlessly connected with high-speed internet throughout your stay.",
  },
  {
    icon: <FaBoxOpen size={32} className="text-gray-700" />, // Icon and color matching the image
    title: "Personalized Room Service",
    description: "Enjoy attentive in-room service specially tailored to your needs.",
  },
  {
    // Custom icon structure for Breakfast to include the 'D' badge
    icon: (
      <div className="relative">
        <CiForkAndKnife size={32} className="text-gray-700" /> {/* Clock icon */}
        {/* 'D' badge - positioned absolutely */}

      </div>
    ),
    title: "Breakfast",
    description: "Start your day with a range of healthy and satisfying breakfast options.",
  },
];

export default function FacilitiesServices() {
  return (
    <section id="service" className="bg-white py-16 px-4 sm:px-6 lg:px-8 min-h-[80vh]">
      {/* Main Heading */}
      <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif text-gray-800 mb-8 sm:mb-12 ml-4 sm:ml-0 text-center sm:text-left"> {/* Adjusted font size, margin, and alignment for responsiveness */}
        Facilities and Services
      </h2>

      {/* Grid container for cards */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-2 sm:px-4 py-6"> {/* Adjusted padding for smaller screens */}
        {features.map((feature, index) => (
          <div
            key={index}
            className="rounded-xl p-6 text-left bg-white shadow-md hover:shadow-lg transition relative" // Changed styling
          >
            <div className="mb-4 flex justify-start">{feature.icon}</div> {/* Icons aligned left */}
            <h3 className="text-lg font-semibold text-gray-900 mb-2"> {/* Text color changed */}
              {feature.title}
            </h3>
            <p className="text-sm text-gray-700">{feature.description}</p> {/* Text color changed */}
          </div>
        ))}
      </div>
    </section>
  );
}