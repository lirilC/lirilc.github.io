var print = document.getElementById('print');
var erase = false;
var calc;

var go = function(x) {
  if (x === 'ce' || x === 'ac') {
    print.value = '';
    erase = false;
  } else if (x === 'eval') {
    print.value = Math.round(evil(print.value)*10000)/10000;
    erase = true;
  } else if (x === 'log' || x ==='sin' || x === 'tan') {
    switch (x) {
      case 'log':
        print.value = Math.log10(print.value);
        break;
      case 'sin':
        print.value = Math.sin(print.value);
        break;
      case 'tan':
        print.value = Math.sin(print.value);
        break;
    }
  } else {
    print.value += x;
  }
}

function evil(fn) {
  return new Function('return ' + fn)();
}