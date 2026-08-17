function missingNumber(arr) {
  let Actual = 0;
  for (let i = 0; i < arr.length; i++) {
    Actual += arr[i];
  }
  let n = arr.length;
  let Expected = (n * (n + 1)) / 2;
  return Expected - Actual;
}

console.log(missingNumber([3, 0, 1])); // 2
console.log(missingNumber([0, 1])); // 2
console.log(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1])); // 8
