import React, { Component } from 'react';
import '../styles/FirstPage.css';
import Movement from './Movement';
import Camera from './Camera';

export default class FirstPage extends Component {
    render() {
        return (
            <div className="container">
                <h1>Robo-Holmes</h1>
                <Movement />
                <Camera />
            </div>
        )
    }
}
