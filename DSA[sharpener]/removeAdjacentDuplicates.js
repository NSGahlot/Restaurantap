function removeAdjacentDuplicates(s) {
let stack = [];
stack.push(s[0]);
// console.log(stack);
for(let i=1; i<s.length; i++) {
    if(stack[stack.length - 1] === s[i]) {
        stack.pop();
    }
    else {
        stack.push(s[i]);
    }
}
return stack.join("");
};

let ans = removeAdjacentDuplicates("abbaca");
console.log(ans);

// join()
//join(separator)
//A string to separate each pair of adjacent elements of the array. If omitted, the array elements are separated with a comma (",").