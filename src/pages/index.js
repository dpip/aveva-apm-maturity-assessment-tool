import React from "react"
import { withPrefix } from "gatsby"
import "../assets/scss/main.scss"
import Intro from "./intro.js";
import Assessment from "./assessment.js";
import { Router } from "@reach/router"


export default () =>

    <div>
        <Router>
            <Intro path={withPrefix('/')} />
            <Assessment path={withPrefix('/assessment')} />
        </Router>
    </div>
