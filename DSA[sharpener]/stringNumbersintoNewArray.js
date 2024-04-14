let s = "abc334v44";
let str = "";
let arr = [];
for (let i = 0; i < s.length; i++) {
  if (s[i] >= "0" && s[i] <= "9") {
    str += s[i];
  } else if (str !== "") {
    arr.push(str);
    str = "";
  }
}

if (str !== "") {
  arr.push(str);
}
console.log(arr);
