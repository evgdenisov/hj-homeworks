'use strict';

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
let counter = 0;
let shift = false;
let lineWidth = 'down';
let size = 100;
let status = 'drawOFF';

function resize() {
    canvas.width = document.body.clientWidth;
    canvas.height = document.documentElement.clientHeight;
}

function tick() {
    if (status == 'drawOFF') {
        return;
    } 
    if (shift) {
        if (counter == 0) {
            counter = 359;
        }
        else {
            counter --;
        }
    } 
    else {
        if (counter == 359) {
            counter = 0;
        }
        else {
            counter++;
        }
    }
    if (lineWidth == 'up') {
        if (size == 99) {
            lineWidth = 'down';
        }
        size++;
    }
    else {
        if (size == 6) {
            lineWidth = 'up';
        }
        size--;
    }
    window.setTimeout(tick, 1000);
}

function draw(event) {
    ctx.lineWidth = size;
    ctx.strokeStyle = `hsl(${counter}, 100%, 50%)`;
    ctx.lineJoin = 'round';
    ctx.lineCap = 'round';
    ctx.beginPath();
    ctx.lineTo(event.layerX, event.layerY);
    ctx.closePath();
    ctx.stroke();
}

document.addEventListener('keydown', (event) => {
    if (event.shiftKey) {
        shift = true;
    }
})

document.addEventListener('keyup', (event) => {
    if (!event.shiftKey) {
        shift = false;
    }
    
})

window.addEventListener('resize', resize);

canvas.addEventListener('mousedown', (event) => {
    status = 'draw';
    tick();
    draw(event);
    canvas.addEventListener('mousemove', draw);
});

canvas.addEventListener('mouseup', (event) => {
    status = 'drawOFF';
    canvas.removeEventListener('mousemove', draw);
});

canvas.addEventListener('mouseleave', () => {
    canvas.removeEventListener('mousemove', draw);
});

canvas.addEventListener('dblclick', () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
})


resize();
