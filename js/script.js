// Creazione variabili
var surnamesID = document.getElementById("surnames");
var positionID = document.getElementById("position");
var surnames = ["Bianchi", "Neri", "Rossi", "Verdi", "Gialli"];
var surnamesList = "";
var position;

// Input cognome
var userSurname = prompt("Inserisci il tuo cognome");
while (!userSurname || !allLetter(userSurname)) {
    alert("Formato non valido");
    var userSurname = prompt("Inserisci il tuo cognome");
}

// Inserimento cognome
userSurname = capitalize(userSurname.trim());
surnames.push(userSurname);

// Ordinamento lista
surnames.sort()

// Preparazione alla stampa
for (var i = 0; i < surnames.length; i++) {
    if (surnames[i] == userSurname) {
        position = i + 1;
    }
    surnamesList += "<li>" + surnames[i] + "</li>";
}
positionMessage = "Il tuo cognome è in " + position + "° posizione";

// Stampa in console e in pagina
console.table(surnames);
console.log(positionMessage);
surnamesID.innerHTML = surnamesList;
positionID.innerHTML = positionMessage;

// Metodi
function allLetter(inputTxt) {
    var letters = /^[a-zA-Z\s]+$/;
    if (inputTxt.match(letters)) {
        return true;
    }
    else {
        return false;
    }
}
function capitalize(str) {
    var splitStr = str.toLowerCase().split(' ');
    for (var i = 0; i < splitStr.length; i++) {
        splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
    }
    return splitStr.join(' ');
}