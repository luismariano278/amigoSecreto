// Challenge Amigo Secreto 
// Autor: Luis Mariano Martínez Mondragón    mar 2025

const friendsList = document.getElementById('listaAmigos'); 
const nameInput = document.getElementById('amigo');
const restartButton = document.getElementById('restart');
const resultContainer = document.getElementById('resultado');
let secretFriendsNames = [];

function addFriend() {
    let friendsName = nameInput.value.trim(); 

    if (friendsName !== '') {
        if (!secretFriendsNames.includes(friendsName)) {
            let newElement = document.createElement('li');
            newElement.textContent = friendsName;
            friendsList.appendChild(newElement);
            secretFriendsNames.push(friendsName);
        } else {
            alert('Este nombre ya está en la lista.');
        }
        nameInput.value = '';
    } else {
        alert('¡Error! Ingresa un nombre válido');
    }
}

function getSecretFriend() {
    if (secretFriendsNames.length === 0) {
        alert('No hay nombres en la lista. Agrega algunos amigos primero.');
        return;
    }

    let randomIndex = Math.floor(Math.random() * secretFriendsNames.length);
    let secretFriend = secretFriendsNames[randomIndex];

    
    resultContainer.innerHTML = '';

    let newH1Element = document.createElement('h1');
    newH1Element.style.color = 'green';
    newH1Element.textContent = `El amigo secreto es: ${secretFriend}`;
    resultContainer.appendChild(newH1Element);

    restartButton.style.display = 'block'; 
}

function restartGame() {
    friendsList.innerHTML = ''; 
    resultContainer.innerHTML = ''; 
    secretFriendsNames = [];
    restartButton.style.display = 'none'; 
}
