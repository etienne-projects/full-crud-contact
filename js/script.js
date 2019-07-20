
// let JSONContacts = JSON.parse('{ "name":"John", "age":30, "city":"New York"}');
let JSONContacts = JSON.parse('../data/contacts.txt');
let contactListElement = document.getElementById('contact-list');
let nameInputElement = document.getElementById('contact_name');
let emailInputElement = document.getElementById('contact_email');

const addContactButton = document.getElementById('btn-add-contact');
addContactButton.addEventListener('click', addContact);

// populateContactsArea();

