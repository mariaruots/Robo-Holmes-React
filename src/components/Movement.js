import React, { Component } from 'react'

export default class Movement extends Component {
    render() {
        return (
            <div>
                <i className="far fa-arrow-alt-circle-up" id="forward" ></i><br></br>
                <i className="far fa-arrow-alt-circle-left" id="left" ></i>
                <i className="far fa-stop-circle" id="stop" ></i>
                <i className="far fa-arrow-alt-circle-right" id="right" ></i><br></br>
                <i className="far fa-arrow-alt-circle-down" id="reverse" ></i>
            </div>
        )
    }
}
