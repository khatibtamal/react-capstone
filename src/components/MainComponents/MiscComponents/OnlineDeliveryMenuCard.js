import deliveryLogo from '../../../images/delivery_logo.png';

function OnlineDeliveryMenuCard(props) {
    return (
        <div class="onlineDeliveryMenuCardContainer">
            <img src={props.imageSrc} height="240px" width="260px"/>
            <div>
                <div>
                    <span>{props.title}</span>
                    <span>${props.price}</span>
                </div>
                <span>{props.body}</span>
                <div>
                    <span>Order a delivery</span>
                    <img src={ deliveryLogo } height="20px" width="40px"/>
                </div>
            </div>
        </div>
    );
}

export default OnlineDeliveryMenuCard;