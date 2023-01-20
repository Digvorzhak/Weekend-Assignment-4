"use strict";

const longestWord = (str) => {
  const arrStr = str.split(" ");
  let longWordStore = [];
  let resultArr = [];
  let maxLength = 1;
  let counter = 0;
  for (let i = 0; i < arrStr.length; i++) {
    longWordStore[i] = arrStr[i].length;
  }

  maxLength = Math.max(...longWordStore);
  console.log(maxLength);
  console.log(longWordStore);
  for (let i = 0; i < arrStr.length; i++) {
    if (arrStr[i].length === maxLength) {
      resultArr[counter] = arrStr[i];
      counter++;
    }
  }
  return resultArr.join(" ");
};

console.log(longestWord("the sun machine is falling down"));
