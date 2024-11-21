import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import React, { act } from "react";
import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import App from "../../App";
import useAvailableTimes from "../../hooks/useAvailableTimes";
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
    
    await waitFor(() => {
        expect(screen.getByText("11:30 AM")).toBeInTheDocument();
    });

    act(() => {
        const timeButton = screen.getByText("11:30 AM");
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

    const expectedAction = {
        booking: {
            date: availableTimes.entries().next().key,
            time: "11:30",
        }
    }
    
    await waitFor(() => {
        expect(screen.getByText("Reservation Complete!")).toBeInTheDocument();
    });
})
