/** product: calculate the product of an array of numbers. */

function product(nums) {
  if (nums.length === 0) return 1;
  return nums[0] * product(nums.slice(1));
}

/** longest: return the length of the longest word in an array of words. */

function longest(words) {
  if (words.length === 0) return 0;

  let longestWord = words[0].length; // 2

  if (longestWord < longest(words.slice(1))) {
    longestWord = longest(words.slice(1));
  }
  return longestWord;
}

/** everyOther: return a string with every other letter. */

function everyOther(str) {
  if(str.length === 0) return "";

  return str[0] + everyOther(str.substring(2))
}

/** find: return boolean depending on if val exists in array or not. */

function find(arr, val) {
  if(arr.length === 0) return false;

  if(arr[0] === val){
    return true;
  }

  return find(arr.slice(1), val)
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str) {
  if(str.length === 0 || str.length === 1) return true;

  if(str[0] === str[str.length - 1]) {
    return isPalindrome(str.substring(1, str.length - 1))
  }

  return false;
}

/** revString: return a copy of a string, but in reverse. */

function revString(str) {
  if(str.length === 0) return "";

  return str[str.length - 1] + revString(str.substring(0, str.length - 1))
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, i=0) {
  if (i > arr.length) return -1;

  if (arr[i] === val) {
    return i;
  }
 return findIndex(arr, val, ++i);
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
  const strArr = [];
  
  function _checkForStrings(obj){
    for(let key in obj){
      if(typeof obj[key] === 'object'){
        _checkForStrings(obj[key])
      } else {
        if(typeof obj[key] === 'string'){
          strArr.push(obj[key])
        }
      }
    }
  }

  _checkForStrings(obj);

  return strArr;
}

// FURTHER STUDY

/** binarySearch: given a sorted array of numbers, and a value,
 * return true if val is in array, false if not present). */

function binarySearch(arr, val) {}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearchIndex(arr, val) {}

// you might find the above two problems easier if you change the function signature to:
//
// function binarySearch(arr, val, left = 0, right = arr.length) {
//
// }

module.exports = {
  product,
  longest,
  everyOther,
  find,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch,
  binarySearchIndex,
};
