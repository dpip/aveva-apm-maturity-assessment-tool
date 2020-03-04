import React, { Component } from "react"
import { Link } from "gatsby"

import "../assets/scss/main.scss"
import Layout from "../components/layout.js"
import Progress from "../components/progress.js"
import Answer from "../components/answer.js"
import Content from "../content/content.json";


class Assessment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            question: 0,
            score: [],
            total: 0,
            progress: 0,
            isActive: !false,
            checked: null
        };
    }

    handleAnswer = (e, val) => {
        console.log(e, val);
        let question = this.state.question;
        let score = this.state.score;
        let scoreArray = score.slice();
        scoreArray[question] = val;
        this.setState({
            score: scoreArray,
            isActive: !true
        })

    }

    calcPercentage = (partialVal, totalVal) => {
        return (100 * partialVal) / totalVal;
    }

    calcTotal = (score) => {
        score.reduce(function (a, b) { return a + b; }, 0)
    }

    handleResult = () => {
        let result = this.state.total;
        if (result >= 0 && result <= 15) {
            return 0;
        } else if (result >= 16 && result <= 25) {
            return 1;
        } else if (result >= 26 && result <= 40) {
            return 2;
        } else if (result >= 41 && result <= 60) {
            return 3;
        }

    }

    handleNav = (dir) => {
        let currentQuestion = this.state.question;
        let back = currentQuestion - 1;
        let next = currentQuestion + 1;

        if (dir === 'b' && currentQuestion > 0) {
            this.setState({
                question: back,
                progress: this.calcPercentage(currentQuestion - 1, 15),
            })
        } else if (dir === 'n' && next < 15) {
            this.setState({
                question: next,
                progress: this.calcPercentage(currentQuestion + 1, 15),
                isActive: !false,
                checked: null,
                total: this.state.score.reduce(function (a, b) { return a + b; }, 0),
                result: this.handleResult()
            })
            console.log('score', this.state.score.reduce(function (a, b) { return a + b; }, 0))
        } else {
            return (false);
        }
        console.log(this.handleResult)
    }

    render() {
        const Q = Content.questions[this.state.question];
        const current = this.state.question;
        console.log(this.state.question);
        return (
            <Layout>
                <Progress fill={this.state.progress} />
                <article class="container--assessment">
                    <div class="container">
                        <div class="row">
                            <div class="col-sm-12 col-md-3 left" />
                            <div class="col-sm-12 col-md-9 right">
                                <p class="question">{Q.question}</p>
                                {Q.answers.map((answer, index) => (
                                    <Answer key={index} value={answer.val} text={answer.text} selected={this.handleAnswer} checked={this.state.checked} name={'question-' + this.state.question} />
                                ))}
                                <nav>
                                    <button class="cta back" onClick={e => this.handleNav('b')}>Back</button>
                                    {this.state.question === 14 ? <Link to={'/results'} state={{ result: Math.round((this.state.total / 60) * 100), resultcontent: this.handleResult() }} class="cta" disabled={this.state.isActive} onClick={e => this.handleNav('n')}>Results</Link> : <button class="cta" disabled={this.state.isActive} onClick={e => this.handleNav('n')}>Next</button>}
                                </nav>
                            </div>
                        </div>
                    </div>
                </article>
            </Layout >
        );
    }
}

export default Assessment;

