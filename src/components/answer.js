import React from "react"
import "../assets/scss/main.scss"
import Radio from "./radio.js";
export default (props) =>

    <div className="answer">
        <Radio name={props.name} selected={props.selected} value={props.value} checked={props.checked} radioid={props.radioid} selected={props.selected} />
        <p>{props.text}</p>
    </div>