'use strict';



let signupOutput = document.querySelector('.sign-up-htm .error-message');
let signinOutput = document.querySelector('.sign-in-htm .error-message');
let signupBtn = document.querySelector('.sign-up-htm .button');
let signinBtn = document.querySelector('.sign-in-htm .button');
let buttons = Array.from(document.getElementsByClassName('button'));
let xhr = new XMLHttpRequest();

function buttonsEvent(event) {
    event.preventDefault();
    let formData = new FormData(event.currentTarget.parentElement.parentElement);
    let formContent = {};
    for (const [key, value] of formData) {
        formContent[key] = value;
    }
    if (event.currentTarget == signinBtn) {
        xhr.open('POST', 'https://neto-api.herokuapp.com/signin');
    }
    if (event.currentTarget == signupBtn) {
        xhr.open('POST', 'https://neto-api.herokuapp.com/signup');
    }   
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify(formContent));
}

function onLoad(event) {
    if (event.target.responseURL == 'https://neto-api.herokuapp.com/signup') {
        if (JSON.parse(xhr.response).error === undefined) {
            signupOutput.textContent = `Пользователь ${JSON.parse(xhr.response).name} успешно зарегистрирован`;
        }
        else {
            signupOutput.textContent = JSON.parse(xhr.response).message;
        }
    }
    if (event.target.responseURL == 'https://neto-api.herokuapp.com/signin') {
        if (JSON.parse(xhr.response).error === undefined) {
            signinOutput.textContent = `Пользователь ${JSON.parse(xhr.response).name} успешно авторизован`;
        }
        else {
            signinOutput.textContent = JSON.parse(xhr.response).message;
        }
    }  
}

for (const button of buttons) {
    button.addEventListener('click', buttonsEvent);
}

xhr.addEventListener('load', onLoad); 