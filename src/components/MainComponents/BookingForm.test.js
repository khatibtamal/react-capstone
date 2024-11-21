import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import React, { act } from "react";
import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import App from "../../App";
import useAvailableTimes from "../../hooks/useAvailableTimes";
import { convertDateObjectToSimpleDateString, convertTo12Hour, getTodaysDate } from "../../utils/utility";
import BookingMain from "../BookingPage";

const { reducerFunction, initializeAvailableTimes } = useAvailableTimes();

function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
}

test('Renders the BookingForm heading', () => {
    render(
        <MemoryRouter initialEntries={['/bookings']}>
            <App />
        </MemoryRouter>
    );
    
    const headingElement = screen.getByText("Reserve a table");
    expect(headingElement).toBeInTheDocument();
})

test('User submits validated booking form', async () => {
    const mockDispatch = jest.fn();
    const availableTimes = initializeAvailableTimes();

    render(
        <BrowserRouter>
            <BookingMain availableTimesState={availableTimes} dispatch={mockDispatch} />
        </BrowserRouter>
    );

    act(() => {
        fireEvent.click(screen.getByRole("button", { name: "Book Now" }));
    });
    
    await waitFor(() => {
        expect(screen.getAllByText("Required")[0]).toBeInTheDocument();
    });

    act(() => {
        fireEvent.click(screen.getByText("Time"));
    });
    
    const todayDateString = convertDateObjectToSimpleDateString(getTodaysDate());
    const todaysTimesArr = availableTimes.get(todayDateString);
    const todayFirstTime = convertTo12Hour(todaysTimesArr[0]);

    await waitFor(() => {
        expect(screen.getByText(todayFirstTime)).toBeInTheDocument();
    });

    act(() => {
        const timeButton = screen.getByText(todayFirstTime);
        fireEvent.click(timeButton);
    });

    act(() => {
        fireEvent.change(firstName, { target: { value: "John" } });
        fireEvent.change(lastName, { target: { value: "Doe" } });
        fireEvent.change(email, { target: { value: "jhdf@jh.com" } });
        fireEvent.change(phone, { target: { value: "1234567890" } });
    });
    
    await delay(1000);

    act(() => {
        fireEvent.click(screen.getByRole("button", { name: "Book Now" }));
    });
    
    await waitFor(() => {
        expect(screen.getByText("Reservation Complete!")).toBeInTheDocument();
    });
})
