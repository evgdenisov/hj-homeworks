'use strict'
let listBlock = document.getElementsByClassName('list-block')[0];
let inputs = listBlock.getElementsByTagName('input');
let statusArray = [];

function check (el) {
    if (el.checked) {
        statusArray.push(el)
        return statusArray;
    }
}

function controlStatus () {
    statusArray = [];
    Array.from(inputs).forEach(check);
    if (statusArray.length == 4) {
        document.getElementsByClassName('list-block')[0].classList.add('complete');
    }
    else {
        document.getElementsByClassName('list-block')[0].classList.remove('complete');
    }
    return statusArray;
}

function outputText () {
    document.getElementsByTagName('output')[0].value = `${statusArray.length} из 4`;
}

function eventListener () {
    controlStatus();
    outputText();
}

controlStatus();
outputText();

for (const input of inputs) {
    input.addEventListener('click', eventListener);
}



