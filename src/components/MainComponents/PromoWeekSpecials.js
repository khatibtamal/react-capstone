import bruchettaImage from '../../images/bruchetta.png';
import greekSaladImage from '../../images/greek_salad.jpg';
import lemonDesertImage from '../../images/lemon_dessert.jpg';
import OnlineDeliveryMenuCard from './MiscComponents/OnlineDeliveryMenuCard';

function PromoWeekSpecials() {
    const specialsData = [
        {
            "title": "Greek Salad",
            "price": "14.99",
            "body": "Special Greek salad, with special leaves, made by special chef who is very special.",
            "imgSource": greekSaladImage
        },
        {
            "title": "Bruchetta",
            "price": "18.99",
            "body": "Special Chicken gyro, with special chicken, made by special chef who is very special.",
            "imgSource": bruchettaImage
        },
        {
            "title": "Lemon Desert",
            "price": "8.99",
            "body": "Lemon Desert, with special ingredients, made by special chef who is very special.",
            "imgSource": lemonDesertImage
        }
    ]
    
    return (
        <div className='promoWeeksSpecialsContainer'>
            <div className='outerBaseFlexRowContainer'>
                <div className='baseFlexRowContainer'>
                    <h1>This weeks specials!</h1>
                    <button>Online Menu</button>
                </div>
            </div>
            <div className='outerBaseFlexRowContainer'>
                <div className='baseFlexRowContainer'>
                    {
                        specialsData.map((special) => {
                            return <OnlineDeliveryMenuCard imageSrc={special.imgSource} title={special.title} price={special.price} body={special.body}/>
                        })
                    }
                </div>
            </div>
        </div>
    );
}

export default PromoWeekSpecials;