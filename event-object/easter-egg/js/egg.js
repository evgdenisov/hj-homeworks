'use strick'
document.addEventListener('keypress', (event) => {
    if (event.code == 'KeyT' && event.altKey && event.ctrlKey) {
        document.getElementsByTagName('nav')[0].classList.toggle('visible');
    }
});

let secretString = '';

document.addEventListener('keydown', (event) => {
    switch (event.code) {
        case ('KeyY') :
            secretString += 'н'
        break;
        case ('KeyT') :
            secretString += 'е';
        break;
        case ('KeyN') :
            secretString += 'т';
        break;
        case ('KeyJ') :
            secretString += 'о';
        break;
        case ('KeyK') :
            secretString += 'л';
        break;
        case ('KeyU') :
            secretString += 'г';
        break;
        case ('KeyB') :
            secretString += 'и';
        break;
        case ('KeyZ') :
            secretString += 'я';
            if (secretString.slice(-9) == "нетология") {
                document.getElementsByClassName('secret')[0].classList.add('visible');
            }
        break;
        default :
            secretString = '';
        break;
    }
    
})
