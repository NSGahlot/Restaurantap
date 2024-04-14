function twoSum(nums, target){
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const comp = target - nums[i];
    if (map.has(comp)) {
      return [map.get(comp), i];
    }
    map.set(nums[i], i);
  }
  
};

let res = twoSum([2,7,11,15], 9);
let res1 = twoSum([3,2,4], 6);
let res2 = twoSum([3,3], 6)
console.log(res1);