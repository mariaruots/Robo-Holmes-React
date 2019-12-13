import React, { Component } from 'react'

export default class Camera extends Component {
    render() {
        return (
            <div>
                <i className="far fa-arrow-alt-circle-up" id="up" ></i><br></br>
                <i className="far fa-minus-square" id="slow" ></i>
                <i className="far fa-lightbulb" id="lights" ></i>
                <i className="far fa-plus-square" id="fast" ></i><br></br>
                <i className="far fa-arrow-alt-circle-down" id="down" ></i>

            </div>
        )
    }
}
