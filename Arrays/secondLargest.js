function secondLargest(arr) {
  let largest = arr[0];
  let secondLar = -Infinity;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
      secondLar = largest;
      largest = arr[i];
    } else if (arr[i] > secondLar && arr[i] != largest) {
      secondLar = arr[i];
    }
  }
  if (secondLar == -Infinity) {
    return null;
  }
  return secondLar;
}

// [3, 7, 2, 9, 5]
console.log(secondLargest([3, 7, 2, 9, 5])); // 7
console.log(secondLargest([3, 5, 4])); // 4
console.log(secondLargest([10, 10, 5])); // 5
console.log(secondLargest([5, 5, 5])); // null
console.log(secondLargest([-1, -2, -3])); // -2
