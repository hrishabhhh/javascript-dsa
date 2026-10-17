// Remove duplicates from sorted arrays
// Input:  nums = [1, 1, 2, 2, 3]
// Output: k = 3
// First k positions must become:
// [1, 2, 3, ...]
// Values after those positions don’t matter.

function removeDuplicates(nums) {
  const length = nums.length;
  if (length == 0) return 0;

  let write = 1;

  for (let read = 1; read < length; read++) {
    if (nums[read] !== nums[write - 1]) {
      nums[write] = nums[read];
      write++;
    }
  }
  return write;
}

const nums = [1, 1, 2, 2, 3];
const k = removeDuplicates(nums);

console.log(k); // 3
console.log(nums.slice(0, k)); // [1, 2, 3]
