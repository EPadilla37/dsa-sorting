// Function to get the digit at a specified position from a number
function getDigit(num, place) {
    return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
  }
  
  // Function to return the number of digits in a given number
  function digitCount(num) {
    if (num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
  }
  
  // Function to find the number of digits in the largest number in an array
  function mostDigits(arr) {
    let maxDigits = 0;
    for (let i = 0; i < arr.length; i++) {
      maxDigits = Math.max(maxDigits, digitCount(arr[i]));
    }
    return maxDigits;
  }
  
  // Function to sort an array of numbers using the radix sort algorithm
  function radixSort(arr) {
    const maxDigitCount = mostDigits(arr);
    for (let k = 0; k < maxDigitCount; k++) {
      const digitBuckets = Array.from({ length: 10 }, () => []);
      for (let i = 0; i < arr.length; i++) {
        const digit = getDigit(arr[i], k);
        digitBuckets[digit].push(arr[i]);
      }
      arr = [].concat(...digitBuckets);
    }
    return arr;
  }
  
  module.exports = { getDigit, digitCount, mostDigits, radixSort };
  