// Eg: [4,1,2,1,2]
// Output: 4

function singleNumber(arr) {
  let res = 0;

  for (let i = 0; i <= arr.length; i++) {
    res = res ^ arr[i];
  }
  return res;
}

console.log(singleNumber([2, 2, 1])); // 1
console.log(singleNumber([4, 1, 2, 1, 2])); // 4
console.log(singleNumber([7, 3, 5, 3, 7])); // 5
