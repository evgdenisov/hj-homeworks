'use strinct';

let connection = new WebSocket('wss://neto-api.herokuapp.com/mouse');

function onClick(event) {
    let clickInfo = {
        x : event.x,
        y : event.y
    }
    connection.send(JSON.stringify(clickInfo));
}

function onError(er) {
    console.log(`Возникла ошибка ${er.data}`);
}

function onUnload() {
    connection.close();
}

showBubbles(connection);
document.addEventListener('click', onClick);
connection.addEventListener('error', onError);
window.addEventListener('beforeunload', onUnload);