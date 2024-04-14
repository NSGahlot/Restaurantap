function negativeElement(nums) {
let i = 0;
let j = nums.length-1;
while(i<j) {
  while(nums[i] >= 0 && i<j) { // this loop will check if the number is greater than 0 
    i++;
  }
  while(nums[j] < 0 && i<j) { // this loop is to check for negative elements from last
    j--;
  }
  if(i<j) { 
    let temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
    i++;
    j--;
  }
}
return nums;
}

let ansArray = negativeElement([1, -1, 3, 2, -7, -5, 11, 6]);
console.log(ansArray);