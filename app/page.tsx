'use client';

import Image from 'next/image';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutUsPage from './sections/About';
import FacilitiesServices from './sections/Facilities';
import PromoBanner from './sections/PromoBanner';
import LocationSection from './sections/Location';

export default function Home() {
  return (
    <div className="w-full bg-black text-white">
      <PromoBanner/>
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative w-full h-screen overflow-hidden">
        <Image
          src="/Home.jpg"
          alt="Background"
          fill
          priority
          className="object-cover brightness-75"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <Hero />
        </div>
      </div>

      {/* About Us Section */}
      <div id="about">
        <AboutUsPage />
      </div>

      <div id='facilities'>
        <FacilitiesServices/>
      </div>

      <div id='location'> 
        <LocationSection/>
      </div>
    </div>
  );
}
