import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/components/booking.css";
import Dropdown from "./Dropdown";
import restaurantImg from "../assets/restaurant.jpg"; // adjust path if needed

export default function BookingForm() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    date: "",
    time: "",
    guests: "",
    occasion: "",
  });

  function handleChange(e) {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    navigate("/confirmation", { state: formData });
  }

  return (
    <section className="reservation-section">
      <div className="reservation-content">

        {/* FORM CARD */}
        <form className="reservation-card" onSubmit={handleSubmit}>
          <h2>Reserve a Table</h2>
          <p>Book your dining experience</p>

          <div className="form-field">
            <label htmlFor="date">Date</label>
            <input
              type="date"
              id="date"
              value={formData.date}
              onChange={handleChange}
            />
          </div>

          <div className="form-field">
            <label htmlFor="time">Time</label>
            <input
              type="time"
              id="time"
              value={formData.time}
              onChange={handleChange}
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
            />
          </div>

          <div className="form-field">
            <label>Occasion</label>
            <Dropdown
              label="Select occasion"
              options={["Birthday", "Anniversary", "Other"]}
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
