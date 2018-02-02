'use strick'
var wrapperDropDown = document.getElementsByClassName('wrapper-dropdown')[0];
wrapperDropDown.onclick = function () {
    this.classList.toggle('active');
}