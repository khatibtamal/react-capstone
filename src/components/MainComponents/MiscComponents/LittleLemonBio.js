import "./LittleLemonBio.css";

function LittleLemonBio(props) {
    return (
        <div className="littleLemonBio">
            <h1 style={{ color: props.h1Color }}>Little Lemon</h1>
            <h2 style={{ color: props.h2Color }}>Chicago</h2>
            <p style={{ color: props.pColor }}>{ props.body }</p>
            { props.buttonLabel && <button className="app-button" onClick={props.buttonCallback}>{ props.buttonLabel }</button> }
        </div>
    );
}

export default LittleLemonBio;