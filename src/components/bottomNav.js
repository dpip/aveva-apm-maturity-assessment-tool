import React from "react"
import "../assets/scss/main.scss"
import { Link } from "gatsby"

export default (props) =>

    <nav>
        {props.question === 0 ?
            null
            :
            <button
                className="cta back"
                onClick={e => props.handleNav('b')}>
                Back
            </button>
        }
        {
            props.question === 14 && props.active === false ?
                <Link
                    to={'/results' + `?Result=${props.result}&Content=${props.content}`}
                    state={{ result: props.result, resultcontent: props.content }}
                    className={'cta ' + 'disabled-' + props.active}
                    onClick={e => props.handleNav('n')}>
                    Results
                </Link>
                :
                <button
                    className={'cta ' + 'disabled-' + props.active}
                    onClick={e => props.handleNav('n')}>
                    {props.question === 14 ? 'Results' : 'Next'}
                </button>
        }
    </nav>
