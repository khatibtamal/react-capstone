import reserveTablePromoLogo from '../../images/restaurantfood.jpg';
import LittleLemonArticle from './MiscComponents/LittleLemonArticle';
import LittleLemonButton from './MiscComponents/LittleLemonButton';

function PromoReserveTable() {
    return (
        <div className="baseRowContainer reserveTablePromoContainer">
            <div className="columnFiller"></div>
            <ul className='noListStyle reserveTablePromoContentContainer'>
                <li>
                    <LittleLemonArticle heading="Little Lemon" subheading="Chicago" body="We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist." />
                    <LittleLemonButton label="Reserve a table" />
                </li>
                <li>
                    <img src={reserveTablePromoLogo} alt="Promo Reserve Table" height={460} width={370}/>
                </li>
            </ul>
            <div className="columnFiller"></div>
        </div>
    );
  }
  
  export default PromoReserveTable;