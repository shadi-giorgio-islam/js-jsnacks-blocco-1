// ESERCIZIO 4
// L’utente inserisce due numeri in successione, con due prompt. Il software stampa il maggiore

var primoInput = parseInt(prompt('inserisci numero'));
var secondoInput = parseInt(prompt('inserisci numero'));

if(primoInput > secondoInput){
  console.log('il numero maggiore è ', primoInput);
}
else if (secondoInput > primoInput) {
  console.log('il numero maggiore è ', secondoInput);
}
else {
  console.log('i due numeri sono uguali');
}
