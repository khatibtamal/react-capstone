function LittleLemonArticle(props) {
    return (
        <article>
            <h1>{ props.heading }</h1>
            <h2>{ props.subheading }</h2>
            <p>{ props.body }</p>
        </article>
    );
}

export default LittleLemonArticle;