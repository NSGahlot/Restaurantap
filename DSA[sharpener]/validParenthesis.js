function validParentheses(s) { // children of immortal bliss
  let stack = [];

  // Traverse each charater in input string...
  for (let idx = 0; idx < s.length; idx++) {
    // If open parentheses are present, push it to stack...
    if (s[idx] == "{") {
      stack.push("}");
    } else if (s[idx] == "[") {
      stack.push("]");
    } else if (s[idx] == "(") {
      stack.push(")");
    }

    // If a close bracket is found, check that it matches the last stored open bracket
    else if (stack.pop() !== s[idx]) {
      return false;
    }
  }
  return !stack.length; //The ! operator negates an expression. That is, we can use it to return true if an array is empty.
  
};

let val = validParentheses("{[]}(){[{()}]}");
let val2 = validParentheses("({[{]})}");
let val3 = validParentheses("[(])");
console.log(val);