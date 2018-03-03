'use strict';
    
let xhrSize = new XMLHttpRequest();
let xhrColor = new XMLHttpRequest();
let xhrCart = new XMLHttpRequest();
let xhrPostToCart = new XMLHttpRequest();
let xhrRemove = new XMLHttpRequest();

let addToCart = document.querySelector('#AddToCart');

xhrSize.open('GET', 'https://neto-api.herokuapp.com/cart/sizes');
xhrSize.send();
xhrSize.addEventListener('load', () => {
    let innerHTML = '';
    let sizes = JSON.parse(xhrSize.response);
    for (const size of sizes) {
        let available = '';
        let disabled = '';
        if (size.isAvailable) {
            available = 'available';
        }
        else {
            available = 'soldout';
            disabled = 'disabled';
        }
        innerHTML += `
        <div data-value="${size.type}" class="swatch-element plain ${size.type} ${available}">
        <input id="swatch-0-${size.type}" type="radio" name="size" value="${size.type}" ${disabled}>
        <label for="swatch-0-${size.type}">
          ${size.title}
          <img class="crossed-out" src="https://neto-api.herokuapp.com/hj/3.3/cart/soldout.png?10994296540668815886">
        </label>
      </div>`
    }
    document.getElementById('sizeSwatch').innerHTML += innerHTML;
});

xhrColor.open('GET', 'https://neto-api.herokuapp.com/cart/colors');
xhrColor.send();
xhrColor.addEventListener('load', () => {
    let innerHTML = '';
    let colors = JSON.parse(xhrColor.response);
    for (const color of colors) {
        let available = '';
        let disabled = '';
        if (color.isAvailable) {
            available = 'available';
        }
        else {
            available = 'soldout';
            disabled = 'disabled';
        }
        innerHTML += `
        <div data-value="${color.type}" class="swatch-element color ${color.type} ${available}">
          <div class="tooltip">${color.title}</div>
          <input quickbeam="color" id="swatch-1-${color.type}" type="radio" name="color" value="${color.type}"  ${disabled}>
          <label for="swatch-1-${color.type}" style="border-color: red;">
            <span style="background-color: ${color.code};"></span>
            <img class="crossed-out" src="https://neto-api.herokuapp.com/hj/3.3/cart/soldout.png?10994296540668815886">
          </label>
        </div>`;
    }
    document.getElementById('colorSwatch').innerHTML += innerHTML;
})

function cart(cartInfo) {
    let open = 'open'; 
    if (cartInfo === undefined) {
        document.querySelector('#quick-cart').innerHTML = '';
        return;
    }
    let totalPrice = cartInfo.quantity * cartInfo.price;
    document.querySelector('#quick-cart').innerHTML = 
    `<div class="quick-cart-product quick-cart-product-static" id="quick-cart-product-${cartInfo.id}" style="opacity: 1;">
    <div class="quick-cart-product-wrap">
      <img src="${cartInfo.pic}" title="${cartInfo.title}">
      <span class="s1" style="background-color: #000; opacity: .5">$800.00</span>
      <span class="s2"></span>
    </div>
    <span class="count hide fadeUp" id="quick-cart-product-count-${cartInfo.id}">${cartInfo.quantity}</span>
    <span class="quick-cart-product-remove remove" data-id="${cartInfo.id}"></span>
    </div>
    <a id="quick-cart-pay" quickbeam="cart-pay" class="cart-ico ${open}">
    <span>
    <strong class="quick-cart-text">Оформить заказ<br></strong>
    <span id="quick-cart-price">$${totalPrice}.00</span>
    </span>
    </a>`
}

function cartOnLoad() {
    let cartInfo = JSON.parse(xhrCart.response)[0];
    if (cartInfo === undefined) {
        return;
    }
    cart(cartInfo);
}

function removeOnLoad() {
    cart(JSON.parse(xhrRemove.response)[0]);
    addRemoveEvent();
}

function removeEvent() {
    let formData = new FormData;
    formData.append('productId', document.querySelector('.remove').dataset.id);
    xhrRemove.open('POST', 'https://neto-api.herokuapp.com/cart/remove');
    xhrRemove.send(formData);
    xhrRemove.addEventListener('load', removeOnLoad);
}

function addRemoveEvent() {
    if (document.querySelector('.remove') == null) {
        return;
    }
    document.querySelector('.remove').addEventListener('click', removeEvent);
}

function addToCartEvent(event) {
    event.preventDefault();
    let form = document.getElementById('AddToCartForm');
    let test = {};
    let formData = new FormData(form);
    formData.append('productId', document.getElementById('AddToCartForm').dataset.productId);
    xhrCart.open("POST", "https://neto-api.herokuapp.com/cart");
    xhrCart.send(formData);
}

xhrCart.open('GET', 'https://neto-api.herokuapp.com/cart');
xhrCart.send();
xhrCart.addEventListener('load', cartOnLoad);


xhrCart.addEventListener('load', addRemoveEvent);
addToCart.addEventListener('click', addToCartEvent);

function sizeChangeToStorage(event) {
    let ArraySizeInputs = Array.from(document.getElementById('sizeSwatch').getElementsByTagName('input'))
    for (const sizeInput of ArraySizeInputs) {
        sizeInput.addEventListener('change', (event) => {
            localStorage.currentSizeId = event.currentTarget.id;
        })
    }
}

function sizeChangeFromStorage() {
    if (localStorage.currentSizeId == undefined) {
        return;
    }
    document.getElementById(localStorage.currentSizeId).checked = true;
}

function colorChangeToStorage(event) {
    let ArrayColorInputs = Array.from(document.getElementById('colorSwatch').getElementsByTagName('input'))
    for (const ColorInput of ArrayColorInputs) {
        ColorInput.addEventListener('change', (event) => {
            localStorage.currentColorId = event.currentTarget.id;
        })
    }
}

function colorChangeFromStorage() {
    if (localStorage.currentColorId == undefined) {
        return;
    }
    document.getElementById(localStorage.currentColorId).checked = true;
}

xhrSize.addEventListener('load', sizeChangeToStorage);
xhrSize.addEventListener('load', sizeChangeFromStorage);


xhrColor.addEventListener('load', colorChangeToStorage);
xhrColor.addEventListener('load', colorChangeFromStorage);