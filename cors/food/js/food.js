'use strict';

let background = document.querySelector('[data-pic]');
let title = document.querySelector('[data-title]');
let ingredients = document.querySelector('[data-ingredients]');
let rating = document.querySelector('[data-rating]');
let width = document.querySelector('[data-star]');
let votes = document.querySelector('[data-votes]');
let consumers = document.querySelector('[data-consumers');
let functionName = randName();

function randName() {
    return 'function'+ Math.ceil(Math.random() * 10);
};

function loadData(url) {
    return new Promise((done, fail) => {
        window[functionName] = done;
        let script = document.createElement('script');
        script.src = `${url}?jsonp=${functionName}`;
        document.body.appendChild(script);
    });
};

function recipe(data) {
    ingredients.innerText = data.ingredients;
    background.style = `background-image : url(${data.pic})`;
    title.innerText = data.title;
    loadData('https://neto-api.herokuapp.com/food/42/rating')
        .then(showRating)
};

function showRating(data) {
    rating.innerText = data.rating.toFixed(2);
    width.style = `width : ${data.rating * 10}%`;
    votes.innerText = `(${data.votes} Оценок)`;
    loadData('https://neto-api.herokuapp.com/food/42/consumers')
        .then(showConsumers);
};

function showConsumers(data) {
    let allConsumers = data.consumers;
    for (const consumer of allConsumers) {
        consumers.innerHTML += `<img src="${consumer.pic}" title="${consumer.name}">`
    }
    consumers.innerHTML += `<span>(+${data.total - allConsumers.length})</span>`
};

loadData('https://neto-api.herokuapp.com/food/42')
.then(recipe);