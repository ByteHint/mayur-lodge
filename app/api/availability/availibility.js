import Booking from "../db";

export default async function handler(req, res) {
  await dbConnect();

  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  const { roomId, checkIn, checkOut } = req.query;

  if (!roomId || !checkIn || !checkOut) {
    return res.status(400).json({ error: "Missing query parameters" });
  }

  try {
    const existingBookings = await Booking.find({
      room: roomId,
      status: "confirmed",
      $or: [
        {
          checkIn: { $lte: new Date(checkOut) },
          checkOut: { $gte: new Date(checkIn) },
        },
      ],
    });

    const isAvailable = existingBookings.length === 0;

    return res.status(200).json({ available: isAvailable });
  } catch (err) {
    console.error("Error checking availability:", err);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}
