// Input:
// [1,2,3]

// Output:
// 3

function duplicate(arr) {
  let unique = 1;

  let read = 1;
  let write = 1;

  while (read < arr.length) {
    if (arr[read] !== arr[write - 1]) {
      console.log(arr);
      arr[write] = arr[read];
      console.log(arr);
      read++;
      write++;
      unique++;
    } else {
      read++;
    }
  }
  return unique;
}

console.log(duplicate([1, 2, 3, 4, 4]));
// [1,1,2,2,3,4,4]
