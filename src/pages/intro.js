import React from "react"
import "../assets/scss/main.scss"
import { Link } from "gatsby"
import Background from "../assets/images/parallax-bg-0.jpg"
import Layout from "../components/layout.js";

export default () =>
    <Layout>
        <article data-jarallax data-element-in-viewport='#article-2' className="article jarallax">
            <img alt="Slide 0 Background Image" className="jarallax-img" src={Background} />
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-md-6 left">
                        <h2>Take your free<br /> 15-minute strategy<br /> assessment now</h2>
                        <span className="rule"></span>
                        <br />
                        <p style={{ color: "#ffff" }}>There's no such thing as a one-size-fits-all Asset Performance Management strategy</p>
                    </div>
                    <div className="col-sm-12 col-md-6 right">
                        <p>Form code TBD</p>
                        <Link className="cta" to="/assessment/">Take the assessment</Link>
                    </div>
                </div>
            </div>
        </article>
    </Layout>
