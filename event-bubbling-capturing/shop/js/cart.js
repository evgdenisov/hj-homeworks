'use strict';

let btns = document.querySelectorAll('.add-to-cart');

function btnEvent(event) {
    event.preventDefault();
    let item = event.target;
    item.title = event.target.dataset.title;
    item.price = event.target.dataset.price;
    addToCart(item);
}

function addBtns() {
    btns = document.querySelectorAll('.add-to-cart');
    for (const btn of btns) {
        btn.addEventListener('click', btnEvent);
    }
}

addBtns();
document.querySelector('.show-more').addEventListener('click', addBtns);