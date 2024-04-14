function missingElements(arr) {
 const result = [];
 for (let i = 0; i < arr.length; i++) {
   const num = Math.abs(arr[i]);
   if (arr[num - 1] > 0) {
     arr[num - 1] = -arr[num - 1];
   }
 }
 for (let i = 0; i < arr.length; i++) {
   if (arr[i] > 0) {
     result.push(i + 1);
   }
 }
 return result;
};

let ans = missingElements([4, 3, 2, 7, 8, 2, 3, 1]);
console.log(ans);
