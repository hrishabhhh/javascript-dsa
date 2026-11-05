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
console.log(dailyTemp([73, 75, 71, 72, 76]));
