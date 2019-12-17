import React, { Component } from 'react';
import JSMpeg from '@cycjimmy/jsmpeg-player';

export default class Stream extends Component {

    componentDidMount() {
        new JSMpeg.VideoElement('#videoStream', 'ws://'+document.location.hostname+':8082/');
    }

    render() {     
        return (
            <div className="videoWrapper">
                <canvas id="videoStream"></canvas>
            </div>
        )
    }
}
