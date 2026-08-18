// Eg: [1,0,1,1,0,1]
// output: 2

function maxConsecutiveOnes(arr) {
  let curr = 0;
  let max = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 1) {
      if (curr == max) {
        curr++;
        max++;
      }
      if (curr < max) curr++;
    } else curr = 0;
  }
  return max;
}

console.log(maxConsecutiveOnes([1, 1, 0, 1, 1, 1])); // 3
console.log(maxConsecutiveOnes([1, 0, 1, 1, 0, 1])); // 2
console.log(maxConsecutiveOnes([0, 0, 0])); // 0
console.log(maxConsecutiveOnes([1, 1, 1, 1])); // 4

// Optimized:

function maxCon(arr) {
  let curr = 0;
  let max = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 1) {
      curr++;
      if (curr > max) max = curr;
    } else curr = 0;
  }
  return max;
}
console.log("Optimized Approach-----");
console.log(maxCon([1, 1, 0, 1, 1, 1])); // 3
console.log(maxCon([1, 0, 1, 1, 0, 1])); // 2
console.log(maxCon([0, 0, 0])); // 0
console.log(maxCon([1, 1, 1, 1])); // 4
