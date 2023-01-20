"use strict";

const isIsogram = (str) => new Set(str.toUpperCase()).size === str.length;

console.log(isIsogram("Dermatoglyphics"));
