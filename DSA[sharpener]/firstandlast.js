let nums = [5, 7, 7, 8, 8, 10]; let target = 8;
//  let first = -1;
//  let last = -1;
//  for (let i = 0; i < nums.length; i++) {
//    if (nums[i] === target) {
//      if (first === -1) {
//        first = i;
//      }
//      last = i;
//    }
//  }
// console.log(first, last);
function firstOccurence(nums, target) {
  let n = nums.length;
  let low = 0;
  let high = n - 1;
  let first = -1;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (nums[mid] === target) {
      first = mid;
      high = mid - 1;
    } else if (nums[mid] < target) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return first;
}

function lastOccurence(nums, target) {
  let n = nums.length;
  let low = 0;
  let high = n - 1;
  let last = -1;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (nums[mid] === target) {
      last = mid;
      low = mid + 1;
    } else if (nums[mid] < target) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return last;
}
var element_search = function (nums, target) {
  let first = firstOccurence(nums, target);
  if (first === -1) return [-1, -1];
  let last = lastOccurence(nums, target);
  if (last === -1) return [-1, -1];
  return [first, last];
};