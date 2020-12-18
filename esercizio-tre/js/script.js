// ESERCIZIO 3
// In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.

var listaNomi = ['Carlo', 'Marco', 'Alessandro', 'Giuseppe', 'luca'];
var inputNome = prompt('Inserisci nome');
var accesso = 0;
inputNome = inputNome.charAt(0).toUpperCase() + inputNome.slice(1)

for (var i = 0; i < listaNomi.length; i++) {
  if (inputNome == listaNomi[i]) {
    accesso = 1;
  }
}

if (accesso == 1) {
  console.log('puoi partecipare');
}
else {
  console.log('non puoi partecipare');
}
