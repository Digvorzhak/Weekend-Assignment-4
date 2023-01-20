"use strict";
const dupCount = (string) => {
  const lettersHive = {};
  const str = string.toLowerCase();
  let counter = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] !== " ") lettersHive[str[i]] = 0;
  }
  for (let i = 0; i < str.length; i++) {
    if (str[i] in lettersHive) lettersHive[str[i]]++;
  }
  for (const key in lettersHive) {
    if (lettersHive[key] > 1) {
      counter++;
    }
  }
  console.log(lettersHive);
  return counter;
};

console.log(dupCount("aaaa"));
console.log(dupCount("aA11bnb"));
console.log(dupCount("abcde"));
console.log(dupCount("aababcde"));
console.log(dupCount("Indivisibilities"));
console.log(dupCount("ABBA"));
console.log(dupCount("Office Air"));
