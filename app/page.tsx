'use client';

import Image from 'next/image';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutUsPage from './sections/About';
import FacilitiesServices from './sections/Facilities';
import PromoBanner from './sections/PromoBanner';
import LocationSection from './sections/Location';
import FAQPage from './components/FAQpage';
import Gallery from './sections/Gallery';
import UserReview from './sections/Review';
import Footer from './sections/Footer';



export default function Home() {
  return (
    <div className="w-full bg-[#FFFFFF] text-white">
      <PromoBanner />
      <Navbar />
     

      {/* Hero Section */}
      <div className="relative w-full h-screen overflow-hidden">
        <Image
          src="/Home.jpg"
          alt="Background"
          fill
          priority
          className="object-cover brightness-75 will-change-transform"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <Hero />
        </div>
      </div>

      {/* Sections — ensure no top margins that create gaps */}
      <div id="gallery" className="pt-0 mt-0">
        <Gallery />
      </div>

      <div id="location" className="pt-0 mt-0">
        <LocationSection />
      </div>

      <div id="about" className="pt-0 mt-0">
        <AboutUsPage />
      </div>

      <div id="facilities" className="-mt-20">
        <FacilitiesServices />
      </div>

      <div id="review" className="-mt-20">
        <UserReview />
      </div>
      
      <div id="FAQ" className="pt-0 mt-0">
        <FAQPage />
      </div>

      <div className="pt-0 mt-0">
        <Footer />
      </div>
    </div>
  );
}
