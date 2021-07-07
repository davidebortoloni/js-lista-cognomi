// Creazione variabili
var surnamesID = document.getElementById("surnames");
var positionID = document.getElementById("position");
var surnames = ["Bianchi", "Neri", "Rossi", "Verdi", "Gialli"];

// Input cognome
var userSurname;
do {
    userSurname = prompt("Inserisci il tuo cognome");
    if (userSurname == null || userSurname.trim() === "") {
        userSurname = "";
    }
} while (!allLetter(userSurname));

// Inserimento cognome
userSurname = capitalize(userSurname.trim());
surnames.push(userSurname);

// Ordinamento lista
surnames.sort()

// PREPARAZIONE ALLA STAMPA
// Messaggio con la lista
var surnamesList = "<li>";
surnamesList += surnames.join("</li><li>")
surnamesList += "</li>";
// Messaggio con la posizione
var position;
position = (surnames.indexOf(userSurname)) + 1;
positionMessage = "Il tuo cognome è in " + position + "° posizione";

// Stampa in console e in pagina
console.table(surnames);
console.log(positionMessage);
surnamesID.innerHTML = surnamesList;
positionID.innerHTML = positionMessage;

// METODI
/* Metodo per controllare se nella stringa
siano presenti solo lettere e spazi */
function allLetter(inputTxt) {
    var letters = /^[a-zA-Z\s]+$/;
    if (inputTxt.match(letters)) {
        return true;
    }
    else {
        alert("Inserisci un cognome valido (senza numeri e caratteri speciali)");
        return false;
    }
}
/* Metodo per rendere maiuscole le iniziali di
tutte le parole che compongono il cognome */
function capitalize(str) {
    var splitStr = str.toLowerCase().split(' ');
    for (var i = 0; i < splitStr.length; i++) {
        splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
    }
    return splitStr.join(' ');
}