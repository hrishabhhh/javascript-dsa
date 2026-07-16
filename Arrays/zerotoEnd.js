// Input:
// [0,1,0,3,12]

// Output:
// [1,3,12,0,0]

function zerotoEnd(arr) {
  let read = 0;
  let write = 0;

  while (read < arr.length) {
    if (arr[read] != 0) {
      arr[write] = arr[read];
      read++;
      write++;
    } else {
      read++;
    }
  }
  for (let i = write; i < arr.length; i++) {
    arr[i] = 0;
  }
  return arr;
}

console.log(zerotoEnd([0, 1, 0, 3, 12]));
