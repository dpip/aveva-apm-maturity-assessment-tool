import React, { Component } from "react"
import scrollTo from 'gatsby-plugin-smoothscroll';

import "../assets/scss/main.scss"

import Layout from "../components/layout.js"
import Progress from "../components/progress.js"
import Answer from "../components/answer.js"
import Content from "../content/content.json";
import BottomNav from "../components/bottomNav.js"
import Alert from "../components/alert.js";


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

    handleAnswer = (e, val, radioid) => {
        let question = this.state.question;
        let score = this.state.score;
        let scoreArray = score.slice();
        scoreArray[question] = val;
        this.setState({
            score: scoreArray,
            isActive: !true,
            checked: radioid,
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
        } else if (result >= 26 && result <= 45) {
            return 2;
        } else if (result >= 46 && result <= 60) {
            return 3;
        }

    }

    handleScrollTop = (e) => {
        window.scrollTo({ top: 0, behavior: "smooth" })
    }

    handleNavButton = (dir, e) => {
        if (dir === 'n' && this.state.isActive == !false) {
            this.handleScrollTop(e);
            this.setState({
                error: true
            })
            console.log('Error true')
        } else {
            this.handleNav(dir, e)
        }
    }

    handleNav = (dir, e) => {
        let currentQuestion = this.state.question;
        let back = currentQuestion - 1;
        let next = currentQuestion + 1;
        this.handleScrollTop(e);
        if (dir === 'b' && currentQuestion > 0) {
            this.setState({
                question: back,
                progress: this.calcPercentage(currentQuestion - 1, 15),
                checked: null,
                isActive: !false,
                error: false
            })
        } else if (dir === 'n' && next < 15) {
            this.setState({
                question: next,
                progress: this.calcPercentage(currentQuestion + 1, 15),
                isActive: !false,
                total: this.state.score.reduce(function (a, b) { return a + b; }, 0),
                result: this.handleResult(),
                checked: null,
                error: false
            })
        } else {
            return (false);
        }
        console.log('results bucket', this.state.result)
    }

    render() {
        const Q = Content.questions[this.state.question];

        return (
            <Layout>
                <Progress fill={this.state.progress} />
                <article className="container--assessment">
                    <div id="test" className="container">
                        <div className="row">
                            <div className="col-sm-12 col-md-3 left" />
                            <div className="col-sm-12 col-md-9 right">
                                <p className="question">{Q.question}</p>
                                {this.state.error === true ? <Alert /> : null}
                                {Q.answers.map((answer, index) => (
                                    <Answer key={index} radioid={this.state.question + '-' + index} value={answer.val} text={answer.text} selected={this.handleAnswer} checked={this.state.checked} name={'question-' + this.state.question} />
                                ))}
                                <BottomNav question={this.state.question} handleNav={this.handleNavButton} result={Math.round((this.state.total / 60) * 100)} content={this.state.result} active={this.state.isActive} />
                            </div>
                        </div>
                    </div>
                </article>
            </Layout >
        );
    }
}

export default Assessment;

