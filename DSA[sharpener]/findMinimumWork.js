// function findMinimumWork(N, Arr) {
// let work = 0;
// let extraPens = 0;

// for(let i=0; i<N; i++) {
//     extraPens += Arr[i];

//     if(extraPens < 0) {
//         work += -extraPens;
//         extraPens = 0;
//     }
// }

// return work;
// };

// const N1 = 5;
// const Arr1 = findMinimumWork([5, -4, 1, -3, 1]);
// console.log(findMinimumWork(N1, Arr1));
// // console.log(Arr1); // wrong ans

// // const Arr2 = findMinimumWork(6,[-1000, -1000, -1000, 1000, 1000, 1000]);
// // console.log(Arr2); // Wrong ans

function findMinimumWork(N, Arr) {
  let work = 0;
  let extraPens = 0;

  for (let i = 0; i < N; i++) {
    extraPens += Arr[i];

    if (extraPens < 0) {
      work += -extraPens;
      extraPens = 0;
    }
  }

  return work;
}

const N1 = 5;
const Arr1 = [5, -4, 1, -3, 1];
console.log(findMinimumWork(N1, Arr1)); // Output: 9

// const N2 = 6;
// const Arr2 = [-1000, -1000, -1000, 1000, 1000, 1000];
// console.log(findMinimumWork(N2, Arr2)); // Output: 9000
