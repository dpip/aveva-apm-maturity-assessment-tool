import React from "react"
import "../assets/scss/main.scss"
export default (props) =>

    <section className="progress-wrapper">
        <div className="progress" style={{ width: `${props.fill}%` }}>

        </div>
    </section>