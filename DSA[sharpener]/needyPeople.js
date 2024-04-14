function findK(X) {
 let i = 1;
 let ppl = 0;
 while (i * i <= X) {
   X -= i * i;
   ppl++;
   i++;
 }
 return ppl;
};

let ans = findK(14);
let ans2 = findK(35);
console.log(ans2);