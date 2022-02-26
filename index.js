const fs = require('fs');
const path = require('path');
const { mergeSort } = require('./inversions');

/**
 * Read array of numbers from file path
 * @param {path.ParsedPath}} filename - file path
 * @returns {Array<number>} array of number
 */
const readInput = (filename) => {
  const file = fs.readFileSync(path.join(__dirname, filename), 'utf-8');
  const input = file.split(/\r?\n/).filter((line) => !!line).map((number) => Number(number));

  return input;
};

const assignment2 = () => {
  const input = readInput('input.txt');
  const [sortedArray, inversions] = mergeSort(input);

  console.log('Inversions: ', inversions);
  console.log('Sample check', sortedArray[99999]);
  console.log('Max number', Math.max(...input));
};

module.exports = { readInput };
