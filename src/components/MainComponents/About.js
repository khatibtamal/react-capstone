import lemonBrotherImg from '../../images/lemonBrothers.jpg';
import LittleLemonBio from "./MiscComponents/LittleLemonBio";

function About() {
    return (
        <section className='outerBaseFlexRowContainer'>
            <div className='aboutContainer'>
                <LittleLemonBio
                    h1Color="#F4CE14"
                    h2Color="black"
                    pColor="black"
                    body="Very nice restaurant in Chicago, very good food. Best Pizza, very good online booking need to eat hear to believe.
                            Adrian and Mario are the brothers who own Little Lemon. They are great fr fr, they cook their mothers recipes, they are very good ngl." />
                <img src={lemonBrotherImg} alt="Mario and Adrian" height={315} width={445}/>
            </div>
        </section>
    );
}

export default About;