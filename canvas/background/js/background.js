'use strict'

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
const PI = Math.PI;
const amount = randomInt(50, 200);
const crosses = [];
const circles = [];

canvas.height = document.body.clientHeight;
canvas.width = document.body.clientWidth;
ctx.strokeStyle = 'white';

class Item {
    constructor() {
        this.x = Math.round(random(0, canvas.width));
        this.y = Math.round(random(0, canvas.height));
        this.startX = this.x;
        this.startY = this.y;
        this.size = Math.round(random(0.1, 0.6) * 10) / 10;
        this.lineWidth = 5 * this.size;
    }
    updatePosition() {
        const { x, y } = this.nextPoint(this.startX , this.startY, Date.now());
        this.x = x;
        this.y = y;
    }
}

class CircleItem extends Item {
    constructor() {
        super();
        this.radius = Math.round(this.size * 12);
    }
    drawCircle() {
        ctx.beginPath();
        ctx.lineWidth = this.lineWidth;
        ctx.arc(this.x, this.y, this.radius, 0, 2 * PI);
        ctx.stroke();
    }
}

class CrossItem extends Item {
    constructor() {
        super();
        this.half = this.size * 10;
        this.angle = Math.round(random(0, 2 * PI));
        this.angleSpeed = Math.round(random(-0.2, 0.2) * 10) / 1000;
    }
    drawCross() { 
        ctx.save();
        ctx.beginPath();
        ctx.lineWidth = this.lineWidth;
        ctx.moveTo(this.x, this.y - this.half);
        ctx.lineTo(this.x, this.y + this.half);
        ctx.moveTo(this.x - this.half, this.y);
        ctx.lineTo(this.x + this.half, this.y);
        ctx.stroke();
        ctx.restore();
    } 
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < crosses.length; i++) {
        crosses[i].updatePosition();
        crosses[i].drawCross();
        circles[i].updatePosition();
        circles[i].drawCircle();
    }
    window.setTimeout(draw, 50);
}

function random(min, max) {
    return Math.random() * (max - min) + min;
};

function randomInt(min, max) {
    let amount = Math.round(random(min, max));
    if (amount % 2) {
        amount++;
    }
    return amount;
}

function nextPointOne(x, y, time) {
    return {
      x: x + Math.sin((50 + x + (time / 10)) / 100) * 3,
      y: y + Math.sin((45 + x + (time / 10)) / 100) * 4
    };
};

function nextPointTwo(x, y, time) {
    return {
      x: x + Math.sin((x + (time / 10)) / 100) * 5,
      y: y + Math.sin((10 + x + (time / 10)) / 100) * 2
    }
};


for (let i = 0; i < amount / 2; i++) {
    const item = new CircleItem;
    if (Math.random() < 0.5) {
        item.nextPoint = nextPointOne;
    }
    else {
        item.nextPoint = nextPointTwo;
    }
    circles.push(item);
}
for (let i = 0; i < amount / 2; i++) {
    const item = new CrossItem;
    if (Math.random() < 0.5) {
        item.nextPoint = nextPointOne;
    }
    else {
        item.nextPoint = nextPointTwo;
    }
    crosses.push(item);
}

draw();

document.addEventListener('click', (event) => {
    console.log(event)
})