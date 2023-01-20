"use strict";

const nbYear = (pop, percent, aug, finalPop) => {
  let years = 0;
  while (pop < finalPop) {
    pop = pop + pop * (percent / 100) + aug;
    years++;
  }
  return years;
};

// console.log(nbYear(1500, 5, 100, 5000))
// console.log(nbYear(1500000, 2.5,  10000, 2000000))
// console.log(nbYear(1000, 2,  50, 1200))
