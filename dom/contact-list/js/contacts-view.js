'use strict'
let loadedContacts = JSON.parse(loadContacts());
let contactsList = document.querySelector('.contacts-list');
let contactsListHTML = '';
contactsList.innerHTML = '';

loadedContacts.forEach(function(element) {
    contactsListHTML += '<li data-email="' + element.email + '" data-phone="'
     + element.phone +'"><strong>' + element.name + '</strong></li>';
});

contactsList.innerHTML = contactsListHTML;