'use strick'
let audioArr = ['https://netology-code.github.io/hj-homeworks/html-element-collection/audioplayer/mp3/LA Chill Tour.mp3',
                'https://netology-code.github.io/hj-homeworks/html-element-collection/audioplayer/mp3/This is it band.mp3',
                'https://netology-code.github.io/hj-homeworks/html-element-collection/audioplayer/mp3/LA Fusion Jam.mp3'];
let mediaplayer = document.getElementsByClassName('mediaplayer')[0];
let audioFile = mediaplayer.getElementsByTagName('audio')[0];
let playState = document.getElementsByClassName('playstate')[0];
let playBtn = playState.getElementsByClassName('fa-play')[0];
let stopBtn = document.getElementsByClassName('stop')[0];
let forwardBtn = document.getElementsByClassName('next')[0];
let backwardBtn = document.getElementsByClassName('back')[0];
let audioFileTitle = document.getElementsByClassName('title')[0];

playState.onclick = function() {
    if (mediaplayer.classList.contains('play')) {
        mediaplayer.classList.remove('play');
        audioFile.pause();
    }
    else {
        mediaplayer.classList.add('play');
        audioFile.play();
    }
}

stopBtn.onclick = function() {
    audioFile.pause();
    mediaplayer.classList.remove('play');
    audioFile.currentTime = 0;
}

let position = 0;
 
forwardBtn.onclick = function () {
    position += 1;
    if (position == (audioArr.length)) {
        position = 0;
    }
    audioFile.src = audioArr[position];
    audioFile.play();
    mediaplayer.classList.add('play');
    audioFileTitle.title = audioFile.src.substring( audioFile.src.lastIndexOf("/") + 1, audioFile.src.lastIndexOf(".") ).replace(/[%20]{3,3}/g, ' ');
} 

backwardBtn.onclick = function () {
    position -= 1;
    if (position < 0) {
        position = audioArr.length - 1;
    }
    audioFile.src = audioArr[position];
    audioFile.play();
    mediaplayer.classList.add('play');
    audioFileTitle.title = audioFile.src.substring( audioFile.src.lastIndexOf("/") + 1, audioFile.src.lastIndexOf(".") ).replace(/[%20]{3,3}/g, ' ');
}



