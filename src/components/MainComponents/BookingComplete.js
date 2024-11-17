import { useNavigate, useSearchParams } from "react-router-dom";
import "./BookingComplete.css";

function BookingComplete() {
    const [searchParams, setSearchParams] = useSearchParams();
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/");
    }

    return (
        <section class="booking-complete-section">
            <h1>Reservation Complete!</h1>

            <p>{searchParams.get('firstName')} {searchParams.get('lastName')},
                your reservation is complete for {searchParams.get('date')} at {searchParams.get('time')} for {searchParams.get('guests')} guests!</p>

            <p>You will soon receive an email at {searchParams.get('email')} with reservation details.
                You will also get a reminder phone call at {searchParams.get('phone')} on the day of the reservation.</p>

            <p>If you choose to edit or cancel the reservation, please follow the <span>Manage Booking</span> section in the email.</p>
            <button className="app-button" onClick={ handleClick }>Home</button>
        </section>
    );
}

export default BookingComplete;