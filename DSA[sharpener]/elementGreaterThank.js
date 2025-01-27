function findElement(arr, target) {
  let low = 0;
  let high = arr.length - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (arr[mid] <= target) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  if (low < arr.length) {
    return arr.slice(low);
  } else {
    return [];
  }
}

console.log(findElement([1, 2, 3, 4, 5, 6, 7], 4));
