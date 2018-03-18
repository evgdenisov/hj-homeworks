'use strict';


const ws = new WebSocket('wss://neto-api.herokuapp.com/comet/websocket');


function onWsMessage(event) {
    for (const number of document.querySelector('.websocket').children) {
        const gettedNumber = event.data;
        show(number, gettedNumber);
    }
}

ws.addEventListener('message', onWsMessage);

