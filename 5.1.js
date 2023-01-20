"use strict";

const stringTrimmer = (str) => {
  const strArr = str.split("");
  strArr.shift();
  strArr.pop();
  return strArr.join("");
};

console.log(stringTrimmer("appleseads"));
