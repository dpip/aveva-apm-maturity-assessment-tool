import React from "react"
import "../assets/scss/main.scss"
import Intro from "./intro.js";
import Assessment from "./assessment.js";
import { Router, Link } from "@reach/router"

export default () =>

    <div>
        <Router>
            <Intro path='/' />
            <Assessment path='/assessment' />
        </Router>
    </div>
