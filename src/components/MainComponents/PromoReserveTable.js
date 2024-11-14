import reserveTablePromoLogo from '../../images/restaurantfood.jpg';
import LittleLemonBio from './MiscComponents/LittleLemonBio';
import './ReserveTablePromo.css';

function PromoReserveTable() {
    return (
        <section className="outerBaseFlexRowContainer reserveTablePromoContainer" id="reserveTableSection">
            <div>
                <LittleLemonBio
                    buttonLabel="Reserve a table"
                    h1Color="#F4CE14"
                    h2Color="white"
                    pColor="white"
                    body="We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist." />
                <aside><img src={reserveTablePromoLogo} alt="Promo Reserve Table" height={460} width={370}/></aside>
            </div>
        </section>
    );
}

export default PromoReserveTable;