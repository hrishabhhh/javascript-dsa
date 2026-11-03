// arr = [1, 3, 5, 7, 9, 11];
// target = 7;

// Output: 3

function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
}

console.log(linearSearch([1, 3, 5, 7, 9, 11], 7));

function binarySearch(arr, target, left = 0, right = arr.length - 1) {
  if (left > right) return -1;
  let mid = Math.floor((left + right) / 2);

  if (arr[mid] === target) return mid;
  if (arr[mid] < target) return binarySearch(arr, target, mid + 1, right);
  return binarySearch(arr, target, left, mid - 1);
}

console.log("Recursive approach: ", binarySearch([1, 3, 5, 7, 9, 11], 7));
