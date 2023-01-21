"use strict";

const sumOfLowest = (arr) => {
  let min = arr[0];
  let secondMin;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  arr.splice(arr.indexOf(min), 1);
  secondMin = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < secondMin) {
      secondMin = arr[i];
    }
  }

  return min + secondMin;
};

console.log(sumOfLowest([10, 343445353, 3453445, 3453545353453]));

// *********** REFACTOR ****************

const sumOfLowestRefactor = (arr) => {
  const min = arr.reduce((acc, num) => (num < acc ? (acc = num) : acc));
  arr.splice(arr.indexOf(min), 1);
  const secondMin = arr.reduce((acc, num) => (num < acc ? (acc = num) : acc));
  return min + secondMin;
};
console.log(sumOfLowestRefactor([10, 343445353, 3453445, 3453545353453]));
