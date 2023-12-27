let array = [2, 4, 2, 2];

// find small sub array of a fixed target

function smallSubArray(arr, target) {
  let minLength = arr.length;

  for (let start = 0; start < arr.length; start++) {
    let curSum = 0;
    for (let end = start; end < arr.length; end++) {
      curSum += arr[end];
      if (curSum >= target) {
        minLength = Math.min(minLength, end - start + 1);
        break;
      }
    }
  }
  return minLength;
}

// function smallSubArray(arr, target) {
//     let currentWindowSum = 0
//     let minWindowSize = arr.length
//     let windowStart = 0
//     for (let end = 0; end < arr.length; end++) {
//         currentWindowSum += arr[end]
//         while (currentWindowSum >= target) {
//             minWindowSize = Math.min(minWindowSize, end - windowStart + 1)
//             currentWindowSum -= arr[windowStart]
//             windowStart++
//         }
//     }
//     return minWindowSize
// }
console.log(smallSubArray(array, 8));

// find max sum of sub array with fixed length
// brute force

// function findMaxSumSubArray(arr, k) {
//     let maxSum = 0
//     for (let i = 0; i <= arr.length - k; i++) {
//         let curSum = 0
//         for (let j = i; j < i + k; j++) {
//             curSum += arr[j]

//         }
//         maxSum = Math.max(maxSum, curSum)
//     }

//     return maxSum
// }

// optimal solution

function findMaxSumSubArray(arr, k) {
  let maxSum = 0;
  let curSum = 0;
  for (let i = 0; i < arr.length; i++) {
    curSum += arr[i];
    if (i >= k) {
      curSum -= arr[i - k];
      maxSum = Math.max(curSum, maxSum);
    }
  }

  return maxSum;
}

console.log(findMaxSumSubArray(array, 3));
