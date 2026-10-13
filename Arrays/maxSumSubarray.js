function maxSumSubarray(arr, k) {
  let currentSum = 0;

  for (let i = 0; i < k; i++) {
    currentSum += arr[i];
  }

  let maxSum = currentSum;
  let left = 0;

  for (let right = k; right < arr.length; right++) {
    currentSum += arr[right] - arr[left];
    maxSum = Math.max(maxSum, currentSum);
    left++;
  }
  return maxSum;
}

console.log(maxSumSubarray([1, 2, 3, 4, 5], 2)); // 9
console.log(maxSumSubarray([5, 3, 2, 4, 6, 3, 2, 4, 6, 8, 9, 6], 5));
