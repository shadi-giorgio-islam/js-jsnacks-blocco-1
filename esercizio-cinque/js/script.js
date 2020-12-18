var primoInput = prompt('inserisci prima parola');
var secondoInput = prompt('inserisci seconda parola');

if (primoInput.length < secondoInput.length) {
  console.log(primoInput, secondoInput);
}
else if (secondoInput.length < primoInput.length) {
  console.log(secondoInput, primoInput);
}
else {
  console.log(primoInput, secondoInput);
}
