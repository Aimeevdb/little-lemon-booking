import "../styles/components/booking.css";

const mockBookingData = [
  {
    name: "Aimee",
    email: "aimee@example.com",
    date: "2026-02-14",
    time: "18:00",
    guests: 2,
    occasion: "Birthday",
  },
  {
    name: "Leo",
    email: "leo@example.com",
    date: "2026-02-15",
    time: "19:30",
    guests: 4,
    occasion: "Anniversary",
  },
];

export default function BookingSummary() {
  return (
    <section className="reservation-section">
      <div className="reservation-content">
        <div className="reservation-card">
          <h2>Booking Summary</h2>
          <p>Recent reservations</p>

          <table className="booking-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Date</th>
                <th>Time</th>
                <th>Guests</th>
                <th>Occasion</th>
              </tr>
            </thead>
            <tbody>
              {mockBookingData.map((entry, index) => (
                <tr key={index}>
                  <td>{entry.name}</td>
                  <td>{entry.email}</td>
                  <td>{entry.date}</td>
                  <td>{entry.time}</td>
                  <td>{entry.guests}</td>
                  <td>{entry.occasion}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}