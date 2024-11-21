import starLogo from '../../../images/rating_star.png';
import './TestimonialsCard.css';

let starKey = 0;

function ratings(num) {
    const stars = [];
    for (let i = 0; i < num; i++) {
        stars.push(<img key={starKey++} src={starLogo} height="15px" width="15px"/>);
    }
    return stars;
}

function TestimonialsCard(props) {
    return (
        <article className="testimonialsCardContainer">
            <div className="testimonialsCardContentContainer">
                <h2>{ props.name }</h2>
                <div className="testimonialRating">
                    <img src={props.imageSrc} height="75px" width="65px"/>
                    <div className="testimonialRatingStars">
                        { ratings(props.stars) }
                    </div>
                </div>
                <p>{props.body}</p>
            </div>
        </article>
    );
}

export default TestimonialsCard;