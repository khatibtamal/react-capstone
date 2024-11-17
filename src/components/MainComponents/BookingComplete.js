import { useNavigate } from "react-router-dom";
import "./BookingComplete.css";

function BookingComplete() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/");
    }

    return (
        <section class="booking-complete-section">
            <h1>Reservation Complete!</h1>
            <p>John Doe, your reservation is complete for 45th of Luna 3421!</p>
            <p>You will soon receive and email with reservation details.</p>
            <p>If you choose to edit or cancel the reservation, please follow the <span>Manage Booking</span> section in the email.</p>
            <button className="app-button" onClick={ handleClick }>Home</button>
        </section>
    );
}

export default BookingComplete;