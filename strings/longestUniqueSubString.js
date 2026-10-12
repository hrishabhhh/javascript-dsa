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

// sliding window approach

function longestUniqueSubStringOptimized(str) {
  const seen = new Set();
  let left = 0;
  let maxLength = 0;

  for (let right = 0; right < str.length; right++) {
    while (seen.has(str[right])) {
      seen.delete(str[left]);
      left++;
    }
    seen.add(str[right]);
    maxLength = Math.max(maxLength, right - left + 1);
  }
  return maxLength;
}

console.log(longestUniqueSubStringOptimized("abcabcbb")); // 3
console.log(longestUniqueSubStringOptimized("bbbbb")); // 1
console.log(longestUniqueSubStringOptimized("pwwkew")); // 3
console.log(longestUniqueSubStringOptimized("")); // 0
