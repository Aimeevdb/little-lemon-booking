import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/components/booking.css";
import Dropdown from "./Dropdown";
import restaurantImg from "../assets/restaurant.jpg"; // adjust path if needed

export default function BookingForm() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    guests: "",
    occasion: "",
  });

  const [error, setError] = useState(""); // to show validation or availability messages

  function handleChange(e) {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  }

  // Placeholder availability check
  function checkAvailability(date, time) {
    // Example: block 12:00 on 2026-02-12
    if (date === "2026-02-12" && time === "12:00") {
      return false;
    }
    return true;
  }

  function handleSubmit(e) {
    e.preventDefault();

    // Basic required validation
    if (!formData.name || !formData.email || !formData.date || !formData.time || !formData.guests) {
      setError("Please fill in all required fields.");
      return;
    }

    // Availability check
    if (!checkAvailability(formData.date, formData.time)) {
      setError("Sorry, that date/time is unavailable. Please choose another.");
      return;
    }

    setError(""); // clear previous errors
    navigate("/confirmation", { state: formData });
  }

  return (
    <section className="reservation-section">
      <div className="reservation-content">

        {/* FORM CARD */}
        <form className="reservation-card" onSubmit={handleSubmit}>
          <h2>Reserve a Table</h2>
          <p>Book your dining experience</p>

{error && (
  <p role="alert" aria-live="assertive" style={{ color: "red" }}>
    {error}
  </p>
)}

          <div className="form-field">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your full name"
              required
            />
          </div>

          <div className="form-field">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="you@example.com"
              required
            />
          </div>

          <div className="form-field">
            <label htmlFor="phone">Phone Number</label>
            <input
              type="tel"
              id="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="(555) 123-4567"
            />
          </div>

          <div className="form-field">
            <label htmlFor="date">Date</label>
            <input
              type="date"
              id="date"
              value={formData.date}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-field">
            <label htmlFor="time">Time</label>
            <input
              type="time"
              id="time"
              value={formData.time}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-field">
            <label htmlFor="guests">Guests</label>
            <input
              type="number"
              id="guests"
              min="1"
              value={formData.guests}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-field">
            <label>Occasion</label>
            <Dropdown
              label="Select occasion"
              options={["Birthday", "Date Night", "Anniversary", "Other"]}
              value={formData.occasion}
              onChange={(value) =>
                setFormData((prev) => ({ ...prev, occasion: value }))
              }
            />
          </div>

          {/* BUTTONS */}
          <div className="reservation-buttons">
            <button
              type="button"
              className="btn-secondary"
              onClick={() => navigate(-1)}
            >
              Back
            </button>

            <button type="submit" className="btn-primary">
              Confirm Reservation
            </button>
          </div>
        </form>

        {/* IMAGE */}
        <div className="reservation-image">
          <img src={restaurantImg} alt="Restaurant seating" />
        </div>

      </div>
    </section>
  );
}
