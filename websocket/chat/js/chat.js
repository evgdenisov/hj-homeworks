'use strict'                
let content = document.querySelector('.messages-content');
let status = document.querySelector('.message-status');
let connection = new WebSocket('wss://neto-api.herokuapp.com/chat');
let chatStatus = document.querySelector('.chat-status');

function newMess(obj) {
    if (obj.from == "personal") {
        document.querySelector('.message-personal .message-text').innerHTML = obj.text;
        document.querySelector('.message-personal .timestamp').innerHTML = new Date().toLocaleTimeString().substring(0,5);
        let clone = document.querySelector('.message-personal').cloneNode(true);
        content.appendChild(clone);
    }
    if (obj.from == 'partner') {
        document.querySelector('.message .message-text').innerHTML = obj.text;
        document.querySelector('.message .timestamp').innerHTML = new Date().toLocaleTimeString().substring(0,5);
        let clone = document.querySelectorAll('.message')[1].cloneNode(true);
        content.appendChild(clone);
    }
};

connection.addEventListener('open', () => {
    chatStatus.innerHTML = chatStatus.dataset.online;
    document.querySelector('.message-submit').disabled = false;
    document.querySelector('.message-status span').innerHTML = 'Пользователь появился в сети';
    let newObj = document.querySelector('.message-status').cloneNode(true);
    content.appendChild(newObj);
});

document.querySelector('.message-submit').addEventListener('click', (event) => {
    event.preventDefault();
    if (document.querySelector('.message-input').value == '') {
        return;
    }
    let content = {};
    content.text = document.querySelector('.message-input').value;
    content.from = 'personal';
    connection.send(content.text);
    newMess(content);
    document.querySelector('.message-input').value = '';
});

connection.addEventListener('message', (event) => {
     if (event.data !== '...') {
        let content = {};
        content.text = event.data;
        content.from = 'partner';
        newMess(content);
    }
    else {
        let loading = document.querySelector('.loading').cloneNode(true);
        content.appendChild(loading);
    }
});

connection.addEventListener('error', (error) => {
    console.log(error.data);
});

window.addEventListener('beforeunload', () => {
    connection.close();
    document.querySelector('.chat-status').textContent = document.querySelector('.chat-status').dataset.offline;
    document.querySelector('.message-submit').disabled = true;
    document.querySelector('.message-status .message-text').textContent = "Пользователь не в сети";
    document.querySelector('.messages-content')
      .appendChild(document.querySelector('.message-status')
      .cloneNode(true));
});