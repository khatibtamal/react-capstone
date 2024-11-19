import { useSearchParams } from 'react-router-dom';
import './BookingPage.css';
import BookingComplete from './MainComponents/BookingComplete';
import BookingForm from "./MainComponents/BookingForm";

function BookingMain(props) {
    const [searchParams, setSearchParams] = useSearchParams();

    const mainSection = searchParams.get('booking') == 'success' ? <BookingComplete /> :
        <BookingForm availableTimesState={props.availableTimesState} dispatch={props.dispatch} />;

    return (
        <main className="bookingMainContainer">
            <section className='outerBaseFlexRowContainer'>
                <div>
                    <h1>Dine out with us in the heart of Chicago!</h1>
                    <div>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d380605.73512720794!2d-87.81990745616982!3d41.817911503957745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e2c3cd0f4cbed%3A0xafe0a6ad09c0c000!2sChicago%2C%20IL%2C%20USA!5e0!3m2!1sen!2sca!4v1731511548117!5m2!1sen!2sca" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        <div>
                            <span>4754 North South Street</span>
                            <span>Chicago, Illinois</span>
                            <span>USA</span>
                            <span>101110</span>
                        </div>
                    </div>
                </div>
            </section>
            <section className='outerBaseFlexRowContainer'>
                <div>
                    { mainSection }
                </div>
            </section>
        </main>
    );
}

export default BookingMain;