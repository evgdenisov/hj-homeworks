'use strict'
let buttons = document.getElementsByTagName('a');
let xhr = new XMLHttpRequest();

xhr.addEventListener('load', () => {
    document.getElementById('content').innerHTML = xhr.responseText;
})
xhr.addEventListener('loadstart', onLoadStart);
xhr.addEventListener('loadend', onLoadEnd);

xhr.open(
    "GET",
    document.getElementsByTagName('a')[0].href,
    true
);
xhr.send();

function onLoadStart() {
    document.getElementById('preloader').classList.remove('hidden');
}

function onLoadEnd() {
    document.getElementById('preloader').classList.add('hidden');
}

let eventListener = function (event) {
    event.preventDefault();
    document.getElementsByClassName('active')[0].classList.remove('active');
    this.classList.add('active'); 
    xhr.open(
        "GET",
        this.href,
        true
    );
    xhr.send();
    xhr.addEventListener('load', () => {
        document.getElementById('content').innerHTML = xhr.responseText;
    }) 
}

for (const button of buttons) {
    button.addEventListener('click', eventListener);
}
