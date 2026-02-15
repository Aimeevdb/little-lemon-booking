import "./styles/global.css";   // ⭐ Restores ALL styling

import { Routes, Route, useNavigate } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";
import BookingPage from "./pages/BookingPage";
import ConfirmationPage from "./pages/ConfirmationPage";
import { submitAPI } from "./api";

function App() {
  const navigate = useNavigate();

function submitForm(formData) {
  const success = submitAPI(formData);
  if (success) {
    navigate("/confirmation", { state: formData });  // ⭐ send data to confirmation
  }
}
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Main />} />
        <Route
          path="/booking"
          element={<BookingPage submitForm={submitForm} />}
        />
        <Route path="/confirmation" element={<ConfirmationPage />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;