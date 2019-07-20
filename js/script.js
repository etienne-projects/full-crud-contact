
let JSONContacts = JSON.parse("data/Contacts.json");
let contactListElement = document.getElementById('contact-list');
let nameInputElement = document.getElementById('contact_name');
let emailInputElement = document.getElementById('contact_email');

const addContactButton = document.getElementById('btn-add-contact');
addContactButton.addEventListener('click', addContact);

populateContactsArea();

var request = new XMLHttpRequest();
request.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    var myObj = this.responseText;
    document.getElementById("demo").innerHTML = myObj.name;
  }
};
request.open("GET", "../data/Contacts.json", true);
request.send();