// We have to check weather an array contains any duplicate

// arr=[1,2,3,4] return false;
// arr=[1,2,3,1] return true;

function containsDuplicate(arr) {
  let seen = new Set();

  for (let i = 0; i < arr.length; i++) {
    if (seen.has(arr[i])) {
      return true;
    } else {
      seen.add(arr[i]);
    }
  }
  return false;
}

console.log(containsDuplicate([1, 2, 3, 4])); // false
console.log(containsDuplicate([1, 2, 3, 1])); // true
