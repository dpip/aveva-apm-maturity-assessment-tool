import React from "react"
import Layout from "../components/layout.js"
import Results from "../content/results.json";
import Chart from "../components/resultAnimation";
import Background from "../assets/images/parallax-bg-0.jpg"
import "../assets/scss/main.scss"

const getParameterByName = (name) => {
    // typeof window !== 'undefined' && window.location.search
    var match = RegExp('[?&]' + name + '=([^&]*)').exec(typeof window !== 'undefined' && window.location.search);
    return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
}

export default ({ location }) =>
    <Layout>
        <article data-jarallax data-element-in-viewport='#article-2' className="article jarallax">
            <img alt="Slide 0 Background Image" className="jarallax-img" src={Background} />
            <div className="container results">
                <div className="row">
                    <div className="col-sm-12 col-md-4 left results-col">
                        {(location.state && location.state.resultcontent) ?
                            <Chart result={Number(location.state.result)} bracket={Number(location.state.resultcontent)} />
                            :
                            <Chart result={Number(getParameterByName('Result'))} bracket={Number(getParameterByName('Content'))} />
                        }
                    </div>
                    <div className="col-sm-12 col-md-8 right">

                        {(location.state && location.state.resultcontent) ?
                            <p dangerouslySetInnerHTML={{ __html: Results.results[location.state.resultcontent] }}></p>
                            :
                            <p dangerouslySetInnerHTML={{ __html: Results.results[Number(getParameterByName('Content'))] }}></p>
                        }
                    </div>
                </div>
            </div>
        </article>
    </Layout>