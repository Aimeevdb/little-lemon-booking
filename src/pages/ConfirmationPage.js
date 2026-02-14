import { useLocation, Link } from "react-router-dom";
import "../styles/components/confirmation.css";

export default function ConfirmationPage() {
  const location = useLocation();
  const formData = location.state || {}; // get data passed from the booking form

  return (
    <main className="confirmation-page">
      <div className="confirmation-card">
        <h2>Reservation Confirmed!</h2>
        <p>Thank you, {formData.name}!</p>

        <div className="confirmation-details">
          <p><strong>Email:</strong> {formData.email}</p>
          <p><strong>Phone:</strong> {formData.phone}</p>
          <p><strong>Date:</strong> {formData.date}</p>
          <p><strong>Time:</strong> {formData.time}</p>
          <p><strong>Guests:</strong> {formData.guests}</p>
          {formData.occasion && <p><strong>Occasion:</strong> {formData.occasion}</p>}
        </div>

        <Link to="/" className="btn-primary">Back to Home</Link>
      </div>
    </main>
  );
}
