function decodeString(s) {
let stack = [];
let currStr = "";
let currNum = 0;
for(let i=0; i<s.length; i++) {
    if(s[i] === "[") {
        stack.push(currStr);
        stack.push(currNum);
        currStr = "";
        currNum = 0;
    }
      else if (s[i] === ']') {
            let prevNum = stack.pop();
            let prevStr = stack.pop();
            currStr = prevStr + currStr.repeat(prevNum); 
            // string.repeat(count) and count will always be positive
        } 
        else if (s[i] >= '0' && s[i] <= '9') {
          currNum = currNum * 10 + Number(s[i]);
          // * 10 ? b/c agar double digit hua to hume double digit
          // karna padega aur 10 se multiply karne se ho jayega
        } 
        else {
            currStr += s[i];
        }
    }
    return currStr;
};
console.log(decodeString("3[a]2[bc]"));
// t.c O(n) and s.c O(n)