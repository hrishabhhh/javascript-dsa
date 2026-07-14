console.log(findMax([3, 7, 2, 9, 5])); // 9
console.log(findMax([-5, -2, -10, -1])); // -1
console.log(findMax([10])); // 10
console.log(findMax([1, 1, 1])); // 1
console.log(findMax([-10, 0, 5, 100, 99])); // 100

function findMax(arr) {
  let MAX = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > MAX) {
      MAX = arr[i];
    }
  }
  return MAX;
}
