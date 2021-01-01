// Realizziamo il gioco della morra cinese in JavaScript. Vince chi totalizza per primo 4 punti.

var inputUser;
var numCpu;
var i = 0;
var j = 0;

while (i < 4 && j < 4) {
  inputUser = parseInt(prompt('inserisci 1 per sasso, 2 per forbici, 3 per carta'));
  numCpu = generaRandom(1, 3);
  if ((inputUser == 1 && numCpu == 2) || (inputUser == 2 && numCpu == 3) || (inputUser == 3 && numCpu == 1)) {
    console.log('Vittoria user');
    i++;
  }
  else if ((numCpu == 1 && inputUser == 2) || (numCpu == 2 && inputUser == 3) || (numCpu == 3 && inputUser == 1)) {
    console.log('Vittoria cpu');
    j++;
  }
  else {
    console.log('Pareggio');
  }
  console.log('user ha vinto ',i, 'partite', 'cpu ha vinto ',j, 'partite');
}
if (i == 4) {
  console.log('BRAVO HAI VINTO!!!');
}
else {
  console.log('ha vinto la cpu');
}
// ****FUNZIONI****
function generaRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}
