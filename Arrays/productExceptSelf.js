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

function productArrayOptimized(arr) {
  let result = new Array(arr.length);
  let prefix = 1;

  for (let i = 0; i < arr.length; i++) {
    result[i] = prefix;
    prefix *= arr[i];
  }

  let suffix = 1;
  for (let j = arr.length - 1; j >= 0; j--) {
    result[j] *= suffix;
    suffix *= arr[j];
  }

  return result;
}

console.log("Optimized: ", productArrayOptimized([2, 3, 4, 5]));
