"use client"

import React from "react"
import { Calendar22 } from "./DatePicker"

export default function BookNow() {
  return (
    <div className="mt-32 px-4"> {/* push it down */}
      <div className="backdrop-blur-md bg-black/40 p-6 md:p-8 rounded-xl border border-white/20 w-full max-w-5xl mx-auto">
        
        <div className="flex flex-col gap-6 w-full">
          {/* Calendar Inputs */}
          <Calendar22 />

          {/* Promo + Button */}
          <div className="flex flex-col sm:flex-row items-end gap-4 w-full">
            {/* Promo Code */}
            <div className="flex flex-col w-full sm:w-1/2">
              <label htmlFor="promo" className="text-white font-semibold mb-1">
                Promo
              </label>
              <input
                type="text"
                id="promo"
                placeholder="Enter Promocode"
                className="bg-white text-black px-3 py-2 rounded border border-gray-300 w-full"
              />
            </div>

            {/* Book Now Button */}
            <button className="bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded w-full sm:w-auto">
              Book Now
            </button>
          </div>
        </div>

      </div>
    </div>
  )
}
