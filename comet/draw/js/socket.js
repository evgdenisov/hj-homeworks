'use strict';

const ws = new WebSocket('wss://neto-api.herokuapp.com/draw');

function onUpdate(event) {
    const canvas = event.canvas;
    canvas.toBlob(sendBlob);
}

function sendBlob(blob) {
    ws.send(blob);
}

ws.addEventListener('message', event => {
    console.log(event.data);
});

ws.addEventListener('open', () => {
    console.log('opened')
    window.editor.addEventListener('update', onUpdate);
});