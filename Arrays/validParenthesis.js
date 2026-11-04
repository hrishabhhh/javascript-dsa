function isValid(s) {
    let stack = [];
    const pairs = {
        ")": "(",
        "}": "{",
        "]": "[",
    };
    for (let i = 0; i < s.length; i++) {
        if (s[i] == "(" || s[i] == "{" || s[i] == "[") {
            stack.push(s[i]);
        } else {
            if (stack.length == 0) return false;
            if (stack.pop() !== pairs[s[i]]) return false;
        }
    }
    return stack.length === 0;
}

console.log(isValid("()")); // true
console.log(isValid("({[]})")); // true
console.log(isValid("([)]")); // false
console.log(isValid("((")); // false