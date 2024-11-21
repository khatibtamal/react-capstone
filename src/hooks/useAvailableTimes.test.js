import { convertDateObjectToSimpleDateString, getTodaysDate, getTomorrowDate } from "../utils/utility";
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

    test('Available times for every date is initialized correctly', () => {
        const { initializeAvailableTimes } = useAvailableTimes();
        const availableTimes = initializeAvailableTimes();
    
        availableTimes.forEach((value, key) => {
            expect(value).toEqual(['11:30', '12:00', '12:30', '13:00', '13:30',
                '14:00', '19:30', '20:00', '20:30', '21:00', '21:30', '22:00']);
        });
    })
})

describe('Reducer Function', () => {
    test('Reducer Function updates available times correctly', () => {
        const { reducerFunction, initializeAvailableTimes } = useAvailableTimes();
        const availableTimes = initializeAvailableTimes();
    
        const today = getTodaysDate();

        expect(availableTimes.get(convertDateObjectToSimpleDateString(today))).toEqual(['11:30', '12:00', '12:30', '13:00', '13:30',
            '14:00', '19:30', '20:00', '20:30', '21:00', '21:30', '22:00']);

        const action = {
            booking: {
                date: today,
                time: '11:30'
            }
        }

        const newState = reducerFunction(availableTimes, action);

        expect(newState.get(convertDateObjectToSimpleDateString(today))).toEqual(['12:00', '12:30', '13:00', '13:30',
            '14:00', '19:30', '20:00', '20:30', '21:00', '21:30', '22:00']);

        expect(newState.get(convertDateObjectToSimpleDateString(getTomorrowDate()))).toEqual(['11:30', '12:00', '12:30', '13:00', '13:30',
            '14:00', '19:30', '20:00', '20:30', '21:00', '21:30', '22:00']);
    })
})
