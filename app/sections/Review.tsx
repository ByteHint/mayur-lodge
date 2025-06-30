'use client';

import React from 'react';
import localFont from "next/font/local";
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import FourStars from '../components/FourStar';
import FiveStar from '../components/FiveStar';
import ThreeStar from '../components/ThreeStar';

const kugile = localFont({
  src: '../fonts/Kugile_Demo.ttf',
  variable: '--font-kugile',
  display: 'swap',
});

const reviews = [
  {
    name: 'Aman Joshi',
    location: 'Mumbai, India',
    avatar: 'https://i.pravatar.cc/150?img=1',
    rating: 4,
    date: 'Jan 28, 2025',
    title: 'Amazing Comfort.',
    comment: 'I had a comfortable stay — the bed was soft, and the room felt clean and welcoming. The staff at the front desk were super friendly and even helped me arrange a cab at 5 AM. Only thing: the AC took a while to cool down, but once it did, the room was perfect. Would definitely come back for the service alone.',
  },
  {
    name: 'Priya Sharma',
    location: 'Pune, India',
    avatar: 'https://i.pravatar.cc/150?img=2',
    rating: 5,
    date: 'Dec 4, 2025',
    title: 'Very Convenient.',
    comment: 'Loved how central the hotel was — everything I needed was just a short walk away. The breakfast buffet was surprisingly good, especially the fresh fruit and omelette station. Only minor gripe: the coffee could’ve been hotter, but that’s me being picky. Great value for the location!',
  },
  {
    name: 'Ravi Deshmukh',
    location: 'Nashik, India',
    avatar: 'https://i.pravatar.cc/150?img=3',
    rating: 3,
    date: 'Aug 17, 24',
    title: 'Hygienic',
    comment: 'The room was neat, and housekeeping did a great job every day. I liked the small touches like fresh towels and bottled water. The only downside was the Wi-Fi — it worked fine in the lobby but was a bit spotty in my room. Still, for the price, it’s a solid choice if you are not expecting luxury.',
  },
];

export default function UserReview() {
  return (
    <section id="review" className="bg-[#FFFFFF] text-[#3C3C3C] py-16 px-4 sm:px-6 md:px-12 lg:px-24">
      <h2 className={`${kugile.className} text-3xl sm:text-4xl md:text-5xl md:mb-10 mb-2 text-start tracking-wide0r`}>
        Guest reviews
      </h2>

      <div className="flex flex-wrap gap-6 justify-center">
        {reviews.map((r, idx) => (
          <div
            key={idx}
            className="bg-[#F8F8F8] max-w-[360px] w-full rounded-2xl p-6 flex flex-col gap-4 shadow-sm"
          >
            {/* Header */}
            <div className="flex justify-between items-start">
              <div className="flex items-center gap-3">
                <Avatar>
                  <AvatarImage src={r.avatar} />
                  <AvatarFallback>
                    {r.name
                      .split(' ')
                      .map((n) => n[0])
                      .join('')
                      .slice(0, 2)
                      .toUpperCase()}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="text-lg font-semibold">{r.name}</h3>
                  <p className="text-sm text-gray-600">{r.location}</p>
                  <div className="flex justify-start items-center">
                    {r.rating === 5 && <FiveStar />}
                    {r.rating === 4 && <FourStars />}
                    {r.rating === 3 && <ThreeStar />}
                  </div>
                </div>
              </div>
              <span className="text-sm text-gray-500">{r.date}</span>
            </div>

            {/* Title & Comment */}
            <h4 className="text-md font-semibold">{r.title}</h4>
            <p className="text-sm text-gray-700">{r.comment}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
