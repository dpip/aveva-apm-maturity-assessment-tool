import React from "react"
import "../assets/scss/main.scss"
export default (props) =>

    <div class="radio">
        <input
            type="radio"
            name={`${props.name}`}
            value={props.value}
            className="myradio__input"
            onChange={e => props.selected(e, props.value, props.radioid)}
            checked={props.checked === props.radioid}
        />
        <label for={`${props.name}`} className="myradio__label" />
    </div>


