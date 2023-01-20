"use strict";

const accum = (string) => {
  string = string.toLowerCase();
  const strArr = string.split("");
  console.log(strArr);
  for (let i = 0; i < strArr.length; i++) {
    strArr[i] = strArr[i].repeat(i + 1);
  }
  console.log(strArr);

  return strArr.map((str, i) => str[i].toUpperCase() + str[i].repeat(i)).join("-");
};

console.log(accum("abcd"));
console.log(accum("RqaEzty"));
console.log(accum("cwAt"));
