import { useReducer } from "react";
import BookingForm from "../components/BookingForm";
import "../styles/components/booking.css";

// Get API function from the global window object
import { fetchAPI } from "../api"; // adjust path if needed

// Initialize available times for today's date
const initializeTimes = () => {
  const today = new Date();
  return fetchAPI(today);
};

// Update available times when date changes
const updateTimes = (state, action) => {
  if (action.type === "UPDATE_TIMES") {
    return fetchAPI(new Date(action.payload));
  }
  return state;
};

export default function BookingPage() {
  const [availableTimes, dispatch] = useReducer(
    updateTimes,
    [],
    initializeTimes
  );

  return (
    <main className="booking-page">
      <BookingForm
        availableTimes={availableTimes}
        dispatch={dispatch}
      />
    </main>
  );
}
