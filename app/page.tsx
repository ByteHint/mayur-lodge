'use client';

import { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';
import Hero from './components/Hero';
import AboutUsPage from './sections/About';
import FacilitiesServices from './sections/Facilities';
import LocationSection from './sections/Location';
import FAQPage from './components/FAQpage';
import Gallery from './sections/Gallery';
import UserReview from './sections/Review';
import Footer from './sections/Footer';

export default function Home() {
  const searchParams = useSearchParams();
  const scrollTo = searchParams.get("scrollTo");

 useEffect(() => {
  if (scrollTo) {
    // Delay ensures DOM is ready
    setTimeout(() => {
      const el = document.getElementById(scrollTo);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });

        // ✅ Clean the URL by removing ?scrollTo param
        const newUrl = window.location.pathname;
        window.history.replaceState({}, '', newUrl);
      }
    }, 100);
  }
}, [scrollTo]);


  return (
    <div className="w-full bg-[#FFFFFF] text-white">

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

      {/* Sections */}
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
