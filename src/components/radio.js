import React from "react"
import "../assets/scss/main.scss"
export default (props) =>

    <div class="radio">
        <input
            type="radio"
            name={`${props.radioid}`}
            value={props.value}
            className="myradio__input"
            onChange={e => props.selected(e, props.value, props.radioid)}
            checked={props.checked === props.radioid}
        />
        <label for={`${props.radioid}`} className="myradio__label" />
    </div>


