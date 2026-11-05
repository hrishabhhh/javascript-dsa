function dailyTemp(arr) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    let count = 0;
    let found = false;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] > arr[i]) {
        count = j - i;
        found = true;
        result.push(count);
        break;
      }
    }
    if (!found) {
      result.push(0);
    }
  }
  return result;
}
console.log("Brute Force: ", dailyTemp([73, 75, 71, 72, 76]));

function dailyTemperatureOptimized(arr) {
  let result = new Array(arr.length).fill(0);
  let stack = [];
  for (let i = 0; i < arr.length; i++) {
    while (stack.length > 0 && arr[i] > arr[stack[stack.length - 1]]) {
      let index = stack.pop();
      result[index] = i - index;
    }
    stack.push(i);
  }
  return result;
}
console.log("Optimized: ", dailyTemperatureOptimized([73, 75, 71, 72, 76]));
