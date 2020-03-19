import React, { Component } from "react"
import "../assets/scss/main.scss"

class IENote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        }
    }

    componentDidMount() {
        alert('mounted');
        const isEdge = window.navigator.userAgent.indexOf('Edge') != -1
        const isIE = window.navigator.userAgent.indexOf('Trident') != -1 && !isEdge
        this.setState({
            open: !isIE ? false : true
        })
    }

    closeWarning = (e) => {
        this.setState({
            open: false
        })
    }

    render() {
        console.log('isIE?', this.state.ie)
        return (
            <>
                {this.state.open === true ?
                    <nav id={'ie-note'}>
                        <svg id={'icon-warning'} title={'warning-icon'} xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none" /><path fill={'#F5A624'} d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z" /></svg>
                        <span>&nbsp;&nbsp;&nbsp;This assessment is best viewed with Firefox or Chrome.</span>
                        <svg id={'close-warning'} onClick={e => { this.closeWarning(e) }} title={'close warning'} xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path fill={'#fff'} d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" /><path d="M0 0h24v24H0z" fill="none" /></svg>
                    </nav>
                    : null
                }
            </>
        )
    }
}

export default IENote;
