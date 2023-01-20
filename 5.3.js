"use strict";

const toCamelCase = (str) => {
  let dashRemover = [];
  // console.log(dashRemover);
  let arr = [];
  if (str.includes("-")) {
    dashRemover = str.split("-");
    console.log(dashRemover);
    for (let i = 0; i < dashRemover.length; i++) {
      arr[i] = dashRemover[i].split("");
    }
  } else if (str.includes("_")) {
    dashRemover = str.split("_");
    console.log(dashRemover);
    for (let i = 0; i < dashRemover.length; i++) {
      arr[i] = dashRemover[i].split("");
    }
  }
  console.log(arr);
  if (arr[0][0] !== arr[0][0].toUpperCase()) {
    console.log("hi");
    for (let i = 1; i < arr.length; i++) {
      for (let j = 0; j < arr[i].length; j++) {
        arr[i][0] = arr[i][0].toUpperCase();
      }
      dashRemover[i] = arr[i].join("");
    }
    console.log(dashRemover);
  } else {
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr[i].length; j++) {
        arr[i][0] = arr[i][0].toUpperCase();
      }
      dashRemover[i] = arr[i].join("");
    }
    console.log(dashRemover);
  }
  return dashRemover.join("");
};

// console.log(toCamelCase("The-stealth-warrior"))
// console.log(toCamelCase("The_Stealth_Warrior"))
console.log(toCamelCase("to_be_or_not_to_be"));
console.log(toCamelCase("To_be_or_not_to_be"));
console.log(toCamelCase("to-be-or-not-to-be"));
console.log(toCamelCase("To-be-or-not-to-be"));
