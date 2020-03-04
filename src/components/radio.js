import React from "react"
import "../assets/scss/main.scss"
export default (props) =>

    <input
        type="radio"
        name={`${props.name}`}
        value={props.value}
        className="form-check-input"
        onChange={e => props.selected(e, props.value, props.radioid)}
        checked={props.checked === props.radioid}
    />
