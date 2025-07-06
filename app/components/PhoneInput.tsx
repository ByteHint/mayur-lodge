'use client';

import React, { useState } from 'react';
import India from '../flags/india';

const countries = [
  { name: 'India', code: '+91', flag: <India /> },
  { name: 'United States', code: '+1', flag: '🇺🇸' },
  { name: 'Australia', code: '+61', flag: '🇦🇺' },
  { name: 'Germany', code: '+49', flag: '🇩🇪' },
];

export default function PhoneInputForm() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);
  const [phone, setPhone] = useState('');
  const [focused, setFocused] = useState(false);

  const handleSelect = (country: (typeof countries)[number]) => {
    setSelectedCountry(country);
    setDropdownOpen(false);
  };

  const showFloating = focused || phone.length > 0;

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="relative bg-white rounded-[18px] px-4 pt-5 pb-2 shadow-md flex items-center gap-2">
        {/* Country Selector */}
        <div className="relative">
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="flex items-center gap-2 pr-2"
          >
            <span className="text-xl">{selectedCountry.flag}</span>
            <span className="text-base font-medium">{selectedCountry.code}</span>
            <svg
              className="w-3 h-3 mt-1 text-gray-500"
              fill="none"
              viewBox="0 0 10 6"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          {dropdownOpen && (
            <div className="absolute mt-1 z-10 w-40 bg-white border rounded shadow">
              <ul className="text-sm">
                {countries.map((country) => (
                  <li key={country.code}>
                    <button
                      onClick={() => handleSelect(country)}
                      className="w-full text-left px-4 py-2 hover:bg-gray-100 flex items-center gap-2"
                    >
                      <span className="text-xl">{country.flag}</span>
                      <span>{country.code}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Divider */}
        <div className='pt-1'>
        <svg width="2" height="32" viewBox="0 0 2 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.944336 0.47583L0.944337 31.1543" stroke="#808080" strokeWidth="0.639135" strokeLinecap="round"/>
      </svg>
      </div>

        {/* Input & Label */}
        <div className="relative w-full">
          <label
            className={`absolute left-0 transition-all duration-200 text-gray-500 ${
              showFloating ? 'text-xs' : 'text-base top-2'
            }`}
          >
            Phone Number
          </label>
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            placeholder="Phone Number"
            className="w-full bg-transparent border-none outline-none text-[18px] pt-7 pb-4 "
          />
        </div>
      </div>
    </div>
  );
}
