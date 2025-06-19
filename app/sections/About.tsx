// components/AboutUsPage.jsx
import React from 'react';

export default function AboutUsPage() {
  return (
    <section className="min-h-screen bg-gray-100 py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden flex items-center justify-center">
      {/* Main content container */}
      <div className="max-w-4xl mx-auto text-center text-gray-800 leading-relaxed text-lg sm:text-xl z-10 bg-gray-300 p-8 rounded-lg shadow-md"> {/* Added z-10 to ensure text is above the absolute title */}
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
          it&reposs a short trip or an extended visit, we ensure your stay is smooth, secure, and
          satisfying.
        </p>
      </div>

      {/* "About Us" heading positioned absolutely at the bottom left */}
      <div className="absolute bottom-4 left-4 sm:bottom-8 sm:left-8 z-0"> {/* z-0 to put it behind the text */}
        <h2
          className="text-6xl sm:text-8xl font-serif text-black opacity-20 whitespace-nowrap select-none"
          style={{ fontSize: 'clamp(3rem, 10vw, 5rem)' }}
        >
          About Us
        </h2>
      </div>
    </section>
  );
}