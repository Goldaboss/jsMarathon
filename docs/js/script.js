"use strict";

var firstRow = 'мама мыла раму';
var secondRow = 'собака друг человека';

function getRow(firstRow, secondRow) {
  var current = '';
  var total = 0;

  for (var i = 0; i < arguments.length; i++) {
    var summ = 0;

    for (var q = 0; q < arguments[i].length; q++) {
      if (arguments[i].charAt(q) === 'а') {
        summ++;
      }

      if (summ > total) {
        total = summ;
        current = arguments[i];
      }
    }
  }

  return alert(current.toUpperCase());
}

console.log(getRow(firstRow, secondRow));