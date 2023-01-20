"use strict";

const centuryFromYear = (year) => {
  let array = [];
  let century = 1;

  for (let i = 0; i < year; i++) {
    array[i] = [];
  }

  for (let i = 1; i <= year; i++) {
    if ((i - 1) % 100 === 0 && i !== 1) {
      century++;
    }
    array[century - 1][i - 1] = i;
  }
  // console.log(array);

  return century;
};

// console.log(centuryFromYear(1939));
