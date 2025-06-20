'use client';

import { useState } from 'react';

const scrollToSection = (id: string) => {
  const scroll = document.getElementById(id);
  if (scroll) {
    scroll.scrollIntoView({ behavior: 'smooth' });
  }
};

export default function Hamburger() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <>
      {/* Hamburger Icon */}
      <div className="md:hidden z-[60]">
        <button onClick={toggleMenu} className="cursor-pointer hover:text-yellow-500 transition">
          <svg
            className="w-6 h-6 text-gray-700"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-40"
          onClick={closeMenu}
        />
      )}

      {/* Side Drawer Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-xl z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex flex-col items-start p-6 gap-6 mt-16 text-[#3C3C3C] uppercase font-semibold">
          <button onClick={() => { scrollToSection('about'); closeMenu(); }} className="hover:text-yellow-500">About Us</button>
          <button onClick={() => { scrollToSection('service'); closeMenu(); }} className="hover:text-yellow-500">Facilities & Services</button>
          <button onClick={() => { scrollToSection('gallery'); closeMenu(); }} className="hover:text-yellow-500">Gallery</button>
          <button onClick={() => { scrollToSection('location'); closeMenu(); }} className="hover:text-yellow-500">Location</button>
          <button onClick={() => { scrollToSection('menu'); closeMenu(); }} className="hover:text-yellow-500">Menu</button>
        </div>
      </div>
    </>
  );
}
