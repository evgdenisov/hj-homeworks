'use strict';
let increment = document.getElementById('increment');
let decrement = document.getElementById('decrement');
let reset = document.getElementById('reset');
let buttons = Array.from(document.querySelectorAll('.wrap-btns button'));
let counter = 0;

function outputText () {
    localStorage.counter = counter;
    document.getElementById('counter').textContent = localStorage.counter;
}

function check() {
    if (localStorage.counter === undefined) {
        localStorage.counter = 0;
    }
    else {
        counter = Number(localStorage.counter);
    }
}

function buttonEvent(event) {
    if (event.currentTarget == increment) {
        counter += 1;
    }
    if (event.currentTarget == decrement) {
        if (counter === 0) {
            return;
        }
        counter -= 1;
    }
    if (event.currentTarget == reset) {
        counter = 0;
    }
    outputText();
}

for (const button of buttons) {
    button.addEventListener('click', buttonEvent);
}

check();
outputText();

