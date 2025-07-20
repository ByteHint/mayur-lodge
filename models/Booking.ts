import mongoose from 'mongoose';

const BookingSchema = new mongoose.Schema({
  name: String,
  email: String,
  checkIn: Date,
  checkOut: Date,
  roomType: String,
}, { timestamps: true });

export default mongoose.models.Booking || mongoose.model('Booking', BookingSchema);
