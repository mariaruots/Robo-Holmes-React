import React, { Component } from 'react';
import '../styles/FirstPage.css';
import Movement from './Movement';
import Camera from './Camera';
import Stream from './Stream';

export default class FirstPage extends Component {

    render() {
        return (
            <div className="container">
                <h1>Robo-Holmes</h1>
                <Stream />
                <div className="controls">
                    <div className="movement">
                        <Movement />
                    </div>
                    <div className="camera">
                        <Camera />
                    </div>
                </div>
            </div>
        )
    }
}
