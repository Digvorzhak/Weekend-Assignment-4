"use strict";

const organizeString = (str1, str2) => {
  const arr1 = str1.split("");
  const arr2 = str2.split("");
  const mergedArr = [...arr1, ...arr2];
  const uniqueString = [...new Set(mergedArr.sort())];
  console.log(uniqueString);
};

console.log(organizeString("xyaabbbccccdefww", "xxxxyyyyabklmoqp"));
