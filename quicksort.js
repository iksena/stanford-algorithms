const { sortBy, isEqual } = require('lodash');
const { readInput } = require('.');

const partition = (array, l, r) => {
  const pivot = array[l];
  let i = l + 1;
  for (let j = l + 1; j <= r; j++) {
    if (array[j] < pivot) {
      [array[i], array[j]] = [array[j], array[i]];
      i++;
    }
  }
  [array[l], array[i - 1]] = [array[i - 1], array[l]];

  return i - 1;
};

const choosePivotMedian = (array, l, r) => {
  const m = Math.floor((r - l) / 2);
  if ((array[l] <= array[m] && array[m] <= array[r])
    || (array[r] <= array[m] && array[m] <= array[l])) return array[m];
  if ((array[l] <= array[r] && array[r] <= array[m])
    || (array[m] <= array[r] && array[r] <= array[l])) return array[r];
  if ((array[m] <= array[l] && array[l] <= array[r])
    || (array[r] <= array[l] && array[l] <= array[m])) return array[l];
  return array[m];
};

/**
 * QuickSort algorithm and counting comparisons
 *
 * @param {array<number>} array - mutable input array of numbers
 * @param {number} l - first index
 * @param {number} r - last index
 * @param {number} pivotOption - pivot option {0: first index, 1: last index, 2: median of three}
 * @param {number} comparisons - initial comparisons count
 *
 * @returns total comparisons
 */
const quickSort = (array, l, r, pivotOption = 0, comparisons = 0) => {
  if (l >= r) {
    return comparisons;
  }
  const pivotOptions = [l, r, choosePivotMedian(array, l, r)];
  const pivot = pivotOptions[pivotOption];
  ([array[pivot], array[l]] = [array[l], array[pivot]]);
  const j = partition(array, l, r);
  const comparisonLeft = quickSort(array, l, j - 1, pivotOption, comparisons);
  const comparisonRight = quickSort(array, j + 1, r, pivotOption, comparisons);

  return comparisons + comparisonLeft + comparisonRight + r - l;
};

module.exports = { partition, choosePivotMedian, quickSort };

const input = readInput('quicksort-input.txt');
const array = input.slice();

const result = quickSort(array, 0, array.length - 1, 2);
const resultNative = sortBy(input);

console.log('sorted correctly =', array, isEqual(array, resultNative));
console.log('comparisons =', result);
