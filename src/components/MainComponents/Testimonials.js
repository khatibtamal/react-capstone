import donaldImg from "../../images/testimonial1.png";
import kamalaImg from "../../images/testimonial2.png";
import joeImg from "../../images/testimonial3.png";
import hillaryImg from "../../images/testimonial4.png";
import TestimonialsCard from "./MiscComponents/TestimonialsCard";
import './Testimonials.css';

function Testimonials() {
    const testimonialsData = [
        {
            name: "Donald",
            imageSrc: donaldImg,
            stars: 5,
            body: "Best food ever, it was so unbelievable that are not gonna believe it, believe me!"
        },
        {
            name: "Kamala",
            imageSrc: kamalaImg,
            stars: 3,
            body: "Was expecting much better but was still good. Could have been better."
        },
        {
            name: "Joe",
            imageSrc: joeImg,
            stars: 4,
            body: "Was not expecting it to be good but still was good enough. They did not give me desert at the end."
        },
        {
            name: "Hillary",
            imageSrc: hillaryImg,
            stars: 2,
            body: "The most disgusting food ever. Was not expecting to puke this hard after eating."
        }
    ]

    return (
        <section className="outerBaseFlexRowContainer testimonialsBaseContainer">
            <div>
                <h1>Testimonials</h1>
                <div>
                    {testimonialsData.map((testimonial) => {
                        return (
                            <TestimonialsCard key={testimonial.name} name={testimonial.name} imageSrc={testimonial.imageSrc} stars={testimonial.stars} body={testimonial.body}/>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

export default Testimonials;