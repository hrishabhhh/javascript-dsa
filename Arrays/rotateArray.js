function rotateArray(arr) {
  let len = arr.length;
  let temp = arr[0];
  if (len < 0) return [];

  if (len <= 1) return arr;

  for (let i = 0; i <= len - 1; i++) {
    arr[i] = arr[i + 1];
  }
  arr[len - 1] = temp;
  return arr;
}

console.log(rotateArray([1, 2, 3, 4, 5]));
console.log(rotateArray([10]));
console.log(rotateArray([1, 2]));
console.log(rotateArray([]));
