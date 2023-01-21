"use strict";

const arr = [1, 2, 3, false, "hi", undefined];
const callback = (el, i, array) => (typeof el === "string" ? el : null);

function myEach(array, func) {
  for (let i = 0; i < array.length; i++) {
    func(array[i], i, array);
  }
}

myEach(arr, callback);

function myMap(arr, func) {
  let mapArray = [];
  for (let i = 0; i < arr.length; i++) {
    mapArray.push(func(arr[i], i, arr));
  }
  return mapArray;
}

console.log(myMap(arr, callback));

function myFilter(arr, func) {
  const newArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (func(arr[i], i, arr)) {
      newArray.push(arr[i]);
    }
  }
  return newArray;
}

myFilter(arr, callback);
