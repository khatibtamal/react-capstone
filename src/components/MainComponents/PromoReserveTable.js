import { useNavigate } from 'react-router-dom';
import reserveTablePromoLogo from '../../images/restaurantfood.jpg';
import LittleLemonBio from './MiscComponents/LittleLemonBio';
import './ReserveTablePromo.css';

function PromoReserveTable() {
    const navigate = useNavigate();

    const buttonCallback = () => {
        navigate("/bookings");
    }

    return (
        <section className="outerBaseFlexRowContainer reserveTablePromoContainer" id="reserveTableSection">
            <div>
                <LittleLemonBio
                    buttonLabel="Reserve a table"
                    buttonAriaLabelText="On Click you will be taken to booking page"
                    buttonCallback={buttonCallback}
                    h1Color="#F4CE14"
                    h2Color="white"
                    pColor="white"
                    body="We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist." />
                <img src={reserveTablePromoLogo} alt="Promo Reserve Table" height={460} width={370}/>
            </div>
        </section>
    );
}

export default PromoReserveTable;