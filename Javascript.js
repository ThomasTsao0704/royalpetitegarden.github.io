let googleparking = document.querySelector("#mapparking");
let googlegas = document.querySelector("#mapgas");
let googlegogoro = document.querySelector("#mapgogoro");

function displayNone() {
    googlegas.style.display = "none";
    googleparking.style.display = "none"
    googlegogoro.style.display = "none"
}

function changemapparking() {
    displayNone();
    googleparking.style.display = "block";
}
function changemapgas() {
    displayNone();
    googlegas.style.display = "block";
}
function changemappower() {
    displayNone();
    googlegogoro.style.display = "block";
}
function changemapgogoro() {
    displayNone();
    googlepower.style.display = "block";
}

