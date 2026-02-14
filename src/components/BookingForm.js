import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { submitAPI } from "../api";
import "../styles/components/booking.css";
import Dropdown from "./Dropdown";
import restaurantImg from "../assets/restaurant.jpg";

export default function BookingForm({ availableTimes, dispatch }) {
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

  const [error, setError] = useState("");

  function handleChange(e) {
    const { id, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));

    if (id === "date") {
      dispatch({
        type: "UPDATE_TIMES",
        payload: value,
      });
    }
  }

  function handleSubmit(e) {
    e.preventDefault();

    const requiredFields = ["name", "email", "date", "time", "guests"];
    const missing = requiredFields.filter((field) => !formData[field]);

    if (missing.length > 0) {
      setError("Please fill in all required fields.");
      return;
    }

    const success = submitAPI(formData);

    if (success) {
      setError("");
      navigate("/confirmation", { state: formData });
    } else {
      setError("Something went wrong. Please try again.");
    }
  }

  return (
    <section className="reservation-section">
      <div className="reservation-content">
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
            <select
              id="time"
              value={formData.time}
              onChange={handleChange}
              required
            >
              <option value="">Select a time</option>
              {availableTimes.map((time) => (
                <option key={time} value={time}>
                  {time}
                </option>
              ))}
            </select>
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

        <div className="reservation-image">
          <img src={restaurantImg} alt="Restaurant seating" />
        </div>
      </div>
    </section>
  );
}