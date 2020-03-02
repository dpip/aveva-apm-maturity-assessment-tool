import React from "react"
import "../assets/scss/main.scss"
import Radio from "./radio.js";
export default (props) =>

    <div className="answer">
        <Radio selected={props.selected} value={props.value} />
        <p>{props.text}</p>
    </div>