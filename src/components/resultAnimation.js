import React from "react"
import "../assets/scss/main.scss"

// const calcChart = () > {

// }

export default (props) =>

    <div className="result-animation">
        <div className="result-pie">
            {/* <h4>Your APM maturity<br /> assessment score is</h4>
            <h2>{props.result}%</h2> */}
            {/* {props.bracket} */}
            <figure>
                <svg viewBox="0 0 100 100">
                    <circle class="pie0" cx="31.8309886184" cy="31.8309886184" r="15.9154943092" />
                </svg>
            </figure>
        </div>
        <div className="bottom-container">
            <ul className="over">
                <li style={{ color: props.bracket === 3 ? "#ffbc00" : "#fff" }}><div className="dots"><div /><div /><div /><div /></div>Raise the industry bar</li>
                <li style={{ color: props.bracket === 2 ? "#ffbc00" : "#fff" }}><div className="dots"><div /><div /><div /></div>Path to organizational excellence</li>
                <li style={{ color: props.bracket === 1 ? "#ffbc00" : "#fff" }}><div className="dots"><div /><div /></div>Close your performance gaps</li>
                <li style={{ color: props.bracket === 0 ? "#ffbc00" : "#fff" }}><div className="dots"><div /></div>Take APM to the next level</li>
            </ul>
            <h1 className="over">Learn what you can do to improve your results.</h1>
            <a className="cta over" href="#" target="_blank">Contact an expert</a>
            <div id={'underlay'} className={'u' + props.bracket} />
        </div>
    </div>


