'use strick'
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
    if (event.code == 'KeyS') {
        document.getElementsByTagName('ul')[0].className = 'lower';
    }
    if (event.code == 'KeyA') {
        document.getElementsByTagName('ul')[0].className = 'higher';
    }
})

document.addEventListener('keyup', (event) => {
    document.getElementsByTagName('ul')[0].className = 'set middle';
    Array.from(document.getElementsByTagName('audio')).forEach((event) => {
        event.src = event.src.replace('higher', 'middle');
        event.src = event.src.replace('lower', 'middle');
    })
})
