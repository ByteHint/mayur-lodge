import { NextResponse } from "next/server";
import connectMongoDB from "@/lib/mongodb";
import Booking from "@/models/booking";
import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const { name, email, phone, roomType, checkIn, checkOut } = await request.json();

    await connectMongoDB();

    const newBooking = await Booking.create({
      name,
      email,
      phone,
      roomType,
      checkIn,
      checkOut,
    });

    const bookingId = `PRATIK-${Math.floor(100000 + Math.random() * 900000)}`;

    const priceMap = {
      Regular: 899,
      Deluxe: 1799,
      "Family Hut": 2500,
    };
    const pricePerNight = priceMap[roomType] || 899;
    const nights =
      (new Date(checkOut).getTime() - new Date(checkIn).getTime()) /
      (1000 * 60 * 60 * 24);
    const totalPrice = nights * pricePerNight;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS, 
      },
    });

    const emailHTML = `
      <div style="font-family: Arial, sans-serif; padding: 20px; background: #f9f9f9;">
        <h2 style="color:#2d6cdf;">Pratik Lodge - Booking Confirmation</h2>
        <p>Dear ${name},</p>
        <p>Your booking has been confirmed. Here are your details:</p>
        <table style="width:100%; max-width:500px; border-collapse: collapse;">
          <tr><td><strong>Booking ID:</strong></td><td>${bookingId}</td></tr>
          <tr><td><strong>Room Type:</strong></td><td>${roomType}</td></tr>
          <tr><td><strong>Check-In:</strong></td><td>${checkIn}</td></tr>
          <tr><td><strong>Check-Out:</strong></td><td>${checkOut}</td></tr>
          <tr><td><strong>Total Price:</strong></td><td>₹${totalPrice}</td></tr>
        </table>
        <p>Thank you for choosing <strong> Pratik Lodge</strong>!</p>
      </div>
    `;

    await transporter.sendMail({
      from: `"Pratik Lodge" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: `Booking Confirmation - ${bookingId}`,
      html: emailHTML,
    });

    return NextResponse.json(
      {
        success: true,
        message: "Booking successful & confirmation email sent",
        booking: newBooking,
        bookingId,
        totalPrice,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("❌ Booking error:", error);

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
