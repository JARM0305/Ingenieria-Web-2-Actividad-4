const API_URL = "https://jsonplaceholder.typicode.com";

const respuestaHTML = document.getElementById("app");
const ul = document.createDocumentFragment('ul');

fetch(API_URL + '/users')
    .then((response) => response.json())
    .then((users) => {
        const tpl = users.map(user => '<li class="p-2 mb-2 bg-info-subtle text-danger-emphasis"">' + user.name + ' / ' + user.email + '</li>');
        respuestaHTML.innerHTML = '<ul style="list-style-type: none;">' + tpl + '</ul>';
    });