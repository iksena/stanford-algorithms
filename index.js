const fs = require('fs');
const path = require('path');
const { mergeSort } = require('./inversions');

const file = fs.readFileSync(path.join(__dirname, 'input.txt'), 'utf-8');
const input = file.split(/\r?\n/).map((number) => Number(number));

const [sortedArray, inversions] = mergeSort(input);

console.log('Inversions: ', inversions);

console.log('Sample check', sortedArray[99999]);
console.log('Max number', Math.max(...input));
