const shortestWord = (words) => {
  const arrStr = words.split(" ");
  return Math.min(...arrStr.map((str) => str.length));
};

console.log(shortestWord("the early bird gets the worm"));
