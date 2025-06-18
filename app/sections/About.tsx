import Image from 'next/image';
import localFont from 'next/font/local';

const aderoTrial = localFont({
  src: '../fonts/AderotrialRegular-ZVreq.otf',
  variable: '--font-adero-trial',
  display: 'swap',
});

export default function AboutUsPage() {
  return (
    <div className="relative w-full min-h-screen bg-black text-white overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/Home.jpg"
          alt="Hotel Background"
          fill
          sizes="100vw"
          className="object-cover w-full h-full blur-sm brightness-75 will-change-transform"
          priority
        />
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 px-6 md:px-12 lg:px-24 py-32 max-w-screen-xl mx-auto">
        <h1
          className={`${aderoTrial.className} text-[40px] sm:text-[60px] md:text-[80px] font-bold uppercase leading-tight mb-16 text-center`}
        >
          About Us
        </h1>

        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Text Section */}
          <div className="w-full lg:w-1/2 text-lg leading-relaxed">
            <p className={`${aderoTrial.className}`}>
              Welcome to Mayur Lodge, your perfect stay option located near MIDC
              Chakan–Kuruli, one of Maharashtra&apos;s fastest-growing industrial
              hubs. Surrounded by renowned companies like Mercedes-Benz,
              Volkswagen, Skoda, and Bajaj — Mayur Lodge is not only a top
              choice for business travelers, engineers, and project teams, but
              also couples, families, and solo travelers seeking a clean,
              peaceful, and budget-friendly stay.
            </p>
          </div>

          {/* Image Section */}
          <div className="relative w-full lg:w-1/2 h-[450px]">
            {/* Back Image */}
            <div className="absolute top-0 left-16 z-0 border-2 border-blue-400 rounded-[15px] overflow-hidden">
              <Image
                src="/MIDC.png"
                alt="Industrial Area"
                width={500}
                height={300}
                className="object-cover"
              />
            </div>

            {/* Middle Image */}
            <div className="absolute top-40 left-5 z-10 border-2 border-blue-300 rounded-[15px] overflow-hidden">
              <Image
                src="/temple.png"
                alt="Local Temple"
                width={200}
                height={200}
                className="object-cover"
              />
            </div>

            {/* Front Image */}
            <div className="absolute top-40 left-60 z-20 border-2 border-blue-200 rounded-[15px] overflow-hidden">
              <Image
                src="/Room.jpg"
                alt="Lodge Room"
                width={350}
                height={300}
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
