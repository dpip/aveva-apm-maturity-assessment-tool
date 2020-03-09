import React from "react"
import "../assets/scss/main.scss"
import { Link } from "gatsby"
export default (props) =>

    <nav>
        {console.log('props from bottomNav', props.content)}
        {props.question === 0 ?
            <Link
                to={'/'}
                className="cta back"
                disabled={props.active}
                onClick={e => props.handleNav('b')}>
                Intro
            </Link>
            :
            <button
                className="cta back"
                onClick={e => props.handleNav('b')}>
                Back
            </button>
        }
        {
            props.question === 14 ?
                <Link
                    to={'/results' + `?Result=${props.result}&Content=${props.content}`}
                    state={{ result: props.result, resultcontent: props.content }}
                    className="cta"
                    disabled={props.active}
                    onClick={e => props.handleNav('n')}>
                    Results
                </Link>
                :
                <button
                    className="cta"
                    disabled={props.active}
                    onClick={e => props.handleNav('n')}>
                    Next
                </button>
        }
    </nav>
