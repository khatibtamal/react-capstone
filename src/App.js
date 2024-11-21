import { useReducer } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import BookingPage from './components/BookingPage';
import Footer from './components/Footer';
import Header from './components/Header';
import HomePage from './components/HomePage';
import useAvailableTimes from './hooks/useAvailableTimes';

function App() {
  const { reducerFunction, initializeAvailableTimes } = useAvailableTimes();
  const [availableTimesState, dispatch] = useReducer(reducerFunction, initializeAvailableTimes());

  return (
    <>
      <Header />
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/#aboutSection" element={<HomePage />}></Route>
          <Route path="/bookings" element={<BookingPage availableTimesState={availableTimesState} dispatch={dispatch} />}></Route>
          <Route path="/#orderOnlineSection" element={<HomePage />}></Route>
        </Routes>
      <Footer />
    </>
  );
}

export default App;
