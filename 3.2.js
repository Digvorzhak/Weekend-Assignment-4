"use strict";

const busCalc = (arr) => {
  let counter = 0;
  let array = [];
  for (let i = 0; i < arr.length; i++) {
    array[i] = arr[i][0] - arr[i][1];
  }
  return array.reduce((acc, el) => acc + el);
};

console.log(
  busCalc([
    [10, 0],
    [17, 5],
    [12, 8],
    [5, 14],
    [10, 10],
    [10, 26],
  ])
);
