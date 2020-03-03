import React from "react"
import { withPrefix } from "gatsby"
import "../assets/scss/main.scss"
import Intro from "./intro.js";
import Assessment from "./assessment.js";
import Results from "./results.js";
import { Router } from "@reach/router"


export default () =>

    <div>
        <Router>
            <Intro path={'/'} />
            <Assessment path={'/assessment'} />
            <Results path={'/results'} />
        </Router>
    </div>
