'use strict'
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
const PI = Math.PI;

canvas.style.background = "black";

function random(min, max) {
    return Math.random() * (max - min) + min;
}

canvas.addEventListener('click', (mouseevent) => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    let amount = random(200, 400).toFixed();
    for (let i = 0; i < amount; i++) {
        let x = random(0, canvas.width);
        let y = random(0, canvas.height);
        let r = random(0, 1.1).toFixed(2);
        let color = random(0, 3).toFixed();
        newStar(x, y, r, color);
    }
});

function newStar(x, y, r, color) {
    ctx.beginPath();
    if (color === 0) {
        ctx.fillStyle = '#ffffff';
    }
    if (color == 1) {
        ctx.fillStyle = '#ffe9c4';
    }
    if (color == 2) {
        ctx.fillStyle = '#d4fbff';
    }
    ctx.arc(x, y, r, 0, 2 * PI);
    ctx.fill();
};

