const tribonachi = (signature, n) => {
  let arr = [...signature];
  for (let i = 3; i < n; i++) {
    arr[i] = arr[i - 1] + arr[i - 2] + arr[i - 3];
  }
  console.log(arr);
  return arr;
};

console.log(tribonachi([0, 1, 1], 17));
