import React, { Component } from "react"
import "../assets/scss/main.scss"
import { Link } from "gatsby"

class Form extends Component {
    componentDidMount() {
        const script = document.createElement('script');
        script.src = 'https://js.hsforms.net/forms/v2.js';
        document.body.appendChild(script);

        script.addEventListener('load', () => {
            if (window.hbspt) {
                window.hbspt.forms.create({
                    portalId: '2900448',
                    formId: '9eed5f31-4a80-4d23-9c00-96f46e82b188',
                    sfdcCampaignId: '7010O000001evcmQAA',
                    target: '#hubspotForm'
                })
            }
        });
    }
    render() {
        return (
            <div id="hubspotForm" style={{ color: 'white !important' }} />
        )
    }
}

export default Form;

