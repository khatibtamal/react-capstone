import { useNavigate } from "react-router-dom";

function BookingComplete() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/");
    }

    return (
        <div>
            <h1>Booking Complete!</h1>
            {/* <a href="/"> */}
                <button className="app-button" onClick={ handleClick }>Home</button>
            {/* </a> */}
        </div>
    );
}

export default BookingComplete;