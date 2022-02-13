const { merge, mergeSort } = require('./inversions');

console.log(merge([1, 4, 5, 9, 11, 12, 20, 23, 25, 26], [2, 3, 6, 7, 8, 10, 13, 21, 22, 24]));
console.log(mergeSort([26, 25, 24, 23, 22, 21, 20, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]));
console.log(mergeSort([6, 5, 4, 3, 2, 1]));
