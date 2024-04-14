function nextGreaterElement(nums) {
let stack = [];
let result = [];
let n = nums.length
for(let i=(2 *(n-1)); i>= 0; i--) {
    while(stack.length > 0 && stack[stack.length - 1] <= nums[i % n]) {
        stack.pop();
    }

    if(i < n) {
        if(stack.length === 0) {
            result[i] = -1;
        }
        else {
            result[i] = stack[stack.length - 1]
        }
    }
    stack.push(nums[i % n]);
}
return result;
};

console.log(nextGreaterElement([1, 2, 1]));