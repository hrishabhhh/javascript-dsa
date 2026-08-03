//left rotate array by k elements

function reverseArray(arr, start, end) {
  let left = start;
  let right = end;
  while (left < right) {
    let temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;
    left++;
    right--;
  }
  return arr;
}

function leftRotatebyK(arr, k) {
  let n = arr.length;
  k = k % n;
  if (n === 0) return arr;
  reverseArray(arr, 0, k - 1);
  reverseArray(arr, k, n - 1);
  reverseArray(arr, 0, n - 1);
  return arr;
}

console.log(reverseArray([1, 2, 3, 4, 5, 6, 7], 0, 3));
console.log(leftRotatebyK([1, 2, 3, 4, 5, 6, 7], 3));
