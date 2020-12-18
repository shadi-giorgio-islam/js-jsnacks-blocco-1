// ESERCIZIO 2
// Crea un array vuoto. Chiedi per 6 volte all’utente di inserire un numero, se è dispari inseriscilo nell’array

var numeriArray = [];
var inputNumero ;

for (var i = 0; i < 6; i++) {
  inputNumero = parseInt(prompt('inserisci numero'));
  if (inputNumero % 2 != 0) {
    numeriArray.push(inputNumero);
  }
}

console.log(numeriArray);
