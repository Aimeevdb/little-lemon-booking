import { useNavigate } from "react-router-dom";
import "../styles/components/booking.css";

export default function BookingPage() {
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    navigate("/confirmation");
  }

  return (
    <main className="booking-page">
      <h1>Reserve a Table</h1>

      <form className="booking-form" onSubmit={handleSubmit}>

        {/* Date */}
        <div className="form-field">
          <label htmlFor="res-date">Date</label>
          <input
            type="date"
            id="res-date"
            name="date"
            required
          />
        </div>

        {/* Time */}
        <div className="form-field">
          <label htmlFor="res-time">Time</label>
          <input
            type="time"
            id="res-time"
            name="time"
            required
          />
        </div>

        {/* Number of Guests */}
        <div className="form-field">
          <label htmlFor="guests">Number of Guests</label>
          <input
            type="number"
            id="guests"
            name="guests"
            min="1"
            max="10"
            required
          />
        </div>

        {/* Occasion */}
        <div className="form-field">
          <label htmlFor="occasion">Occasion</label>
          <select id="occasion" name="occasion">
            <option>None</option>
            <option>Birthday</option>
            <option>Anniversary</option>
          </select>
        </div>

        {/* Name */}
        <div className="form-field">
          <label htmlFor="name">Your Name</label>
          <input
            type="text"
            id="name"
            name="name"
            required
          />
        </div>

        {/* Email */}
        <div className="form-field">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            required
          />
        </div>

        {/* Submit */}
        <button type="submit" className="submit-button">
          Confirm Reservation
        </button>
      </form>
    </main>
  );
}