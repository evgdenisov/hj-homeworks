'use strict'

const showMapBtn = document.querySelector('#btnSeatMap');
const seatMapDiv = document.querySelector('#seatMapDiv');
const btnSetFull = document.querySelector('#btnSetFull');
const btnSetEmpty = document.querySelector('#btnSetEmpty');


function showPlanePassengers(plane, passengers) {
    document.querySelector('#seatMapTitle').textContent = `${plane} (${passengers} пассажиров)`;
}

function showMap(el) {
    const scheme = el.scheme;
    const letters6 = el.letters6;
    const letters4 = el.letters4; 
    while (seatMapDiv.firstChild) {
        seatMapDiv.removeChild(seatMapDiv.firstChild);
    };
    for (let i = 0; i < scheme.length; i++) {
        seatMapDiv.appendChild(createRow(scheme[i], letters6, letters4, (i+1)));
    };
    showPlanePassengers(el.title, el.passengers);
    activeBtns();
}

function createMap(event) {
    event.preventDefault();
    fetch(`https://neto-api.herokuapp.com/plane/${document.querySelector('select').value}`)
    .then(res => res.json())
    .then(showMap);
}

function createSeat(letter) {
    const seat = document.createElement('div');
    seat.className = 'col-xs-4 seat';
    const seatLabel = document.createElement('span');
    seatLabel.className = 'seat-label';
    seatLabel.textContent = `${letter}`;
    seat.appendChild(seatLabel);
    return seat;
}

function createNoSeat() {
    const noSeat = document.createElement('div');
    noSeat.className = 'col-xs-4 no-seat';
    return noSeat;
}

function createRow(scheme, letters6, letters4, number) {
    const seatingRow = document.createElement('div');
    seatingRow.className = 'row seating-row text-center';
    const rowNumber = document.createElement('div');
    rowNumber.className = 'col-xs-1 row-number';
    const rowNumberText = document.createElement('h2');
    rowNumberText.textContent = number;
    rowNumber.appendChild(rowNumberText);
    seatingRow.appendChild(rowNumber);

    if (scheme == 6) {
        const ACsixRow = document.createElement('div');
        ACsixRow.className = 'col-xs-5';
        const DFsixRow = document.createElement('div');
        DFsixRow.className = 'col-xs-5';
        for (let i = 0; i < 3; i++) {
            ACsixRow.appendChild(createSeat(letters6[i]));
        }
        seatingRow.appendChild(ACsixRow);
        for (let i = 3; i < 6; i++) {
            DFsixRow.appendChild(createSeat(letters6[i]));
        }
        seatingRow.appendChild(DFsixRow);
    }
    if (scheme == 4) {
        const ACfourRow = document.createElement('div');
        ACfourRow.className = 'col-xs-5';
        const DFfourRow = document.createElement('div');
        DFfourRow.className = 'col-xs-5';

        ACfourRow.appendChild(createNoSeat());
        for (let i = 0; i < 2; i++) {
            ACfourRow.appendChild(createSeat(letters4[i]));
        }
        seatingRow.appendChild(ACfourRow);

        for (let i = 2; i < 4; i++) {
            DFfourRow.appendChild(createSeat(letters4[i]));
        }
        DFfourRow.appendChild(createNoSeat());
        seatingRow.appendChild(DFfourRow);
    }
    if (scheme === 0) {
        const ACzeroRow = document.createElement('div');
        ACzeroRow.className = 'col-xs-5';
        const DFzeroRow = document.createElement('div');
        DFzeroRow.className = 'col-xs-5';
        for (let i = 0; i < 3; i++) {
            ACzeroRow.appendChild(createNoSeat());
        }
        for (let i = 3; i < 6; i++) {
            DFzeroRow.appendChild(createNoSeat());
        }
        seatingRow.appendChild(ACzeroRow);
        seatingRow.appendChild(DFzeroRow);
    }
    return seatingRow;   
}

function selectPlace(event) {
    const classList = event.target.parentElement.classList;
    if (!classList.contains('col-xs-4')) {
        return
    }
    if (classList.contains('half') || classList.contains('adult')) {
        classList.remove('half');
        classList.remove('adult');
        showSelectedPlaces();
        return
    }
    if (event.altKey) {
        classList.add('half');
    }
    else {
        classList.add('adult');
    }
    showSelectedPlaces();
}

function showSelectedPlaces() {
    const adult = document.querySelectorAll('.adult').length;
    const half = document.querySelectorAll('.half').length;
    document.querySelector('#totalAdult').textContent = adult;
    document.querySelector('#totalHalf').textContent = half;
    document.querySelector('#totalPax').textContent = half + adult;
}

showMapBtn.addEventListener('click', createMap);
seatMapDiv.addEventListener('click', selectPlace);

function setEmpty() {
    document.querySelectorAll('.col-xs-4.seat').forEach((el) => {
        el.classList.remove('half');
        el.classList.remove('adult');
        showSelectedPlaces()
    })
}

function setFull(event) {
    setEmpty();
    document.querySelectorAll('.col-xs-4.seat').forEach((el) => {
        if (event.altKey) {
            el.classList.add('half')
        }
        else {
            el.classList.add('adult');
        }
       
        showSelectedPlaces()
    })
}

function activeBtns() {
    btnSetFull.disabled = false;
    btnSetEmpty.disabled = false;
}

btnSetFull.addEventListener('click', (event) => {
    event.preventDefault();
    setFull(event);
});

btnSetEmpty.addEventListener('click', (event) => {
    event.preventDefault();
    setEmpty();
})

btnSetFull.disabled = true;
btnSetEmpty.disabled = true;

