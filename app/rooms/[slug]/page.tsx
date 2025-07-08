import { Metadata } from "next";
import localFont from "next/font/local";
import Image from "next/image";
import Link from "next/link";
import { FaWifi, FaRegBell, FaTv, FaUsers } from "react-icons/fa";

// Load font
const kugile = localFont({
  src: "../../fonts/Kugile_Demo.ttf",
  variable: "--font-kugile",
  display: "swap",
});

// Room Data
const roomDetailsData = [
  {
    slug: "regular-room",
    title: "Regular Room",
    description:
      "A comfortable and affordable room, perfect for solo travelers or short stays. Equipped with basic amenities and a cozy atmosphere.",
    price: "₹899 / night",
    features: [
      { name: "Free Wi-Fi", icon: FaWifi },
      { name: "24/7 Room Service", icon: FaRegBell },
      { name: "Entertainment", icon: FaTv },
      { name: "Accommodates 1-2 people", icon: FaUsers },
    ],
    mainImage: "/Room1.jpg",
    gallery: ["/pic3.jpg", "/pic4.jpg", "/pic5.jpg"],
  },
  {
    slug: "deluxe-room",
    title: "Deluxe Room",
    description:
      "Indulge in the luxury of our deluxe room, designed with elegant interiors and plush comforts.",
    price: "₹1799 / night",
    features: [
      { name: "High-speed Wi-Fi", icon: FaWifi },
      { name: "24/7 Room Service", icon: FaRegBell },
      { name: "Entertainment", icon: FaTv },
      { name: "Accommodates 2-3 people", icon: FaUsers },
    ],
    mainImage: "/Room2.jpg",
    gallery: ["/Room2.jpg", "/pic6.jpg", "/pic7.jpg"],
  },
  {
    slug: "family-hut",
    title: "Family Hut",
    description:
      "Our Family Hut offers ample space and privacy, perfect for families or small groups.",
    price: "₹2299 / night",
    features: [
      { name: "Free Wi-Fi", icon: FaWifi },
      { name: "24/7 Room Service", icon: FaRegBell },
      { name: "Entertainment", icon: FaTv },
      { name: "Accommodates 4-6 people", icon: FaUsers },
    ],
    mainImage: "/Room3.jpg",
    gallery: ["/Room3.jpg", "/pic4.jpg", "/pic7.jpg"],
  },
];

// ✅ Generate Static Paths
export async function generateStaticParams() {
  return roomDetailsData.map((room) => ({
    slug: room.slug,
  }));
}

// ✅ Generate Metadata
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const room = roomDetailsData.find((r) => r.slug === params.slug);
  return {
    title: room ? `Mayur Lodge - ${room.title}` : "Mayur Lodge - Room Details",
    description: room?.description || "Room details at Mayur Lodge.",
  };
}

// ✅ Final Page — no unnecessary types
export default function Page({ params }: { params: { slug: string } }) {
  const room = roomDetailsData.find((r) => r.slug === params.slug);

  if (!room) {
    return (
      <div className="min-h-screen flex items-center justify-center text-lg text-gray-700">
        Room not found.
      </div>
    );
  }

  return (
    <div className={`min-h-screen bg-[#F8F8F8] pt-28 px-4 ${kugile.variable}`}>
      <div className="max-w-4xl mx-auto bg-white p-6 rounded shadow">
        <h1 className={`${kugile.className} text-4xl mb-4 text-center`}>
          {room.title}
        </h1>
        <div className="relative w-full h-80 mb-6 rounded overflow-hidden">
          <Image
            src={room.mainImage}
            alt={room.title}
            fill
            className="object-cover"
          />
        </div>
        <p className="text-lg mb-4">{room.description}</p>
        <div className="text-xl font-semibold text-red-600 mb-4">{room.price}</div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {room.features.map((f, i) => (
            <div key={i} className="bg-gray-100 p-4 rounded text-center">
              <f.icon className="text-2xl mb-2" />
              <p>{f.name}</p>
            </div>
          ))}
        </div>

        {room.gallery.length > 1 && (
          <>
            <h2 className="text-2xl mt-8 mb-4">Gallery</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {room.gallery.map((img, i) => (
                <div key={i} className="relative h-32 sm:h-40 rounded overflow-hidden">
                  <Image
                    src={img}
                    alt={`Gallery ${i}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </>
        )}

        <div className="mt-8 text-center">
          <Link
            href="/"
            className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
