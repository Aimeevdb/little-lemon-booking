import { useNavigate } from "react-router-dom";

export default function ConfirmationPage() {
  const navigate = useNavigate();

  return (
    <main className="confirmation-page">
      <h1>Reservation Confirmed</h1>
      <p className="confirmation-subtitle">
        Your table has been successfully reserved. We look forward to serving you.
      </p>

      {/* Reservation Summary */}
      <section className="reservation-summary">
        <h2>Reservation Details</h2>

        <ul className="summary-list">
          <li>
            <strong>Date:</strong> {/* placeholder until we pass real data */}
            <span>—</span>
          </li>
          <li>
            <strong>Time:</strong>
            <span>—</span>
          </li>
          <li>
            <strong>Guests:</strong>
            <span>—</span>
          </li>
          <li>
            <strong>Occasion:</strong>
            <span>—</span>
          </li>
          <li>
            <strong>Name:</strong>
            <span>—</span>
          </li>
          <li>
            <strong>Email:</strong>
            <span>—</span>
          </li>
        </ul>
      </section>

      {/* Action Buttons */}
      <div className="confirmation-actions">
        <button onClick={() => navigate(-1)} className="back-button">
          Back
        </button>

        <button onClick={() => navigate("/booking")} className="modify-button">
          Modify Reservation
        </button>

        <button onClick={() => navigate("/")} className="new-res-button">
          Make Another Reservation
        </button>
      </div>
    </main>
  );
}