
import { NextRequest, NextResponse } from 'next/server'

// Dummy rooms and bookings
const allRooms = [101, 102, 103, 104, 105]

const existingBookings = [
  { roomId: 101, from: '2025-07-08', to: '2025-07-10' },
  { roomId: 103, from: '2025-07-07', to: '2025-07-09' },
]

function isOverlapping(aStart: string, aEnd: string, bStart: string, bEnd: string) {
  return !(aEnd <= bStart || aStart >= bEnd)
}

export async function POST(req: NextRequest) {
  const body = await req.json()
  const { checkIn, checkOut } = body

  if (!checkIn || !checkOut) {
    return NextResponse.json({ error: 'Missing dates' }, { status: 400 })
  }

  const checkInDate = new Date(checkIn)
  const checkOutDate = new Date(checkOut)

  const unavailableRooms = existingBookings
    .filter((booking) =>
      isOverlapping(
        checkInDate.toISOString().split('T')[0],
        checkOutDate.toISOString().split('T')[0],
        booking.from,
        booking.to
      )
    )
    .map((b) => b.roomId)

  const availableRooms = allRooms.filter((id) => !unavailableRooms.includes(id))

  return NextResponse.json({ availableRooms, unavailableRooms })
}
