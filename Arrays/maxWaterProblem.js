function maxArea(arr) {
  let left = 0;
  let right = arr.length - 1;
  let maxWater = 0;

  while (left < right) {
    let width = right - left;
    let currentHeigth = Math.min(arr[left], arr[right]);

    let currentWater = width * currentHeigth;

    maxWater = Math.max(maxWater, currentWater);

    if (arr[left] < arr[right]) {
      left++;
    } else {
      right--;
    }
  }
  return maxWater;
}

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
