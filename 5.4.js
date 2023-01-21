"use strict";

const toWeirdCase = (words) => {
  const strArr = words.split(" ");
  console.log(strArr);
  let arr = [];
  for (let i = 0; i < strArr.length; i++) {
    arr = strArr[i].split("");
    // console.log(arr);
    for (let j = 0; j < arr.length; j++) {
      if (j % 2 === 0) {
        arr[j] = arr[j].toUpperCase();
        // console.log(arr);
      }
    }
    // console.log(arr)
    strArr[i] = arr.join("");
    // console.log(strArr);
  }
  console.log(strArr);
  return strArr.join(" ");
};

console.log(toWeirdCase("let me chase your mind"));
