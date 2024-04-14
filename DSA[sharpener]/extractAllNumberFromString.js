function extractNumbers(s) {
let res = [];
let str = "";
for(let i=0; i<s.length; i++) {
    if (s[i] >= "0" && s[i] <= "9") {
      str += s[i];
    }
    // agar last main koi character nhi hai to else if main nhi jayega aur string khali nhi hoga aur 
    //apna no. usme fass jayega isse bachne ke liye aur 1 if condition last main likh denge.
    else if (str !== "") {
      res.push(str);
      str = "";
    }
}
  if(str !== "") {
   res.push(str);
}
return res;
}

let ans1 = extractNumbers("abc334v44d64");
console.log(ans1);