// Realizzare (utilizzando i cicli for) una piramide di asterischi
var i = 1
var lenghtLeft = 10;
var lenghtRight = 10;
  while (i < 11) {
    document.getElementById('albero').innerHTML += '<br>';
    for (var z = 0; z < lenghtLeft / 2; z++) {
      document.getElementById('albero').innerHTML += '⬜';
    }
    lenghtLeft -= 2;
    for (var j = 0; j < i; j++) {
      document.getElementById('albero').innerHTML += '🔺';
    }
    i += 2;
    for (var k = 0; k < lenghtRight / 2; k++) {
      document.getElementById('albero').innerHTML += '⬜';
    }
    lenghtRight -= 2;
  }
