function farthest_min(a, n) {
  // To store minimum element
  // in the range i to n

  for (let i = 0; i < n; i++) {
    // keeping the idx = -1 from beginning
    let idx = -1;

    for (let j = n - 1; j > i; j--) {
      // if found any element smaller
      if (a[i] > a[j]) {
        // update that index and break
        idx = j;
        break;
      }
    }

    console.log(idx + " ");
  }
}

let a = [3, 1, 5, 2, 4];
let n = a.length;

farthest_min(a, n);

  // int arr[]={6,3,1,8,2,9,7};
  //   for(int i=0;i<arr.length;i++){
  //       int min=-1;
  //       for(int j=i+1;j<arr.length;j++){
  //           if(arr[j]<arr[i]){
  //               min=arr[j];
  //           }
  //       }
  //       arr[i]=min;
  //   }
