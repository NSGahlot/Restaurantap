function validateStackSequence(pushed, popped) {
let stack = [];
let i=0;
for(let j=0; j<pushed.length; j++) {
    stack.push(pushed[j]);
    while(stack[stack.length-1] === popped[i] && stack.length > 0) {
        stack.pop();
        i++;
    }
}
return stack.length === 0;
};

console.log(validateStackSequence([1, 2, 3, 4, 5], [4, 5, 3, 2, 1]));