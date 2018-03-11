'use strict';

let pic = document.querySelector('img[data-pic]');
let name = document.querySelector('h1[data-name]');
let description = document.querySelector('p[data-description]');
let position = document.querySelector('h3[data-position]');
let technologies = document.querySelector('div[data-technologies]');

let functionName = randName();
loadData('https://neto-api.herokuapp.com/profile/me')
    .then(paste);

function onLoad() {
    document.querySelector('.content').style.display = 'initial';
}

function randName() {
    return 'function'+ Math.ceil(Math.random() * 10);
}

function techno(items) {
    for (const item of items) {
        technologies.innerHTML += `<span class="devicons devicons-${item}"></span>`
    }
}

function paste(data) {
    name.innerText = data.name;
    position.innerText = data.position;
    description.innerText = data.description;
    pic.src = data.pic;
    loadData(`https://neto-api.herokuapp.com/profile/${data.id}/technologies`)
        .then(techno)
        .then(onLoad)
}

function loadData(url) {
    return new Promise((done, fail) => {
        window[functionName] = done;
        let script = document.createElement('script');
        script.src = `${url}?jsonp=${functionName}`;
        document.body.appendChild(script);
    });
}