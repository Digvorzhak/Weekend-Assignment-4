"use strict";

const abbreviate = (fullName) => `${fullName[0]}.${fullName[fullName.indexOf(" ") + 1]}`;

console.log(abbreviate("Huang Lee"));
