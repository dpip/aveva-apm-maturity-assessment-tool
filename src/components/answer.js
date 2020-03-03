import React from "react"
import "../assets/scss/main.scss"
import Radio from "./radio.js";
export default (props) =>

    <div className="answer" onChange={e => props.selected(e, props.value)}>
        <Radio name={props.name} selected={props.selected} value={props.value} checked={props.checked} />
        <p>{props.text}</p>
    </div>