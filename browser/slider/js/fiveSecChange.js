'use strict';

let img = document.getElementById('slider');
let step = 1;
let imgArr = ['i/airmax-jump.png', 'i/airmax-on-foot.png', 'i/airmax-playground.png','i/airmax-top-view.png', 'i/airmax.png']
setInterval (() => {
  img.src = imgArr[step]
  step += 1;
  if (step == imgArr.length) {
    step = 0;
  }
}, 5000)