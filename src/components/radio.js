import React from "react"
import "../assets/scss/main.scss"
export default (props) =>

    <input
        type="radio"
        name={`${props.name}`}
        value={props.value}
        className="form-check-input"
        // onClick={e => props.selected(e, props.value)}
        checked={props.checked}
    />
