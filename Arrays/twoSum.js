// arr = [2,7,11,15]
// target = 9;
// arr[0] + arr[1] = 2 + 7 = 9;
// we have to find the index of the two numbers that add up to the target value.
// we will to target - current

function twoSum(arr, target) {
  let map = new Map();
  for (let i = 0; i < arr.length; i++) {
    let complement = target - arr[i];
    if (map.has(complement)) {
      return [map.get(complement), i];
    }
    map.set(arr[i], i);
  }
}
console.log(twoSum([2, 7, 11, 15], 9));
// [0, 1]

console.log(twoSum([3, 2, 4], 6));
// [1, 2]
