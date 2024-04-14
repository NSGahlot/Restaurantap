function rotatedArray(arr, k){
// let arr = [1, 2, 3, 4, 5, 6, 7];
// let k = 3;
const n = arr.length;
k = k % n;
reverseArray(arr, 0, n - 1);
reverseArray(arr, 0, k - 1);
reverseArray(arr, k, n - 1);
console.log(arr);
};


function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
};

function reverseArray(arr, left, right) {
    while(left < right) {
        swap(arr, left, right);
        left++;
        right--
    }
};

rotatedArray([1, 2, 3, 4, 5, 6, 7], 3);



