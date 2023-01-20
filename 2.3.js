"use strict";

const findNextSquare = (square) => {
  let perfectSquare = square + 1;
  if (!Number.isInteger(Math.sqrt(square))) {
    return -1;
  }
  while (!Number.isInteger(Math.sqrt(perfectSquare))) {
    perfectSquare++;
  }
  return perfectSquare;
};

// console.log(findNextSquare(169));
