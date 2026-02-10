import BookingForm from "../components/BookingForm";
import "../styles/components/booking.css";

export default function BookingPage() {
  return (
    <main className="booking-page">
      <h1>Reserve a Table</h1>
      <BookingForm />
    </main>
  );
}