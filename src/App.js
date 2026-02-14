import './App.css';
import Header from './Header';
import Main from './Main';
import About from './About';
import Footer from './Footer';
import BookingPage from './pages/BookingPage';
import BookingSummary from "./components/BookingSummary";
import ConfirmationPage from './pages/ConfirmationPage';
import { Routes, Route } from 'react-router-dom';
import './styles/global.css';

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={
          <>
            <Main />
            <About />
          </>
        } />

        <Route path="/booking" element={<BookingPage />} />
        <Route path="/confirmation" element={<ConfirmationPage />} />
        <Route path="/summary" element={<BookingSummary />} />

      </Routes>

      <Footer />
    </>
  );
}

export default App;