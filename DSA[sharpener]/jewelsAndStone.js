function jewelsAndStone(){
    let map = new Map();
    let count = 0;

    for (var i = 0; i < jewels.length; i++) {
      map.set(jewels[i], i);
    }

    for (var i = 0; i < stones.length; i++) {
      if (map.has(stones[i])) {
        count++;
      }
    }

    return count;
};

// const sumSet = new Set();  // using set;
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//   sum += arr[i];
//   if (sum === 0 || sumSet.has(sum)) {
//     return true;
//   }
//   sumSet.add(sum);
// }
// return false;