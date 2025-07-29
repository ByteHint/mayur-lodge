
import { NextRequest, NextResponse } from 'next/server'

// Dummy
const allRooms = [101, 102, 103, 104, 105]

const existingBookings = [
  { roomId: 101, from: '2025-07-08', to: '2025-07-10' },
  { roomId: 103, from: '2025-07-07', to: '2025-07-09' },
]

export async function POST(req: NextRequest) {
  const body = await req.json()
  const { checkIn, checkOut } = body

  if (!checkIn || !checkOut) {
    return NextResponse.json({ error: 'Missing dates' }, { status: 400 })
  }

  const checkInDate = new Date(checkIn)
  const checkOutDate = new Date(checkOut)

  const unavailableRooms = existingBookings
  .filter((booking) => {
    const bookingStart = new Date(booking.from);
    const bookingEnd = new Date(booking.to);

    return checkInDate < bookingEnd && checkOutDate > bookingStart;
  })
  .map((b) => b.roomId);


  const availableRooms = allRooms.filter((id) => !unavailableRooms.includes(id))

  return NextResponse.json({ availableRooms, unavailableRooms })
}
