"use strict";

const maskify = (str) => "#".repeat(str.length - 4) + str.slice(-4);

console.log(maskify("868623153456453"));
