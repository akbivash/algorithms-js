// valid bracket

function isValidBracketString(str) {
  const stack = [];

  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    if (char === "(" || char === "[" || char === "{") {
      // Opening bracket, push to the stack
      stack.push(char);
    } else if (char === ")" || char === "]" || char === "}") {
      // Closing bracket, check if it matches the top of the stack
      if (stack.length === 0) {
        return false; // No matching opening bracket in the stack
      }

      const top = stack.pop();

      if (
        (char === ")" && top !== "(") ||
        (char === "]" && top !== "[") ||
        (char === "}" && top !== "{")
      ) {
        return false; // Mismatched brackets
      }
    }
  }

  return stack.length === 0; // All opening brackets have been closed
}

// Example usage:
console.log(isValidBracketString("()")); // true
console.log(isValidBracketString("({[]})")); // true
console.log(isValidBracketString("({[]})(")); // false
console.log(isValidBracketString("(]")); // false
