import { useReducer } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import BookingPage from './components/BookingPage';
import Footer from './components/Footer';
import Header from './components/Header';
import HomePage from './components/HomePage';
import { convertDateObjectToSimpleDateString, getYesterdayDate } from './utils/utility';

const dailyAvailableTimes = ['11:30', '12:00', '12:30', '13:00', '13:30',
  '14:00', '19:30', '20:00', '20:30', '21:00', '21:30', '22:00'];

const totalAvailableTimes = new Map();

const reducerFunction = (state, action) => {
  const bookingDate = convertDateObjectToSimpleDateString(action.booking.date);
  const bookingTime = action.booking.time;
  const availableTimesOfDate = state.get(bookingDate);
  const newAvailableTimes = availableTimesOfDate.filter(time => time !== bookingTime);

  const newState = new Map(state);
  newState.set(bookingDate, newAvailableTimes);
  
  return newState;
}

const initializeAvailableTimes = () => {
  const date = getYesterdayDate();
  for (let x = 0; x < 13; x++) {
      date.setDate(date.getDate() + 1);
      totalAvailableTimes.set(convertDateObjectToSimpleDateString(date),
          new Array(...dailyAvailableTimes));
  }
}

initializeAvailableTimes();

function App() {
  const [availableTimesState, dispatch] = useReducer(reducerFunction, totalAvailableTimes);

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
