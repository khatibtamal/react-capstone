import { Route, Routes } from 'react-router-dom';
import './About.css';
import './App.css';
import './Footer.css';
import './LittleLemonBio.css';
import './Nav.css';
import './OnlineDeliveryMenuCard.css';
import './PromoWeeksSpecials.css';
import './ReserveTablePromo.css';
import './Testimonials.css';
import './TestimonialsCard.css';
import BookingPage from './components/BookingPage';
import Footer from './components/Footer';
import Header from './components/Header';
import HomePage from './components/HomePage';

function App() {
  return (
    <>
      <Header />
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/#aboutSection" element={<HomePage />}></Route>
          <Route path="/bookings" element={<BookingPage />}></Route>
          <Route path="/#orderOnlineSection" element={<HomePage />}></Route>
        </Routes>
      <Footer />
    </>
  );
}

export default App;
