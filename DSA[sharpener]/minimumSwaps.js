function minimumSwaps(arr) { // [2, 8, 5, 4]
  const n = arr.length;
  //The slice() method of Array instances returns a shallow copy of a portion of an array into a new array object
  const sortedArr = arr.slice().sort((a, b) => a - b); // [2, 4, 5, 8]
  const indexMap = {};
  for (let i = 0; i < n; i++) {
    indexMap[arr[i]] = i;
    //   { '2': 0, '4': 3, '5': 2, '8': 1 }
  }
  let swaps = 0;
  for (let i = 0; i < n; i++) {
    if (arr[i] !== sortedArr[i]) {
      swaps++;
      const sortArr = indexMap[sortedArr[i]];
      console.log(sortArr);

      //Swap elements in the num array
      [arr[i], arr[sortArr]] = [arr[sortArr], arr[i]];

      // Update the indexMap
      indexMap[arr[i]] = i; // { '2': 0, '4': 1, '5': 2, '8': 1 }
      indexMap[arr[sortArr]] = sortArr; // { '2': 0, '4': 1, '5': 2, '8': 3 }
    }
  }
  return swaps;
};

var ans = minimumSwaps([2,8,5,4]);
// console.log(ans); // use selection sort