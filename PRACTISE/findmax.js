// find the maximum from array

function findMax(arr) {
  return Math.max(...arr);
}

console.log(findMax([8, 9, 2, 4, 0, 3, 6, 7]));

//---------------------------------------------

function reverseString(str) {
  let result = "";
  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i];
  }
  return result;
}

console.log(reverseString("annamalai"));

//---------------------------------------------

function againReverse(str) {
  let result = "";
  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i];
  }
  return result;
}
console.log(againReverse("samsung"));

//---------------------------------------------

function isPalindrome(str) {
  let reversed = str.split("").reverse().join("");
  return str === reversed;
}

console.log(isPalindrome("malam"));

//---------------------------------------------
