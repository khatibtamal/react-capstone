import { fetchAPI } from "../ExternalApi";
import { convertDateObjectToSimpleDateString, getTodaysDate, getYesterdayDate } from "../utils/utility";

export default function useAvailableTimes() {
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
        const totalAvailableTimes = new Map();
        const date = getYesterdayDate();
        for (let x = 0; x < 14; x++) {
            date.setDate(date.getDate() + 1);
            totalAvailableTimes.set(convertDateObjectToSimpleDateString(date),
                fetchAPI(getTodaysDate()));
        }
        return totalAvailableTimes;
    }

    return { reducerFunction, initializeAvailableTimes };
}
