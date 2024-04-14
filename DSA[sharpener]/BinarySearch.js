function binarySearch(nums, target) {
let n = nums.length;
let low = 0;
let high = n-1;
while(low <= high) {
    let mid = Math.floor((low + high) / 2);
    if(nums[mid] === target) return mid;
    if(target > nums[mid]) {
        low = mid + 1;
    }
    else{
        high = mid - 1;
    }
}
return -1;
};

let ans = binarySearch([-1, 0, 3, 5, 9, 12], 9);
let ans2 = binarySearch([-1, 0, 3, 5, 9, 12], -1);
let ans3 = binarySearch([-1, 0, 3, 5, 9, 12], 2);
console.log(ans3);