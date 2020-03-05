import React from "react"
import "../assets/scss/main.scss"
export default (props) =>

    <div className="result-animation">
        <div className="result-pie">
            <h4>Your APM maturity<br /> assessment score is</h4>
            <h2>{props.result}%</h2>
        </div>
        <div className="bottom-container">
            <ul className="over">
                <li><div className="dots"><div /><div /><div /><div /></div>Raise the industry bar</li>
                <li><div className="dots"><div /><div /><div /></div>Path to organizational excellence</li>
                <li><div className="dots"><div /><div /></div>Close your performance gaps</li>
                <li><div className="dots"><div /></div>Take APM to the next level</li>
            </ul>
            <h1 className="over">Learn what you can do to improve your results.</h1>
            <a className="cta over" href="#" target="_blank">Contact an expert</a>
            <div id={'underlay'} className={'u' + props.bracket} />
        </div>
    </div>


