'use strict';

let todoList = document.getElementsByClassName('todo-list')[0];
let labels = document.getElementsByTagName('label');
let done = document.getElementsByClassName('done')[0];
let undone = document.getElementsByClassName('undone')[0];

function onClick(el) {
    el.preventDefault();
    if (el.target.getElementsByTagName('input')[0].checked) {
        undone.appendChild(el.target);
        el.target.getElementsByTagName('input')[0].checked = false;
    }
    else {
        done.appendChild(el.target);
        el.target.getElementsByTagName('input')[0].checked = true;
    }  
}

for (const label of labels) {
    label.addEventListener('click', onClick)
}

