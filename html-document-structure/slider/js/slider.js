'use strict';

let btnsArr = Array.from(document.getElementsByClassName('slider-nav')[0].children);
let prevBtn = btnsArr[0];
let nextBtn = btnsArr[1];
let firstBtn = btnsArr[2];
let lastBtn = btnsArr[3];
let slidesParent = document.getElementsByClassName('slides')[0];
let firstSlide = slidesParent.firstElementChild;
let lastSlide = slidesParent.lastElementChild;
let currentSlide = slidesParent.getElementsByClassName('slide-current')[0];

function slideChanger(btn) {
    if (btn.target.classList.contains('disabled')) {
        return;
    }
    currentSlide = slidesParent.getElementsByClassName('slide-current')[0];
    currentSlide.classList.remove('slide-current');
    switch (btn.target) {
        case nextBtn : 
        currentSlide.nextElementSibling.classList.add('slide-current');
        break;
        case prevBtn : 
        currentSlide.previousElementSibling.classList.add('slide-current');
        break;
        case firstBtn : 
        firstSlide.classList.add('slide-current');
        break;
        case lastBtn : 
        lastSlide.classList.add('slide-current');
        break;
    }
}

function disabler () {
    for (const btn of btnsArr) {
        btn.classList.remove('disabled');
    }
    if (slidesParent.getElementsByClassName('slide-current')[0].previousElementSibling === null) {
        prevBtn.classList.add('disabled');
        firstBtn.classList.add('disabled'); 
    }
    if (slidesParent.getElementsByClassName('slide-current')[0].nextElementSibling === null) {
        nextBtn.classList.add('disabled');
        lastBtn.classList.add('disabled');
    }
}

for (const btn of btnsArr) {
    btn.addEventListener('click', (btn) => {
        slideChanger(btn);
        disabler();
    });
}

slidesParent.firstElementChild.classList.add('slide-current');
disabler();

