// ------------------------string reverse---------------

function reverse(str) {
  if (str === "") return "";
  return str[str.length - 1] + reverse(str.slice(0, -1));
}
let func = reverse("hello");
console.log(func);

//------------------------------palindrome------------------

function palindrome(str) {
  str = str.replace(/\s/g, "").toLowerCase();
  if (str.length === 0 || str.length === 1) return true;
  if (str.charAt(0) === str[str.length - 1]) {
    return palindrome(str.slice(1, str.length - 1));
  } else {
    return false;
  }
}
console.log(palindrome("hello"));
console.log(palindrome("a madama"));

//decimal to binary

function decimalToBinary(num, result) {
  if (num === 0) return result;
  result = (num % 2) + result;
  return decimalToBinary(parseInt(num / 2), result);
}
let func2 = decimalToBinary(233, "");
console.log(func2);

//-----------------------sum of natural num--------------------
function sum(len) {
  let i = 0;
  if (len === 1) return 1;

  if (i <= len) {
    return len + sum(len - 1);
  } else {
    return 0;
  }
}
let func3 = sum(6);
console.log(func3);

//-------------binary search ----------------
function binary(arr, num, low, high) {

    if (low > high) return -1;
    let mid = Math.floor((high + low) / 2);
    if (arr[mid] === num) {
        return mid;
    }
    if (arr[mid] > num) {
        return binary(arr, num, low, mid - 1);
    } else if (arr[mid] < num) {
        return binary(arr, num, mid + 1, high);
    }
}

let arr = [2, 5, 8, 9, 16, 35]
let target = 16
let r = binary(arr, target, 0, arr.length - 1)
console.log(r)





let sorted = binary([2, 3, 4, 9, 22], 212);
console.log(sorted); // Output: 3
