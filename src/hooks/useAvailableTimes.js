import { convertDateObjectToSimpleDateString, getYesterdayDate } from "../utils/utility";

const dailyAvailableTimes = ['11:30', '12:00', '12:30', '13:00', '13:30',
'14:00', '19:30', '20:00', '20:30', '21:00', '21:30', '22:00'];

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
            new Array(...dailyAvailableTimes));
    }
    return totalAvailableTimes;
}

export default function useAvailableTimes() {
    return { reducerFunction, initializeAvailableTimes };
}
