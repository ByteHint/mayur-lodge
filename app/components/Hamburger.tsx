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

  return (
    <div className="md:hidden">
      <button onClick={toggleMenu} className="cursor-pointer hover:blue-600 ">
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

      {isOpen && (
        <div className="cursor-pointer absolute right-0 mt-2 w-48 bg-white shadow-lg rounded z-10 p-2 text-sm">
          <button onClick={() => scrollToSection('about')} className="hover:text-yellow-500 transition uppercase">
            About Us
          </button>

          <button onClick={() => scrollToSection('service')} className="hover:text-yellow-500 transition uppercase">
            Facilities & services
          </button>
          <button onClick={() => scrollToSection('gallery')} className="hover:text-yellow-500 transition uppercase">
            Gallery
          </button>
          <button onClick={() => scrollToSection('location')} className="hover:text-yellow-500 transition uppercase">
            location
          </button>
          <button onClick={() => scrollToSection('menu')} className="hover:text-yellow-500 transition uppercase">
            menu
          </button>
        </div>
      )}
    </div>
  );
}
