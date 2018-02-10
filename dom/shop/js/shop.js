'use strict'
let boxes = document.querySelectorAll('.box');
let counter = 0;
let totalPrice = 0;

Array.from(boxes).forEach(box => {
    let button = box.getElementsByTagName('button')[0];
    button.addEventListener('click', () => {
        counter += 1;
        document.querySelector('.cart .head h3 span').innerHTML = counter;
        
        totalPrice += Number(box.querySelector('button').dataset.price);
        document.querySelector('#cart-total-price').innerHTML = getPriceFormatted(totalPrice);
    })

})