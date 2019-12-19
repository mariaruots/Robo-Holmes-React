import React, { Component } from 'react';
import socket from '../api/socket';

export default class Camera extends Component {
    render() {
        return (
            <div className="cameracontrols">
                <i className="fas fa-angle-double-up" id="up" onClick={socket.moveup} ></i><br></br>
                <i className="fas fa-lightbulb" onClick={socket.off} ></i>
                <i className="far fa-lightbulb" id="empty" ></i>
                <i className="far fa-lightbulb" onClick={socket.on}></i><br></br>
                <i className="fas fa-angle-double-down" id="down" onClick={socket.movedown} ></i>
            </div>
        )
    }
}
