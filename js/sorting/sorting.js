// ---------------bubble sort -------------------

function sort(arr){
let temp
    for(let i = 0; i< arr.length - 1 ; i++){
        for(let j = i + 1 ; j<arr.length - i ; j++){
            if(arr[i] > arr[j]){
                temp = arr[i]
                arr[i] = arr[j]
                arr[j] = temp
            }
        }
    }
    return arr
}
let func = sort([2,1,5,0,6])
console.log(func);


// ---------------quick sort ----------------
// Quicksort is a widely used sorting algorithm that follows the divide-and-conquer approach. It works by selecting a pivot element from the array and partitioning the other elements into two sub-arrays based on whether they are less than or greater than the pivot. The process is then repeated recursively for the sub-arrays until the entire array is sorted.

function quicksort(arr, left = 0, right = arr.length - 1) {
    if (left < right) {
      const pivotIndex = partition(arr, left, right);
      quicksort(arr, left, pivotIndex - 1);
      quicksort(arr, pivotIndex + 1, right);
    }
    return arr;
  }
  
  function partition(arr, left, right) {
    const pivotValue = arr[right];
    let pivotIndex = left;
    
    for (let i = left; i < right; i++) {
      if (arr[i] < pivotValue) {
        swap(arr, i, pivotIndex);
        pivotIndex++;
      }
    }
    
    swap(arr, pivotIndex, right);
    return pivotIndex;
  }
  
  function swap(arr, i, j) {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
  
//   // Example usage:
  const unsortedArray = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
  const sortedArray = quicksort(unsortedArray);
  console.log(sortedArray); // Output: [1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9]
  

// -------------------insertion sort ----------------------
// Insertion Sort works by dividing the array into a sorted and an unsorted region.
//  It iterates through the unsorted region, comparing each element to the elements in the sorted region and inserting it into the correct position.

function insertion(arr){
for(let i = 1; i< arr.length  ; i++){
   let key = arr[i ]
    let j = i - 1

    while(j >= 0 && arr[j] > key){
        arr[j + 1] = arr[j]
        j--
    }
    arr[j + 1] = key
}
return arr
}
let func2 = insertion([2, 5, 4, 8, 3, 0])
console.log(func2)


// ------------------------selection sort----------------------

function selection(arr){
for(let i = 0; i< arr.length - 1; i++){
    let minInd = i 
    for(let j = i + 1; j< arr.length ; j++){
        if(arr[j] < arr[minInd]){
            minInd = j
        }
    }
        const temp = arr[i]
        arr[i] = arr[minInd] 
        arr[minInd] = temp
}
return arr
}
let func3 = selection([3,4,2,7,9,5])
console.log(func3)