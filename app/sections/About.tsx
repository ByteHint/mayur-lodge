// components/AboutUsPage.jsx
import React from 'react';

export default function AboutUsPage() {
  return (
    <section className="min-h-screen bg-gray-100 py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden flex items-center justify-center">
      {/* Main content container */}
      <div className="max-w-4xl mx-auto text-center text-gray-800 leading-relaxed text-base sm:text-lg md:text-xl z-10 bg-gray-300 p-6 sm:p-8 rounded-lg shadow-md"> {/* Adjusted text and padding for responsiveness */}
        <p className="mb-8">
          Welcome to Mayur Lodge, your trusted home away from home, strategically located
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
          At Mayur Lodge, we believe in genuine hospitality, efficient service, and a restful
          atmosphere—making us a preferred stay option in the Chakan-Kuruli area. Whether
          it&apos;s a short trip or an extended visit, we ensure your stay is smooth, secure, and
          satisfying.
        </p>
      </div>

      {/* "About Us" heading positioned absolutely at the bottom left */}
      <div className="absolute bottom-2 left-2 sm:bottom-4 sm:left-4 md:bottom-8 md:left-8 z-0"> {/* Adjusted positioning for responsiveness */}
        <h2
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif text-black opacity-20 whitespace-nowrap select-none" // Adjusted font sizes
          style={{ fontSize: 'clamp(2.5rem, 8vw, 5rem)' }} // Adjusted clamp values
        >
          About Us
        </h2>
      </div>
    </section>
  );
}