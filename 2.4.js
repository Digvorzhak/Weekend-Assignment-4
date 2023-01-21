"use strict";

const findUniq = (arr) => {
  let notUnique = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (notUnique === arr[i]) {
      notUnique = arr[i];
    } else {
      return arr[i];
    }
  }
};

console.log(findUniq([1, 1, 1, 2, 1, 1]));
