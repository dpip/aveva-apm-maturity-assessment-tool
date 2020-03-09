import React, { useState, useEffect } from 'react'
import CountUp from 'react-countup';

const Chart = (props) => {
    const [result, setResult] = useState(0);
    const [strokeResult, setStrokeResult] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => {
            setResult((props.result * 31.4) / 100)
            setStrokeResult((props.result * 61.23) / 100)
        }, 750);
        return () => clearTimeout(timer)
    })

    return (
        <div className="result-animation">
            <div className="result-pie">
                <svg viewBox="0 0 20 20">
                    <defs>
                        <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stop-color="#f70656" />
                            <stop offset={`${strokeResult}`} stop-color="#ffbc00" />
                        </linearGradient>
                    </defs>
                    <circle r="10" cx="10" cy="10" fill="#3D1152" />
                    <circle r="9.75" cx="10" cy="10"
                        fill="transparent"
                        stroke="#fff"
                        stroke-width="0.25"
                    />
                    <circle r="5" cx="10" cy="10"
                        fill="transparent"
                        stroke="rgba(0, 0, 0, 0.4)"
                        stroke-width="10"
                        stroke-dasharray={`${result} 31.4`}
                        transform="rotate(-90)"
                    />
                    <circle r="9.75" cx="10" cy="10"
                        fill="transparent"
                        stroke="url(#gradient)"
                        stroke-width="0.25"
                        stroke-dasharray={`${strokeResult} 61.23`}
                        transform="rotate(-90)"
                    />
                </svg>
                <div className="result-content">
                    <p><CountUp end={props.result} delay={1.5} duration={1.25} />%</p>
                    <p>is your score</p>
                </div>
            </div>
            <div className="bottom-container">
                <ul
                    className="over"
                    style={{ textAlign: `left` }}
                >
                    <li style={{ color: props.bracket === 3 ? "#ffbc00" : "#BECCD6" }}>
                        <div className="dots">
                            <div style={{ backgroundColor: props.bracket === 3 ? "#ffbc00" : "#BECCD6" }} />
                            <div style={{ backgroundColor: props.bracket === 3 ? "#ffbc00" : "#BECCD6" }} />
                            <div style={{ backgroundColor: props.bracket === 3 ? "#ffbc00" : "#BECCD6" }} />
                            <div style={{ backgroundColor: props.bracket === 3 ? "#ffbc00" : "#BECCD6" }} />
                        </div>
                        Raise the industry bar
                        </li>
                    <li style={{ color: props.bracket === 2 ? "#ffbc00" : "#BECCD6" }}>
                        <div className="dots">
                            <div style={{ backgroundColor: props.bracket === 2 ? "#ffbc00" : "#BECCD6" }} />
                            <div style={{ backgroundColor: props.bracket === 2 ? "#ffbc00" : "#BECCD6" }} />
                            <div style={{ backgroundColor: props.bracket === 2 ? "#ffbc00" : "#BECCD6" }} />
                        </div>
                        Path to organizational excellence
                        </li>
                    <li style={{ color: props.bracket === 1 ? "#ffbc00" : "#BECCD6" }}>
                        <div className="dots">
                            <div style={{ backgroundColor: props.bracket === 1 ? "#ffbc00" : "#BECCD6" }} />
                            <div style={{ backgroundColor: props.bracket === 1 ? "#ffbc00" : "#BECCD6" }} />
                        </div>
                        Close your performance gaps
                        </li>
                    <li style={{ color: props.bracket === 0 ? "#ffbc00" : "#BECCD6" }}>
                        <div className="dots">
                            <div style={{ backgroundColor: props.bracket === 0 ? "#ffbc00" : "#BECCD6" }} />
                        </div>
                        Take APM to the next level
                        </li>
                </ul>
                <h2 className="over"
                    style={{ fontSize: `1.25em`, lineHeight: 1.2, textAlign: `center`, padding: `1em 0.5em 0` }}>Learn what you can do to improve your results.</h2>
                <a className="cta over" href="#" target="_blank">Contact an expert</a>
                <div id={'underlay'} className={'u' + props.bracket} />
            </div>
        </div>
    )
}

export default Chart

