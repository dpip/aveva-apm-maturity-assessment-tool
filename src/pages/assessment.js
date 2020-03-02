import React, { Component } from "react"
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

    calcPercentage = (partialVal, totalVal) => {
        return (100 * partialVal) / totalVal;
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
            })
        } else {
            return (false);
        }
    }

    render() {
        const Q = Content.questions[this.state.question];
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
                                    <Answer key={index} value={answer.val} text={answer.text} selected={this.handleAnswer} />
                                ))}
                                <nav>
                                    <button class="cta back" onClick={e => this.handleNav('b')}>Back</button>

                                    <button class="cta" onClick={e => this.handleNav('n')}>Next</button>
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

