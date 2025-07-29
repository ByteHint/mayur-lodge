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
      "Twin Bed with balcony": 2500,
    };
    const pricePerNight = priceMap[roomType] || 899;
    const daysStayed = Math.floor(
        (new Date(checkOut).getTime() - new Date(checkIn).getTime()) /
          (1000 * 60 * 60 * 24)
      );

      const totalPrice = daysStayed * pricePerNight;


    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS, 
      },
    });

    const emailHTML = `
      <div style="font-family: Arial; padding: 20px; background: #f9f9f9;">
        <h2 style="color:#2d6cdf;">Pratik Lodge - Booking Confirmation</h2>
        <p>Dear ${name},</p>
        <p>Greetings!</p>
        <p>We are pleased to confirm your reservation as per our discussion. Below are the details of your booking:</p>
        <table style="width:100%; max-width:500px;">
          <tr><td><strong>Booking ID:</strong></td><td>${bookingId}</td></tr>
          <tr><td><strong>Check-In:</strong></td><td>${checkIn}</td></tr>
          <tr><td><strong>Check-Out:</strong></td><td>${checkOut}</td></tr>
          <tr><td><strong>Duration of Stay:</strong></td><td>${daysStayed} days</td></tr>
          <tr><td><strong>Meal Plan:</strong></td><td>Breakfast and Dinner (Vegetarian and Non-Vegetarian options)</td></tr>
          <tr><td><strong>Tariff:</strong></td><td>₹${pricePerNight} per night</td></tr>
          <tr><td><strong>Total Cost:</strong></td><td>₹${totalPrice}</td></tr>
        </table>
        <p>Please let us know if you have any special requirements. We look forward to hosting you and ensuring a comfortable stay.</p>
        <p>Thank you for choosing <strong>Pratik Lodge</strong>!</p>
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
    console.error(" Booking error:", error);

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
