var surnamesID = document.getElementById("surnames");
var positionID = document.getElementById("position");
var surnames = ["Bianchi", "Neri", "Rossi", "Verdi", "Gialli"];

var userSurname = capitalize(prompt("Inserisci il tuo cognome").trim());
while (!userSurname || !allLetter(userSurname)) {
    alert("Formato non valido");
    var userSurname = capitalize(prompt("Inserisci il tuo cognome").trim());
}
surnames.push(userSurname);
surnames.sort()

var surnamesList = "";
var position;
for (var i = 0; i < surnames.length; i++) {
    if (surnames[i] == userSurname) {
        position = i + 1;
    }
    surnamesList += "<li>" + surnames[i] + "</li>";
}
console.table(surnames);
surnamesID.innerHTML = surnamesList;
positionMessage = "Il tuo cognome è in " + position + "° posizione";
console.log(positionMessage);
positionID.innerHTML = positionMessage;

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