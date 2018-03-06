'use strict';

let connection = new WebSocket('wss://neto-api.herokuapp.com/counter');

connection.addEventListener('message', (event) => {
    let data = JSON.parse(event.data);
    document.querySelector('.counter').innerHTML = data.connections;
    document.querySelector('.errors').innerHTML = data.errors;
});

window.addEventListener('beforeunload', () => {
    connection.close(1000, 'connection close');
});

