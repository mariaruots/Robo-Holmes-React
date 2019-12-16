import openSocket from 'socket.io-client';

const socket = openSocket('http://localhost:3000');

function forward() {
    socket.emit('forward', 'moving forward');
    return false;
}

function stop() {
    socket.emit('stop', 'stopping motors');
    return false;
}

function reverse() {
    socket.emit('reverse', 'moving reverse');
    return false;
}

function right() {
    socket.emit('right', 'moving right');
    return false;
}

function left() {
    socket.emit('left', 'moving left');
    return false;
}

export default {forward, stop, left, right, reverse};