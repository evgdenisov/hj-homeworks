'use strict';


function getNumber() {
    let xhr = new XMLHttpRequest();
    xhr.open(
        "GET",
        "https://neto-api.herokuapp.com/comet/pooling",
        true
    )
    xhr.send();
    xhr.addEventListener('load', (event) => {
        for (const number of document.querySelector('.pooling').children) {
            const gettedNumber = xhr.responseText;
            show(number, gettedNumber);
        }
    })
    window.setTimeout(getNumber, 5000)
}

function show(container, gettedNumber) {
    if (typeof gettedNumber !== 'string' || Number(gettedNumber) < 1 || Number(gettedNumber) > 10) {
        console.log('bad data');
    }
    if (container.classList.contains('flip-it')) {
        container.classList.remove('flip-it')
    }
    if (gettedNumber == container.innerText) {
        container.classList.add('flip-it');
    }
}

getNumber();