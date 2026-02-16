import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/components/booking.css";
import Dropdown from "./Dropdown";
import restaurantImg from "../assets/restaurant.jpg";

export default function BookingForm({ availableTimes, dispatch, submitForm }) {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    guests: "",
    occasion: "",
    seating: "",
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

    const requiredFields = ["name", "email", "date", "time", "guests", "seating"];
    const missing = requiredFields.filter((field) => !formData[field]);

    if (missing.length > 0) {
      setError("Please fill in all required fields.");
      return;
    }

    setError("");
    submitForm(formData); // Main.js handles API + navigation
  }

  // ✅ Step 2: React client-side validation
  const isFormValid =
    formData.name.trim().length >= 2 &&
    formData.email.trim() !== "" &&
    formData.date !== "" &&
    formData.time !== "" &&
    Number(formData.guests) >= 1 &&
    formData.seating !== "";

  return (
    <section className="reservation-section">
      <div className="reservation-content">
<form
  className="reservation-card"
  onSubmit={handleSubmit}
  data-testid="booking-form"
>          <h2>Reserve a Table</h2>
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
              minLength="2"
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
              pattern="^(\(\d{3}\)\s?|\d{3}-?)\d{3}-?\d{4}$"
              placeholder="123-456-7890 or (123) 456-7890"
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
              min={new Date().toISOString().split("T")[0]}
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
              max="20"
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

          <fieldset className="form-field">
            <legend>Seating Preference</legend>

            <label>
              <input
                type="radio"
                name="seating"
                value="indoor"
                checked={formData.seating === "indoor"}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, seating: e.target.value }))
                }
                required
              />
              Indoor
            </label>

            <label>
              <input
                type="radio"
                name="seating"
                value="outdoor"
                checked={formData.seating === "outdoor"}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, seating: e.target.value }))
                }
              />
              Outdoor
            </label>
          </fieldset>

          <div className="reservation-buttons">
            <button
              type="button"
              className="btn-secondary"
              onClick={() => navigate(-1)}
            >
              Back
            </button>

            <button
              type="submit"
              className="btn-primary"
              disabled={!isFormValid} // ✅ React client-side validation
            >
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
