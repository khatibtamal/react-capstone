import lemonBrotherImg from '../../images/lemonBrothers.jpg';
import LittleLemonArticle from "./MiscComponents/LittleLemonArticle";

function About() {
    return (
        <div className='baseRowContainer'>
            <div className='columnFiller'></div>
            <ul className="noListStyle aboutContainer">
                <li>
                    <LittleLemonArticle heading="Little Lemon" subheading="Chicago" body="Very nice restaurant in Chicago, very good food. Best Pizza, very good online booking need to eat hear to believe.
                                Adrian and Mario are the brothers who own Little Lemon. They are great fr fr, they cook their mothers recipes, they are very good ngl." />
                </li>
                <li>
                    <img src={lemonBrotherImg} alt="Mario and Adrian" height={325} width={465}/>
                </li>
            </ul>
            <div className='columnFiller'></div>
        </div>
    );
}

export default About;