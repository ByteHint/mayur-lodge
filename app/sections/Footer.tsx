import { FaInstagram, FaWhatsapp, FaEnvelope } from "react-icons/fa";
import Image from "next/image";


export default function Footer() {
  return (
    <footer className="relative bg-white bg-opacity-80 backdrop-blur-sm text-gray-800 z-10 py-8 px-4 sm:py-10 sm:px-6 lg:px-8 text-center"> {/* Adjusted vertical padding and horizontal padding */}
      
      <div className="absolute inset-0 z-0">
        <Image
          src="/Home.jpg" 
          alt="footer background"
          fill
          className="w-full h-full object-cover opacity-40" 
        />
      </div>

      
      <div className="relative z-10 max-w-screen-xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6"> {/* Adjusted gap */}
      
        <div className="text-xl sm:text-2xl font-kugile md:flex-shrink-0 mb-4 md:mb-0">Mayur Lodge</div> {/* Adjusted font size and margin for smaller screens */}

        
        <div className="flex-grow flex flex-col items-center text-center">
          <h2 className="text-3xl sm:text-4xl font-serif mb-3 sm:mb-4">Request More Information</h2> {/* Adjusted font size and margin */}
          <p className="text-xs sm:text-sm text-gray-600 mb-6 sm:mb-8">Endless Options, We Find The Best Deals.</p> {/* Adjusted font size and margin */}

          <button className="bg-black text-white py-2 px-5 rounded-full mb-6 sm:mb-8 hover:bg-gray-800 transition text-sm sm:text-base"> {/* Adjusted padding and font size */}
            Reach Out
          </button>

          
          <div className="flex gap-4 sm:gap-6 text-xs sm:text-sm mb-6 sm:mb-8"> {/* Adjusted gap and font size */}
            <a href="#" className="hover:underline">Terms</a>
            <a href="#" className="hover:underline">About</a>
            <a href="#" className="hover:underline">Policy</a>
          </div>
        </div>

        
        <div className="flex gap-3 sm:gap-4 md:flex-shrink-0"> {/* Adjusted gap */}
          <a href="#"><FaWhatsapp className="text-base sm:text-lg hover:text-green-500" /></a> {/* Adjusted icon size */}
          <a href="#"><FaInstagram className="text-base sm:text-lg hover:text-pink-600" /></a> {/* Adjusted icon size */}
          <a href="#"><FaEnvelope className="text-base sm:text-lg hover:text-blue-600" /></a> {/* Adjusted icon size */}
        </div>
      </div>

      
      <div className="relative z-10 text-center text-xs text-gray-500 mt-4 sm:mt-6"> {/* Adjusted margin-top */}
        © Copyright 2025. All Rights Reserved by Mayur Lodge.
      </div>
    </footer>
  );
}