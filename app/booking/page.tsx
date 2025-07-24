"use client";
import { useState } from "react";

export default function BookingPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    checkIn: "",
    checkOut: "",
    roomType: "Regular",
    price: "₹899/per night",
  });

  const getPriceFromRoomType = (roomType: string) => {
    switch (roomType) {
      case "Deluxe":
        return "₹1799/per night";
      case "Family Hut":
        return "₹2500/per night";
      default:
        return "₹899/per night";
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    // Update price automatically when roomType changes
    if (name === "roomType") {
      const newPrice = getPriceFromRoomType(value);
      setForm((prevForm) => ({
        ...prevForm,
        roomType: value,
        price: newPrice,
      }));
    } else {
      setForm((prevForm) => ({
        ...prevForm,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (data.success) {
        alert("✅ Booking successful & confirmation email sent!");
      } else {
        alert("❌ Booking failed: " + (data.error || "Unknown error"));
      }
    } catch (err) {
      console.error("❌ Network error:", err);
      alert("Something went wrong.");
    }
  };

  return (
    <div className="max-w-xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Book a Room</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="name"
          type="text"
          placeholder="Your Name"
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <input
          name="email"
          type="email"
          placeholder="Your Email"
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <input
          name="checkIn"
          type="date"
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <input
          name="checkOut"
          type="date"
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <select
          name="roomType"
          value={form.roomType}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        >
          <option value="Regular">Regular</option>
          <option value="Deluxe">Deluxe</option>
          <option value="Family Hut">Family Hut</option>
        </select>
        <input
          name="price"
          type="text"
          value={form.price}
          disabled
          className="w-full p-2 border rounded bg-gray-100 text-gray-700"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Book Now
        </button>
      </form>
    </div>
  );
}
