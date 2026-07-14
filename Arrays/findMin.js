function findMin(arr) {
  let MIN = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < MIN) {
      MIN = arr[i];
    }
  }
  return MIN;
}

console.log(findMin([3, 5, 6, 7, 8]));
console.log(findMin([-5, -10, -2]));
