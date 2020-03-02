import React, { Component } from "react"
import "../assets/scss/main.scss"
import Answer from "../components/answer.js"
import Layout from "../components/layout.js"
import Content from "../content/content.json";


class Assessment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            question: 0,
            score: [],
        };
    }

    handleAnswer = (e, val) => {
        console.log(e, val);
        let question = this.state.question;
        let score = this.state.score;
        let scoreArray = score.slice();
        scoreArray[question] = val;
        this.setState({
            score: scoreArray
        })
        console.log(this.state.score);
    }

    handleNav = (dir) => {
        let currentQuestion = this.state.question;
        if (dir === 'b') {
            this.setState({
                question: currentQuestion - 1
            })
            console.log(currentQuestion)
        } else if (dir === 'n') {
            this.setState({
                question: currentQuestion + 1
            })
            console.log(currentQuestion)
        } else {
            return (false);
        }
    }

    render() {
        const Q = Content.questions[this.state.question];
        return (
            <Layout>
                <article class="container--assessment">
                    <div class="container">
                        <div class="row">
                            <div class="col-sm-12 col-md-3 left">

                            </div>
                            <div class="col-sm-12 col-md-9 right">
                                <p class="question">{Q.question}</p>
                                {Q.answers.map((answer, index) => (
                                    <Answer key={index} value={index} text={answer} selected={this.handleAnswer} />
                                ))}
                                <nav>
                                    <a class="cta back" onClick={e => this.handleNav('b')}>Back</a>

                                    <a class="cta" onClick={e => this.handleNav('n')}>Next</a>
                                </nav>
                            </div>
                        </div>
                    </div>
                </article>
            </Layout>
        );
    }
}

export default Assessment;

