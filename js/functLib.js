function addContact(e) {

    e.preventDefault();

    let name = nameInputElement.value;
    let email = emailInputElement.value;

    let contact = {};
    contact.id = (JSONContacts.my_contacts.length + 1);
    contact.name = name;
    contact.email = email;

    JSONContacts.my_contacts.push(contact);

    populateContactsArea();

}

function getContact(id) {
    var index = (id - 1);
    return JSONContacts.my_contacts[id];
}

function getAllContacts() {
    return JSONContacts.my_contacts;
}

function deleteContact(id) {

    let index = id - 1;
    JSONContacts.my_contacts;
    JSONContacts.my_contacts.splice(index, 1);

}

function populateContactsArea() {

    let myContacts = getAllContacts();

    var output = "<table>";
    output += "<tr>";
    output += "<th>ID</th>";
    output += "<th>Name</th>";
    output += "<th>Email</th>";
    output += "</tr>";

    myContacts.forEach(element => {
        output += "<tr id=update_contact_" + element.id + ">";
        output += "<td>" + element.id + "</td>";
        output += "<td>" + element.name + "</td>";
        output += "<td>" + element.email + "</td>";
        output += "<td><button id=\"btn-update_contact\">Update</button></td>";
        output += "</tr>";
    });
    output += "</table>"

    contactListElement.innerHTML = output;

}