import React, { Component } from 'react'
import socket from '../api/socket';

export default class Movement extends Component {
    render() {
        return (
            <div>
                <i className="far fa-arrow-alt-circle-up" id="forward" onClick={socket.forward} ></i><br></br>
                <i className="far fa-arrow-alt-circle-left" id="left" onClick ={socket.left}></i>
                <i className="far fa-stop-circle" id="stop" onClick ={socket.stop}></i>
                <i className="far fa-arrow-alt-circle-right" id="right" onClick ={socket.right}></i><br></br>
                <i className="far fa-arrow-alt-circle-down" id="reverse" onClick ={socket.reverse}></i>
            </div>
        )
    }
}
