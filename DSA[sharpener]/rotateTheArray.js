let nums = [1, 2, 3, 4, 5, 6, 7];
let k = 3;
const n = nums.length;
k = k % n;
const rotatedArray = new Array(n);
for (let i = 0; i < n; i++) {
  const newPosition = (i + k) % n;
  rotatedArray[newPosition] = nums[i];
}
console.log(rotatedArray);
