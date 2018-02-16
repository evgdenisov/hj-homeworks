'use strict'
let inputs = Array.from(document.getElementsByTagName('input'));
let sendBtn = document.getElementsByClassName('button-contact')[0];
let changeBtn = document.getElementsByClassName('button-contact')[1];
let textArea = document.getElementsByTagName('textarea')[0];
let zipInput = document.getElementsByTagName('input')[5];
let numberChecker = /^\d+$/;

inputs.push(textArea);

function searchEmpty(el) {
    if (el.value === '') {
        return el;
    }
}

function disableBtn () {
    if (inputs.find(searchEmpty) === undefined) {
        sendBtn.disabled = false;
    }
    else {
        sendBtn.disabled = true;
    }
}

function eventInput(input) {
    input.addEventListener('input', disableBtn);
}

function send(event) {
    event.preventDefault();
    document.getElementsByClassName('contentform')[0].classList.add('hidden');
    document.getElementById('output').classList.remove('hidden');
    for (const input of inputs) {
        if (document.getElementById(input.name) !== null) {
            document.getElementById(input.name).value = input.value;
        }
    }
}

function change(event) {
    event.preventDefault();
    document.getElementsByClassName('contentform')[0].classList.remove('hidden');
    document.getElementById('output').classList.add('hidden');
}

function zipChecker(event) {
    
    if (!(numberChecker.test(event.key) || (event.keyCode >= 37 && event.keyCode <= 40) 
    || (event.keyCode == 8) || (event.keyCode == 13) || (event.keyCode == 46))) {
        event.preventDefault();     
    }     
}

inputs.forEach(eventInput);

sendBtn.addEventListener('click', send);

changeBtn.addEventListener('click', change);

zipInput.addEventListener('keydown', zipChecker);



