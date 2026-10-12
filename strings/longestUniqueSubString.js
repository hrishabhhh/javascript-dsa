// we have to find the longest unique substring from the given string.

function longestUniqueSubString(str) {
  const chars = str.split("");
  let maxLength = 0;
  for (let i = 0; i < chars.length; i++) {
    let seen = [];
    for (let j = i; j < chars.length; j++) {
      if (seen.includes(chars[j])) {
        break;
      } else {
        seen.push(chars[j]);
        maxLength = Math.max(maxLength, seen.length);
      }
    }
  }
  return maxLength;
}
console.log(longestUniqueSubString("hello")); // 3
console.log(longestUniqueSubString("parmateama")); // 3
