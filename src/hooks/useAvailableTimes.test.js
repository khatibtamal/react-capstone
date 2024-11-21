import { convertDateObjectToSimpleDateString, getTodaysDate } from "../utils/utility";
import useAvailableTimes from "./useAvailableTimes";

describe('Available times initialization', () => {
    test('Available times is 14', () => {
        const { initializeAvailableTimes } = useAvailableTimes();
        const availableTimes = initializeAvailableTimes();
    
        expect(availableTimes.size).toBe(14);
    })

    test('Available times is exactly two weeks from current date', () => {
        const date = getTodaysDate();

        const { initializeAvailableTimes } = useAvailableTimes();
        const availableTimes = initializeAvailableTimes();
    
        availableTimes.forEach((value, key) => {
            expect(key).toBe(convertDateObjectToSimpleDateString(date));
            date.setDate(date.getDate() + 1);
        });
    })
})

describe('Reducer Function', () => {
    test('Reducer Function updates available times correctly', () => {
        const { reducerFunction, initializeAvailableTimes } = useAvailableTimes();
        const availableTimes = initializeAvailableTimes();
    
        const today = getTodaysDate();
        const timesForToday = availableTimes.get(convertDateObjectToSimpleDateString(today));

        const action = {
            booking: {
                date: today,
                time: timesForToday[0]
            }
        }

        const newState = reducerFunction(availableTimes, action);

        expect(newState.get(convertDateObjectToSimpleDateString(today))).toEqual(timesForToday.slice(1));
    })
})
