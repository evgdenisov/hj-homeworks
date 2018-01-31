'use strict';

var position = 0;
var currentPhoto = document.getElementById('currentPhoto');
var photoArr = [ 'i/breuer-building.jpg', 'i/guggenheim-museum.jpg', 'i/headquarters.jpg', 'i/IAC.jpg', 'i/new-museum.jpg'];
var prevBtn = document.getElementById('prevPhoto');
var nextBtn = document.getElementById('nextPhoto');
prevBtn.onclick = function () {
  position -= 1;
  if (position < 0) {
    position = photoArr.length - 1;
  }
  currentPhoto.src = photoArr[position]; 
}
nextBtn.onclick = function () {
  position += 1;
  if (position >= photoArr.length) {
    position = 0;
    currentPhoto.src = photoArr[position];
  }
  currentPhoto.src = photoArr[position]; 
}
