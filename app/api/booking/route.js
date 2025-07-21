import { NextResponse } from "next/server";
import connectMongoDB from "@/lib/mongodb";
import Booking from "@/models/booking";

export async function POST(request) {
  try {
    // Parse request body
    const {
      name,
      email,
      phone,
      roomType,
      checkIn,
      checkOut,
    } = await request.json();

    // Connect to MongoDB
    await connectMongoDB();

    // Create new booking
    const newBooking = await Booking.create({
      name,
      email,
      phone,
      roomType,
      checkIn,
      checkOut,
    });

    // Success response
    return NextResponse.json(
      {
        success: true,
        message: "Booking successful",
        booking: newBooking,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("❌ Booking error:", error);

    // Error response
    return NextResponse.json(
      {
        success: false,
        message: "Booking failed",
        error: error.message || "Unknown error",
      },
      { status: 500 }
    );
  }
}
