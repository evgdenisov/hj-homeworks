'use strict';

document.querySelector('.items-list').addEventListener('click', (event) => {
    if (event.target.className = 'add-to-cart') {
        event.preventDefault();
        let item = event.target;
        item.title = event.target.dataset.title;
        item.price = event.target.dataset.price;
        addToCart(item);
    }
})

