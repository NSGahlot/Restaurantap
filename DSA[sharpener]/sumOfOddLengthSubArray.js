function sumOddLengthSubarrays(arr){
let sum = 0;
for (let i = 0; i < arr.length; i++) {
  for (let j = i; j < arr.length; j += 2) {
    for (let k = i; k <= j; k++) {
      sum += arr[k];
    }
  }
}
return sum;
}

let ans = sumOddLengthSubarrays([1, 4, 2, 5, 3]);
let ans2 = sumOddLengthSubarrays([10, 11, 12]);
console.log(ans2);