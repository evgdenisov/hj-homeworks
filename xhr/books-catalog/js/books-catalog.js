'use strict'
let xhr = new XMLHttpRequest();

xhr.open(
    "GET",
    "https://neto-api.herokuapp.com/book/",
    true
)
xhr.send();
xhr.addEventListener('load', onLoad);

function itemCreator(book) {
    document.getElementById('content').innerHTML += '<li data-title="' + book.title + '" data-author="'
    + book.author.name + '" data-info="' + book.info + '" data-price="' + book.price + '">' +
    '<img src="' + book.cover.small + '"></li>';
}

function onLoad() {
    document.getElementById('content').innerHTML = '';
    JSON.parse(xhr.responseText).forEach(itemCreator);
}
