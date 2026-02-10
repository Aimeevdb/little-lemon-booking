import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/components/booking.css";
import Dropdown from "./Dropdown";


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
    <form className="booking-form" onSubmit={handleSubmit}>
      <div className="form-field">
        <label htmlFor="date">Date</label>
        <input type="date" id="date" value={formData.date} onChange={handleChange} />
      </div>
      <div className="form-field">
        <label htmlFor="time">Time</label>
        <input type="time" id="time" value={formData.time} onChange={handleChange} />
      </div>
      <div className="form-field">
        <label htmlFor="guests">Guests</label>
        <input type="number" id="guests" value={formData.guests} onChange={handleChange} />
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

      <button type="submit">Confirm Reservation</button>
    </form>
  );
}