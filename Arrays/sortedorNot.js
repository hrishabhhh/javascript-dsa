// [1, 2, 10, 4, 5]

function sortedorNot(arr) {
  let len = arr.length - 1;

  for (let i = 0; i < len; i++) {
    if (arr[i] > arr[i + 1]) {
      return false;
    }
  }
  return true;
}

console.log(sortedorNot([1, 2, 3, 4, 5]));
console.log(sortedorNot([1, 2, 10, 4, 5]));
