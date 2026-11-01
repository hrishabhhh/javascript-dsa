function productArray(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    let product = 1;
    for (let j = 0; j < arr.length; j++) {
      if (j != i) product *= arr[j];
    }
    result.push(product);
  }
  return result;
}

console.log(productArray([1, 2, 3, 4]));
