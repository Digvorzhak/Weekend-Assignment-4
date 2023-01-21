"use strict";

const summation = (num) => {
  let arr = [];
  for (let i = num; i > 0; i--) {
    arr[i] = i;
    console.log(arr[i]);
  }
  return arr.reduce((acc, el) => el + acc);
};

console.log(summation(8));
