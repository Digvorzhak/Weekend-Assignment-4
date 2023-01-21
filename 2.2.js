"use strict";

const binaryCalc = (arr) => {
  arr.reverse();
  let counter = 0;
  for (let i = 0; i < arr.length; i++) {
    counter += Math.pow(2, i) * arr[i];
  }
  return counter;
};

console.log(binaryCalc([1, 1, 1, 1]));

// *********** REFACTOR ******************

const binaryCalc1 = (arr) => arr.reverse().reduce((acc, el, i) => acc + Math.pow(2, i) * el, 0);

console.log(binaryCalc1([1, 1, 1, 1]));
