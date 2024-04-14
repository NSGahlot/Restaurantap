function alternatingBits(n) {
 var f = 0;
 if (n&1 === 1) f = 1;
 n >>= 1;
 while (n) {
   if (n&1 === 1) {
     if (f === 1) return false;
   } else {
     if (f === 0) return false;
   }
   f = n & 1;
   n >>= 1;
 }
 return true;
}

let ans = alternatingBits(5);
console.log(ans);

  //  let res = [];
  //  for (let j = 0; j < arr.length; j++) {
  //    let count = 0;
  //    for (let i = 0; i < 32; i++) {
  //      if ((arr[j] >> i) & (1 == 1)) {
  //        count++;
  //      }
  //    }
  //    res.push(count);
  //  }
  //  // console.log(res);

  //  for (let i = 0; i < res.length; i++) {
  //    for (let j = i + 1; j < res.length; j++) {
  //      if (res[i] > res[j]) {
  //        let temp = res[i];
  //        res[i] = res[j];
  //        res[j] = temp;
  //        let temp2 = arr[i];
  //        arr[i] = arr[j];
  //        arr[j] = temp2;
  //      }
  //      if (res[i] === res[j]) {
  //        if (arr[i] > arr[j]) {
  //          let temp3 = arr[i];
  //          arr[i] = arr[j];
  //          arr[j] = temp3;
  //        }
  //      }
  //    }
  //  }

  //  return arr;