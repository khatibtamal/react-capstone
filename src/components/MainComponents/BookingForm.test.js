import { cleanup, fireEvent, render, screen, waitFor } from "@testing-library/react";
import React, { act } from "react";
import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import App from "../../App";
import useAvailableTimes from "../../hooks/useAvailableTimes";
import { convertDateObjectToSimpleDateString, convertTo12Hour, getTodaysDate } from "../../utils/utility";
import BookingMain from "../BookingPage";

const { reducerFunction, initializeAvailableTimes } = useAvailableTimes();

describe('Basic booking forms test', () => {

    afterEach(() => {
        cleanup();
        window.history.replaceState(null, "", "/");
    });

    test('Renders the BookingForm heading', () => {
        render(
            <MemoryRouter initialEntries={['/bookings']}>
                <App />
            </MemoryRouter>
        );
        
        const headingElement = screen.getByText("Reserve a table");
        expect(headingElement).toBeInTheDocument();
    })
    
    test('User submits validated booking form with all valid inputs', async () => {
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

        const firstName = screen.getByRole("textbox", { name: "First Name:" });
        const lastName = screen.getByRole("textbox", { name: "Last Name:" });
        const email = screen.getByRole("textbox", { name: "Email:" });
        const phone = screen.getByRole("textbox", { name: "Phone:" });

        
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
    
        act(() => {
            fireEvent.click(screen.getByRole("button", { name: "Book Now" }));
        });
        
        await waitFor(() => {
            expect(screen.getByText("Reservation Complete!")).toBeInTheDocument();
        });
    })
});

describe("First Name validation", () => {

    afterEach(() => {
        cleanup();
        window.history.replaceState(null, "", "/");
    });

    test('First name required', async () => {
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
            expect(screen.getAllByText("Required").length).toBe(4);
        });

        const firstName = screen.getByRole("textbox", { name: "First Name:" });
        act(() => {
            fireEvent.change(firstName, { target: { value: "John" } });
        });

        await waitFor(() => {
            expect(screen.getAllByText("Required").length).toBe(3);
        });
    });

    test('First name too long', async () => {
        const mockDispatch = jest.fn();
        const availableTimes = initializeAvailableTimes();
    
        render(
            <BrowserRouter>
                <BookingMain availableTimesState={availableTimes} dispatch={mockDispatch} />
            </BrowserRouter>
        );

        const firstName = screen.getByRole("textbox", { name: "First Name:" });
        act(() => {
            fireEvent.change(firstName, { target: { value: "sdkjhfskjhfkjshdkfjhskdjfkjsdhfkjsdhfkjshdkfjskdjhfkjsdhfkjsdfh" } });
        });
        act(() => {
            fireEvent.click(screen.getByRole("button", { name: "Book Now" }));
        });
        await waitFor(() => {
            expect(screen.getByText("Maximum 20 characters")).toBeInTheDocument();
        });
    });
});

describe("Last Name validation", () => {
    afterEach(() => {
        cleanup();
        window.history.replaceState(null, "", "/");
    });

    test('Last name required', async () => {
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
            expect(screen.getAllByText("Required").length).toBe(4);
        });

        const lastName = screen.getByRole("textbox", { name: "Last Name:" });
        act(() => {
            fireEvent.change(lastName, { target: { value: "Doe" } });
        });

        await waitFor(() => {
            expect(screen.getAllByText("Required").length).toBe(3);
        });
    });

    test('Last name too long', async () => {
        const mockDispatch = jest.fn();
        const availableTimes = initializeAvailableTimes();
    
        render(
            <BrowserRouter>
                <BookingMain availableTimesState={availableTimes} dispatch={mockDispatch} />
            </BrowserRouter>
        );

        const lastName = screen.getByRole("textbox", { name: "Last Name:" });
        act(() => {
            fireEvent.change(lastName, { target: { value: "sdkjhfskjhfkjshdkfjhskdjfkjsdhfkjsdhfkjshdkfjskdjhfkjsdhfkjsdfh" } });
        });
        act(() => {
            fireEvent.click(screen.getByRole("button", { name: "Book Now" }));
        });
        await waitFor(() => {
            expect(screen.getByText("Maximum 20 characters")).toBeInTheDocument();
        });
    });
});

describe("Email validation", () => {
    afterEach(() => {
        cleanup();
        window.history.replaceState(null, "", "/");
    });

    test('Email required', async () => {
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
            expect(screen.getAllByText("Required").length).toBe(4);
        });

        const email = screen.getByRole("textbox", { name: "Email:" });
        act(() => {
            fireEvent.change(email, { target: { value: "john@does.com" } });
        });

        await waitFor(() => {
            expect(screen.getAllByText("Required").length).toBe(3);
        });
    });

    test('Email invalid', async () => {
        const mockDispatch = jest.fn();
        const availableTimes = initializeAvailableTimes();
    
        render(
            <BrowserRouter>
                <BookingMain availableTimesState={availableTimes} dispatch={mockDispatch} />
            </BrowserRouter>
        );

        const email = screen.getByRole("textbox", { name: "Email:" });
        act(() => {
            fireEvent.change(email, { target: { value: "blah" } });
        });
        act(() => {
            fireEvent.click(screen.getByRole("button", { name: "Book Now" }));
        });
        await waitFor(() => {
            expect(screen.getByText("Invalid email address")).toBeInTheDocument();
        });
    });
});

describe("Phone validation", () => {

    afterEach(() => {
        cleanup();
        window.history.replaceState(null, "", "/");
    });

    test('Phone required', async () => {
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
            expect(screen.getAllByText("Required").length).toBe(4);
        });

        const phone = screen.getByRole("textbox", { name: "Phone:" });
        act(() => {
            fireEvent.change(phone, { target: { value: "1111111111" } });
        });

        await waitFor(() => {
            expect(screen.getAllByText("Required").length).toBe(3);
        });
    });

    test('Phone too short', async () => {
        const mockDispatch = jest.fn();
        const availableTimes = initializeAvailableTimes();
    
        render(
            <BrowserRouter>
                <BookingMain availableTimesState={availableTimes} dispatch={mockDispatch} />
            </BrowserRouter>
        );

        const phone = screen.getByRole("textbox", { name: "Phone:" });
        act(() => {
            fireEvent.change(phone, { target: { value: "1" } });
        });
        act(() => {
            fireEvent.click(screen.getByRole("button", { name: "Book Now" }));
        });
        await waitFor(() => {
            expect(screen.getByText("Can only be 10 digits.")).toBeInTheDocument();
        });
    });

    test('Phone too long', async () => {
        const mockDispatch = jest.fn();
        const availableTimes = initializeAvailableTimes();
    
        render(
            <BrowserRouter>
                <BookingMain availableTimesState={availableTimes} dispatch={mockDispatch} />
            </BrowserRouter>
        );

        const phone = screen.getByRole("textbox", { name: "Phone:" });
        act(() => {
            fireEvent.change(phone, { target: { value: "11111111111" } });
        });
        act(() => {
            fireEvent.click(screen.getByRole("button", { name: "Book Now" }));
        });
        await waitFor(() => {
            expect(screen.getByText("Can only be 10 digits.")).toBeInTheDocument();
        });
    });

    test('Phone bad pattern', async () => {
        const mockDispatch = jest.fn();
        const availableTimes = initializeAvailableTimes();
    
        render(
            <BrowserRouter>
                <BookingMain availableTimesState={availableTimes} dispatch={mockDispatch} />
            </BrowserRouter>
        );

        const phone = screen.getByRole("textbox", { name: "Phone:" });
        act(() => {
            fireEvent.change(phone, { target: { value: "asdasdasdf" } });
        });
        act(() => {
            fireEvent.click(screen.getByRole("button", { name: "Book Now" }));
        });
        await waitFor(() => {
            expect(screen.getByText("Can only be 10 digits.")).toBeInTheDocument();
        });
    });
});

describe("Guests validation", () => {

    afterEach(() => {
        cleanup();
        window.history.replaceState(null, "", "/");
    });

    test('Guests required', async () => {
        const mockDispatch = jest.fn();
        const availableTimes = initializeAvailableTimes();
    
        render(
            <BrowserRouter>
                <BookingMain availableTimesState={availableTimes} dispatch={mockDispatch} />
            </BrowserRouter>
        );

        const guests = screen.getByRole("spinbutton", { name: "No of Diners:" });
        act(() => {
            fireEvent.change(guests, { target: { value: "" } });
        });

        act(() => {
            fireEvent.click(screen.getByRole("button", { name: "Book Now" }));
        });

        await waitFor(() => {
            expect(screen.getAllByText("Required").length).toBe(5);
        });

        act(() => {
            fireEvent.change(guests, { target: { value: "5" } });
        });

        await waitFor(() => {
            expect(screen.getAllByText("Required").length).toBe(4);
        });
    });

    test('Guests too many', async () => {
        const mockDispatch = jest.fn();
        const availableTimes = initializeAvailableTimes();
    
        render(
            <BrowserRouter>
                <BookingMain availableTimesState={availableTimes} dispatch={mockDispatch} />
            </BrowserRouter>
        );

        const guests = screen.getByRole("spinbutton", { name: "No of Diners:" });
        act(() => {
            fireEvent.change(guests, { target: { value: "25" } });
        });
        act(() => {
            fireEvent.click(screen.getByRole("button", { name: "Book Now" }));
        });
        await waitFor(() => {
            expect(screen.getByText("Must be 10 or less")).toBeInTheDocument();
        });
    });

    test('Guests too less', async () => {
        const mockDispatch = jest.fn();
        const availableTimes = initializeAvailableTimes();
    
        render(
            <BrowserRouter>
                <BookingMain availableTimesState={availableTimes} dispatch={mockDispatch} />
            </BrowserRouter>
        );

        const guests = screen.getByRole("spinbutton", { name: "No of Diners:" });
        act(() => {
            fireEvent.change(guests, { target: { value: "0" } });
        });
        act(() => {
            fireEvent.click(screen.getByRole("button", { name: "Book Now" }));
        });
        await waitFor(() => {
            expect(screen.getByText("Must be at least 1")).toBeInTheDocument();
        });
    });
});

describe("Date validation", () => {

    afterEach(() => {
        cleanup();
        window.history.replaceState(null, "", "/");
    });

    test('Date required', async () => {
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
            expect(screen.getAllByText("Required").length).toBe(4);
        });

        const date = screen.getByRole("textbox", { name: "" });
        act(() => {
            fireEvent.change(date, { target: { value: null } });
        });

        act(() => {
            fireEvent.click(screen.getByRole("button", { name: "Book Now" }));
        });

        await waitFor(() => {
            expect(screen.getAllByText("Required").length).toBe(5);
        });
    });
});

describe("Time validation", () => {

    afterEach(() => {
        cleanup();
        window.history.replaceState(null, "", "/");
    });

    test('Time required', async () => {
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
            expect(screen.getByText("Select from available time.")).toBeInTheDocument();
        });
    });

    test('Time valid', async () => {
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
            expect(screen.getByText("Select from available time.")).toBeInTheDocument();
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

        expect(screen.queryByText("Select from available time.")).toBeNull();
    });
});