function maximumInAnArray(arr, target) {
   let max = -Infinity;
   for(let i=0; i<arr.length; i++) {
    if(arr[i] > max) {
     max = arr[i];
    }
   }
   return max;
}

let ans = maximumInAnArray([5,4,7,2,6],7)
console.log(ans);