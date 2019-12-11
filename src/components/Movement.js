import React, { Component } from 'react'

export default class Movement extends Component {
    render() {
        return (
            <div>
                <i className="far fa-arrow-alt-circle-up" id="forward" style={{ fontSize: '150px' }}></i>
                <i className="far fa-arrow-alt-circle-left" id="left" style={{ fontSize: '150px' }}></i>
                <i className="far fa-arrow-alt-circle-down" id="reverse" style={{ fontSize: '150px' }}></i>
                <i className="far fa-arrow-alt-circle-right" id="right" style={{ fontSize: '150px' }}></i>
                <i className="far fa-stop-circle" id="stop" style={{ fontSize: '150px' }}></i>
            </div>
        )
    }
}
