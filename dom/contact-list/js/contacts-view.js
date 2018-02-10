'use strict'
let loadedContacts = JSON.parse(loadContacts());

document.querySelector('.contacts-list').innerHTML = '';

loadedContacts.forEach(function(element) {

    document.querySelector('.contacts-list').innerHTML += '<li data-email="' + element.email + '" data-phone="'
     + element.phone +'"><strong>' + element.name + '</strong></li>';
});

