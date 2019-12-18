import openSocket from 'socket.io-client';

const socket = openSocket('http://localhost:3000');

function forward() {
    socket.emit('forward', 'moving forward');
    console.log('forward')
    return false;
}

function stop() {
    socket.emit('stop', 'stopping motors');
    console.log('stop')
    return false;
}

function reverse() {
    socket.emit('reverse', 'moving reverse');
    console.log('back')
    return false;
}

function right() {
    socket.emit('right', 'moving right');
    console.log('right')
    return false;
}

function left() {
    socket.emit('left', 'moving left');
    console.log('left')
    return false;
}

function moveup() {
    socket.emit('moveup', '');
    console.log('camera up')
    return false;
}

function movedown() {
    socket.emit('movedown', '');
    console.log('camera down')
    return false;
}

export default {forward, stop, left, right, reverse, moveup, movedown};