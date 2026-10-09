// we have to find the longest subarray

function longestSubarray(arr, target) {
  let answer = 0;

  for (let i = 0; i < arr.length; i++) {
    let sum = 0;

    for (let j = i; j < arr.length; j++) {
      sum += arr[j];
      if (sum == target) {
        answer = Math.max(answer, j - i + 1);
      }
    }
  }
  return answer;
}

//Sliding window approach
function longestSubarraySlidingWindow(arr, target) {
  let sum = 0;
  let left = 0;
  let right = 0;
  let maxLength = 0;

  for (right = 0; right < arr.length; right++) {
    sum += arr[right];
    while (sum > target && left <= right) {
      sum -= arr[left];
      left++;
    }
    if (sum === target) {
      maxLength = Math.max(maxLength, right - left + 1);
    }
  }
  return maxLength;
}
console.log(longestSubarraySlidingWindow([1, 2, 1, 1, 1, 3, 2], 5));
// 4

console.log(longestSubarraySlidingWindow([2, 1, 1, 1, 2], 3));
// 3

console.log(longestSubarraySlidingWindow([1, 2, 3], 7));
// 0
