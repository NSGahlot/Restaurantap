function validateStackSequences(pushed, popped) {
let stack = [];
let i=0;
for(let j=0; j<pushed.length; j++) {
    stack.push(pushed[j]);
    while(stack[stack.length - 1] === popped[i] && stack.length > 0) {
        stack.pop();
        i++;
    }
}
return stack.length === 0;
};

let ans = validateStackSequences([1, 2, 3, 4, 5], [4, 5, 3, 2, 1]);   // 4,5,3,2,1   // 4, 3, 5, 1, 2
console.log(ans);

//const countPairs = (freq) => {
//   return (freq[0] * (freq[0] - 1)) / 2 + freq[1] * freq[2];
// };

// const countTriplets = (freq) => {
//   let count = 0;
//   const combs = (n) => (n * (n - 1) * (n - 2)) / 6;
//   count +=
//   combs(freq[0]) +
//   combs(freq[1]) +
//   combs(freq[2]) +
//   freq[0] * freq[1] * freq[2];
//   return count;
// };

// const countPerfectTeams = (arr) => {
//   const freq = [0, 0, 0];
//   arr.forEach((mark) => freq[mark % 3]++);
//   return countPairs(freq) + countTriplets(freq);
// };

// const arr1 = [3, 6, 7, 2, 9];
// const arr2 = [2, 1, 3, 4];
// console.log(countPerfectTeams(arr1));