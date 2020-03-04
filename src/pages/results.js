import React from "react"
import Layout from "../components/layout.js"
import Results from "../content/results.json";

import Background from "../assets/images/parallax-bg-0.jpg"
import "../assets/scss/main.scss"
export default ({ location }) =>
    <Layout>
        <article data-jarallax data-element-in-viewport='#article-2' className="article jarallax">
            <img alt="Slide 0 Background Image" className="jarallax-img" src={Background} />
            <div className="container results">
                <div className="row">
                    <div className="col-sm-12 col-md-3 left">
                        <h4 style={{ color: "#FFFF" }}>Your APM maturity<br /> assessment score is</h4>
                        <h2>{location.state.result}&nbsp;%</h2>
                        <span className="rule"></span>
                    </div>
                    <div className="col-sm-12 col-md-9 right">
                        <p dangerouslySetInnerHTML={{ __html: Results.results[location.state.resultcontent] }}></p>
                    </div>
                </div>
            </div>
        </article>

    </Layout>