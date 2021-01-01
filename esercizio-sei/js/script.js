var num = generaRandom(1, 100);
var inputNumero;
var i = 0;
var flag;
var difficolta = parseInt(prompt('Inserisci 1 per difficolta bassa, inserisci 2 per difficolta media, inserisci 3 per difficolta alta'));
// scelta difficoltà
switch (difficolta) {
  case 1:
    console.log('difficoltà bassa');
    flag = indovinaNumero(16);
    break;
  case 2:
    console.log('difficoltà media');
    flag = indovinaNumero(8);
    break;
  case 3:
    console.log('difficoltà alta');
    flag = indovinaNumero(4);
    break;
  default:
  alert('Devi inserire 1,2 o 3 per la difficoltà');
}
// esito
if (flag) {
  console.log('Bravo hai indovinato!!!');
}
else {
  console.log('Hai esaurito i tuoi tentativi il numero da indovinare era', num);
}
// ****FUNZIONI****
function generaRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function indovinaNumero(tentativi) {
  var sentinella = false;
  var i = 0;
  while (i < tentativi && sentinella == false) {
    inputNumero = parseInt(prompt('Inserisci numero'));
    console.log(tentativi-i,'tentativi rimanenti');
    if (inputNumero < num) {
      console.log('il numero da indovianre è più alto');
    }
    else if (inputNumero > num) {
      console.log('il numero da indovianre è più basso');
    }
    else{
      sentinella = true;
    }
    i++;
  }
  return sentinella;
}
