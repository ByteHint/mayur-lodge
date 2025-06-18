'use client';

import { Calendar26 } from '../components/DateAndTime';

export default function BookNow() {
  return (
    <section className="w-full px-4 sm:px-6 py-6">
      <div className="w-full max-w-5xl mx-auto flex flex-wrap sm:flex-nowrap items-end justify-center gap-3 bg-white/60 backdrop-blur-md rounded-xl p-4 shadow-md">

        {/* Date Pickers */}
        <Calendar26 />

        {/* Promo Code */}
        <div className="flex flex-col w-full sm:w-auto">
          <label className="text-sm mb-1 font-semibold text-black">Promo Code</label>
          <input
            type="text"
            placeholder="Promo Code"
            className="bg-white text-black px-3 py-2 rounded border border-gray-300 w-full sm:w-[180px]"
          />
        </div>

        {/* Book Now Button */}
        <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded font-semibold w-full sm:w-auto">
          Book Now
        </button>
      </div>
    </section>
  );
}
