import reserveTablePromoLogo from '../../images/restaurantfood.jpg';
import LittleLemonBio from './MiscComponents/LittleLemonBio';

function PromoReserveTable() {
    return (
        <div className="reserveTablePromoContainer">
            <div className='baseFlexRowContainer'>
                <LittleLemonBio 
                    buttonLabel="Reserve a table"
                    h1Color="#F4CE14"
                    h2Color="white"
                    pColor="white"
                    body="We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist." />
                <img src={reserveTablePromoLogo} alt="Promo Reserve Table" height={460} width={370}/>
            </div>
        </div>
    );
}

export default PromoReserveTable;