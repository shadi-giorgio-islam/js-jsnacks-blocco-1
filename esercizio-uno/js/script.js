// ESERCIZIO 1
// Il software deve chiedere per 5 volte all’utente di inserire un numero. Il programma stampa la somma di tutti i numeri inseriti. Esegui questo programma in due versioni, con il for e con il while

var numero;
var somma = 0;
var i = 0;

// esercizio con for

for (i = 0; i < 5; i++) {
  numero = parseInt(prompt('Inserisci numero'));
  somma += numero;
}

console.log(somma);

// esercizo con while

// while (i < 5) {
//   i++;
//   numero = parseInt(prompt('Inserisci numero'));
//   somma += numero;
// }
//
// console.log(somma);
