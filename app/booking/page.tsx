
"use client"
import { useState } from "react";

export default function BookingPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    checkIn: "",
    checkOut: "",
    roomType: "Single",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  try {
    const res = await fetch('/api/booking', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });

    const text = await res.text(); // Get raw response
    console.log("📦 Raw response:", text);

    try {
      const data = JSON.parse(text);
      console.log("✅ Parsed response:", data);

      if (data.success) {
        alert("✅ Booking confirmed!");
      } else {
        alert("⚠️ Booking failed: " + data.error || "Unknown error");
      }
    } catch (jsonError) {
      console.error("❌ JSON Parse Error:", jsonError);
      alert("Server response was not JSON.");
    }
  } catch (err) {
    console.error("❌ Network Error:", err);
    alert("Error booking room.");
  }
};

  return (
    <div className="max-w-xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Book a Room</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input name="name" type="text" placeholder="Your Name" onChange={handleChange} className="w-full p-2 border rounded" />
        <input name="email" type="email" placeholder="Your Email" onChange={handleChange} className="w-full p-2 border rounded" />
        <input name="checkIn" type="date" onChange={handleChange} className="w-full p-2 border rounded" />
        <input name="checkOut" type="date" onChange={handleChange} className="w-full p-2 border rounded" />
        <select name="roomType" onChange={handleChange} className="w-full p-2 border rounded">
          <option>Single</option>
          <option>Double</option>
          <option>Suite</option>
        </select>
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Book Now</button>
      </form>
    </div>
  );
}
