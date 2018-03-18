'use strict';

function longPooling() {
    let xhr = new XMLHttpRequest();
    xhr.open(
        "GET",
        "https://neto-api.herokuapp.com/comet/long-pooling",
        true
    )
    xhr.send();
    xhr.addEventListener('load', () => {
        const gettedNumber = delSpaces(xhr.responseText);

        for (const number of document.querySelector('.long-pooling').children) {
            show(number, gettedNumber);
        }
    longPooling();
    })
}

function delSpaces(string){
    string = string.replace(/\s/g, '');
    return string;
}

longPooling();
