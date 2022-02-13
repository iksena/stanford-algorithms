const { merge } = require('./inversions');

console.log(merge([1,4,5,9,11,12,20,23,25,26], [2,3,6,7,8,10,13,21,22,24]))
console.log(merge([1,3,4], [2]))