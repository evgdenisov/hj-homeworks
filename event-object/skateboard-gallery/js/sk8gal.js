'use strict'
let miniPicks = document.getElementsByTagName('a');

Array.from(miniPicks).forEach(miniPicture => {
    miniPicture.addEventListener('click', (event) => {
        event.preventDefault();
        Array.from(miniPicks).forEach(mini => {
            mini.classList.remove('gallery-current');
        })
        miniPicture.classList.add('gallery-current');
        document.getElementById('view').src = event.currentTarget.href;
    });
})

