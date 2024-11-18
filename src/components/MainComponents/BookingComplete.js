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

            <p><span>{searchParams.get('firstName')} {searchParams.get('lastName')}</span>,
                your reservation is complete for <span >{new Date(searchParams.get('date')).toISOString().split('T')[0]}</span> at <span>{searchParams.get('time')}</span> for <span>{searchParams.get('guests')}</span> guests!</p>

            <p>You will soon receive an email at <span>{searchParams.get('email')}</span> with reservation details.
                You will also get a reminder phone call at <span>{searchParams.get('phone')}</span> on the day of the reservation.</p>

            <p>If you choose to edit or cancel the reservation, please follow the <span>Manage Booking</span> section in the email.</p>
            <button className="app-button" onClick={ handleClick }>Home</button>
        </section>
    );
}

export default BookingComplete;