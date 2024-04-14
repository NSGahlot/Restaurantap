function characters(s) {
 let i = 0;
 let j = s.length - 1;
 let count = 0;
 while (i < j) {
   if (s[i] !== s[j]) {
     count++;
     j--;
   } 
     else {
     i++;
     j--;
   }
 }
 return count;
}

let ans = characters("abcd");
let ans2 = characters("abcda");
console.log(ans2);