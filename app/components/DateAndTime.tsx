'use client';

import { useState } from 'react';

export function Calendar26() {
  const [arrivalDate, setArrivalDate] = useState('');
  const [arrivalTime, setArrivalTime] = useState('');
  const [departureDate, setDepartureDate] = useState('');
  const [departureTime, setDepartureTime] = useState('');

  return (
    <div className="flex flex-wrap sm:flex-nowrap gap-3 w-full justify-center sm:justify-start">
      {/* Arrival Date */}
      <div className="flex flex-col w-full sm:w-auto">
        <label className="text-sm mb-1 font-semibold text-black">Arrival Date</label>
        <input
          type="date"
          value={arrivalDate}
          onChange={(e) => setArrivalDate(e.target.value)}
          className="bg-white text-black px-3 py-2 rounded border border-gray-300 w-full sm:w-[160px]"
        />
      </div>

      {/* Arrival Time */}
      <div className="flex flex-col w-full sm:w-auto">
        <label className="text-sm mb-1 font-semibold text-black">Time</label>
        <input
          type="time"
          value={arrivalTime}
          onChange={(e) => setArrivalTime(e.target.value)}
          className="bg-white text-black px-3 py-2 rounded border border-gray-300 w-full sm:w-[120px]"
        />
      </div>

      {/* Departure Date */}
      <div className="flex flex-col w-full sm:w-auto">
        <label className="text-sm mb-1 font-semibold text-black">Departure Date</label>
        <input
          type="date"
          value={departureDate}
          onChange={(e) => setDepartureDate(e.target.value)}
          className="bg-white text-black px-3 py-2 rounded border border-gray-300 w-full sm:w-[160px]"
        />
      </div>

      {/* Departure Time */}
      <div className="flex flex-col w-full sm:w-auto">
        <label className="text-sm mb-1 font-semibold text-black">Time</label>
        <input
          type="time"
          value={departureTime}
          onChange={(e) => setDepartureTime(e.target.value)}
          className="bg-white text-black px-3 py-2 rounded border border-gray-300 w-full sm:w-[120px]"
        />
      </div>
    </div>
  );
}
