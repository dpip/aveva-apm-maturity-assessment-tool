import React from "react"
import "../assets/scss/main.scss"
export default (props) =>

    <div className="question--radio">
        <label>
            <input
                type="radio"
                name="answer"
                value={props.value}
                className="form-check-input"
                onClick={e => props.selected(e, props.value)}
            />
        </label>
    </div>