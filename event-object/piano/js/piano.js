'use strict'
let buttons = document.getElementsByTagName('li');

let play = function () {
    if (document.getElementsByTagName('ul')[0].className == 'lower') {
        this.getElementsByTagName('audio')[0].src = this.getElementsByTagName('audio')[0].src.replace('middle', 'lower');
    }
    if (document.getElementsByTagName('ul')[0].className == 'higher') {
        this.getElementsByTagName('audio')[0].src = this.getElementsByTagName('audio')[0].src.replace('middle', 'higher');
    }
    this.getElementsByTagName('audio')[0].play();
}

for (const button of buttons) {
    button.addEventListener('click', play);
}

document.addEventListener('keypress', (event) => {
    console.log(`зажата`);
})

document.addEventListener('keydown', (event) => {
    if (event.key == 'Shift') {
        document.getElementsByTagName('ul')[0].className = 'lower';
    }
    if (event.key == 'Alt') {
        document.getElementsByTagName('ul')[0].className = 'higher';
    }
});
 
document.addEventListener('keyup', (event) => {
    document.getElementsByTagName('ul')[0].className = 'set middle';
    Array.from(document.getElementsByTagName('audio')).forEach((event) => {
        event.src = event.src.replace('higher', 'middle');
        event.src = event.src.replace('lower', 'middle');
    })
})
