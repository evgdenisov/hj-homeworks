'use strick'
var btns = document.getElementsByClassName('drum-kit__drum');
for (i = 0; i < btns.length; i++) {
    btns[i].onclick = function () {
    this.getElementsByTagName('audio')[0].play();
    };
}



