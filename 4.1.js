const tribonachi = (signature, n) => {
  let arr = [...signature];
  for (let i = 2; i < n; i++) {
    arr[i] = arr[i - 1] + arr[i - 2];
  }
  console.log(arr);
  return arr[n - 1];
};

console.log(tribonachi([0, 1], 19));
