// Input:
// [1,2,3,4,5]

// Output:
// [5,4,3,2,1]

function reverseArr(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;
    left++;
    right--;
  }

  return arr;
}

console.log(reverseArr([1, 2, 3, 4, 5]));
