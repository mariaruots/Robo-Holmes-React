import React, { Component } from 'react';
import JSMpeg from '@cycjimmy/jsmpeg-player';

export default class Stream extends Component {

    componentDidMount() {
        new JSMpeg.VideoElement('.videoWrapper', 'ws://'+document.location.hostname+':8082/');
    }

    render() {     
        return (
            <div className="videoWrapper">
            </div>
        )
    }
}
