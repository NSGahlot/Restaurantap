function searchInRotatedArray(nums, target){
let n = nums.length;
let low = 0;
let high = n-1;
while(low <= high){
    let mid = Math.floor((low + high) / 2);
    if(nums[mid] === target) return mid;

    // left sorted
    if(nums[low] <= nums[mid]) {
      if(nums[low] <= target && target <= nums[mid]) {
        high = mid - 1;
      }
      else{
        low = mid + 1
      }
    } 
// right sorted
else{
    if(nums[mid] <= target && target <= nums[high]){
        low = mid + 1;
    }
    else{
        high = mid - 1;
    }
}
};
}

let res1 = searchInRotatedArray([4, 5, 6, 7, 0, 1, 2], 0);
let res2 = searchInRotatedArray([4, 5, 6, 7, 0, 1, 2], 2);
console.log(res2);
// console.log(res2);
