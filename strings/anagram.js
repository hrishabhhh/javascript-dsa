function isAnagram(str1, str2) {
  if (str1.length !== str2.length) return false;

  let chars = str2.split("");

  for (let i = 0; i < str1.length; i++) {
    let found = false;

    for (let j = 0; j < chars.length; j++) {
      if (str1[i] === chars[j]) {
        chars.splice(j, 1);
        found = true;
        break;
      }
    }
    if (!found) return false;
  }
  return true;
}

console.log(isAnagram("listen", "silent"));
console.log(isAnagram("hello", "world"));
