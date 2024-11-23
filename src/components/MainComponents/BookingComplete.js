import { useNavigate, useSearchParams } from "react-router-dom";
import { convertDateObjectToSimpleDateString, convertStringDateToObject, convertTo12Hour } from "../../utils/utility";
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
                your reservation is complete for <span >{convertDateObjectToSimpleDateString(convertStringDateToObject(searchParams.get('date')))}</span> at <span>{convertTo12Hour(searchParams.get('time'))}</span> for <span>{searchParams.get('guests')}</span> guests!</p>

            {(searchParams.get('occassion') === 'Engagements' || searchParams.get('occassion') === 'Birthdays') &&
                <p>For the special {searchParams.get('occassion').substring(0, searchParams.get('occassion').length - 1).toLocaleLowerCase()} occasion, Little Lemon restaurant will provide a complimentary cake!</p>}

            {searchParams.get('occassion') === 'Anniversaries' &&
                <p>For the special anniversary occasion, Little Lemon restaurant will provide a complimentary champagne!</p>}

            <p>You will soon receive an email at <span>{searchParams.get('email')}</span> with reservation details.
                You will also get a reminder phone call at <span>{searchParams.get('phone')}</span> on the day of the reservation.</p>

            <p>If you choose to edit or cancel the reservation, please follow the <span>Manage Booking</span> section in the email.</p>
            <button className="app-button" aria-label="On Click you will be taken to home page" onClick={ handleClick }>Home</button>
        </section>
    );
}

export default BookingComplete;