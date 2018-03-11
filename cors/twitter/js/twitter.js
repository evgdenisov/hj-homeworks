'use strict';

const wallpaper = document.querySelector('img[data-wallpaper]');
const username = document.querySelector('h3[data-username]');
const description = document.querySelector('p[data-description]');
const pic = document.querySelector('img[data-pic]');
const tweets = document.querySelector('output[data-tweets]');
const followers = document.querySelector('output[data-followers]');
const following = document.querySelector('output[data-following]');

let functionName = randName();
let data = loadData('https://neto-api.herokuapp.com/twitter/jsonp')
    .then(showBook)
    .catch(error => console.log(error));

function showBook(data) {
    wallpaper.src = data.wallpaper;
    username.textContent = data.username;
    description.textContent = data.description;
    pic.src = data.pic;
    tweets.value = data.tweets;
    followers.value = data.followers;
    following.value = data.following;
}

function randName() {
    return 'function'+ Math.ceil(Math.random() * 10);
}

function loadData(url) {
    return new Promise((done, fail) => {
    window[functionName] = done;
    let script = document.createElement('script');
    script.src = `${url}?jsonp=${functionName}`;
    document.body.appendChild(script);
});
}