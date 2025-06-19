import { FaInstagram, FaWhatsapp, FaEnvelope } from "react-icons/fa";
import Image from "next/image";


export default function Footer() {
  return (
    <footer className="relative bg-white bg-opacity-80 backdrop-blur-sm text-gray-800 z-10 py-10 px-6 sm:px-12 lg:px-24 text-center">
      
      <div className="absolute inset-0 z-0">
        <Image
          src="/Home.jpg" 
          alt="footer background"
          fill
          className="w-full h-full object-cover opacity-40" 
        />
      </div>

      
      <div className="relative z-10 max-w-screen-xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
      
        <div className="text-2xl font-kugile md:flex-shrink-0">Mayur Lodge</div>

        
        <div className="flex-grow flex flex-col items-center text-center">
          <h2 className="text-4xl sm:text-5xl font-serif mb-4">Request More Information</h2>
          <p className="text-sm sm:text-base text-gray-600 mb-8">Endless Options, We Find The Best Deals.</p>

          <button className="bg-black text-white py-2 px-6 rounded-full mb-8 hover:bg-gray-800 transition">
            Reach Out
          </button>

          
          <div className="flex gap-6 text-sm mb-8"> 
            <a href="#" className="hover:underline">Terms</a>
            <a href="#" className="hover:underline">About</a>
            <a href="#" className="hover:underline">Policy</a>
          </div>
        </div>

        
        <div className="flex gap-4 md:flex-shrink-0">
          <a href="#"><FaWhatsapp className="text-lg hover:text-green-500" /></a> 
          <a href="#"><FaInstagram className="text-lg hover:text-pink-600" /></a> 
          <a href="#"><FaEnvelope className="text-lg hover:text-blue-600" /></a>
        </div>
      </div>

      
      <div className="relative z-10 text-center text-xs text-gray-500 mt-6">
        © Copyright 2025. All Rights Reserved by Mayur Lodge.
      </div>
    </footer>
  );
}