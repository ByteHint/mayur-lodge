'use client';

import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';
import localFont from 'next/font/local';

const center = {
  lat: 18.73068361094374,  // Chakan example
  lng: 73.849170538083,
};


const kugile = localFont({
  src: '../fonts/Kugile_Demo.ttf',
  variable: '--font-kugile',
  display: 'swap',
});

export default function LocationSection() {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: 'AIzaSyD05w3vgTK0CEBTOJwZwOYaN3ZZ0qfCm1I', // temp key
  });

  if (!isLoaded) {
    return <div className="text-white text-center py-10">Loading map...</div>;
  }

  return (
    <section id="location" className={`${kugile.className} bg-[#FFFFFF] text-[#3C3C3C] py-16 px-4 sm:px-6 md:px-12 lg:px-24`}>
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-10 text-start">
        Our Location
      </h2>

      <div className="w-full h-[300px] sm:h-[400px] md:h-[450px] lg:h-[500px] rounded-xl overflow-hidden shadow-xl">
        <GoogleMap
          mapContainerStyle={{ width: '100%', height: '100%' }}
          center={center}
          zoom={15}
        >
          <Marker position={center} />
        </GoogleMap>
      </div>
    </section>
  );
}