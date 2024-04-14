function findSubarr(arr){
const sumSet = new Set();
let sum = 0;
for (let i = 0; i < arr.length; i++) {
  sum += arr[i];
  if (sum === 0 || sumSet.has(sum)) {
    return true;
  }
  sumSet.add(sum);
}
return false;
}

let twin = findSubarr([5, 4, 2, -3, 1, 6]);
let twin2 = findSubarr([5, 4, 2, 2, 1, 6]);
console.log(twin2);

 