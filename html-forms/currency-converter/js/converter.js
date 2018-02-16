'use strict'

let result = document.getElementById('result').value;
let from = document.getElementById('from').value;
let to = document.getElementById('to').value;
let xhr = new XMLHttpRequest();
document.getElementById('loader').classList.remove('hidden');

function optionsCreator (el) {
    document.getElementById('from').innerHTML += '<option value="' + el.value + '">' + el.code + '</option>';
    document.getElementById('to').innerHTML += '<option value="' + el.value + '">' + el.code + '</option>';
}

function onLoad () {
    document.getElementById('content').classList.remove('hidden');
    document.getElementById('loader').classList.add('hidden');
    JSON.parse(xhr.responseText).forEach(optionsCreator);
}

function counter() {
    let source = document.getElementById('source').value;
    let from = document.getElementById('from').value;
    let to = document.getElementById('to').value;
    document.getElementById('result').value = Math.ceil((source * from / to) * 100) / 100;
}

function selectEvent(select) {
    select.addEventListener('input', counter);
}

xhr.open(
    "GET",
    "https://neto-api.herokuapp.com/currency",
    true
);
xhr.send();
xhr.addEventListener('load', onLoad);

document.getElementById('source').addEventListener('input', counter);

Array.from(document.getElementsByTagName('select')).forEach(selectEvent);

