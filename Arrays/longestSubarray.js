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

console.log(longestSubarray([1, 2, 1, 1, 1, 3, 2], 5));
// 4

console.log(longestSubarray([2, 1, 1, 1, 2], 3));
// 3

console.log(longestSubarray([1, 2, 3], 7));
// 0
