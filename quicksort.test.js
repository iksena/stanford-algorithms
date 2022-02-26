const { readInput } = require('.');
const { quickSort, choosePivotMedian, constants: { PIVOT } } = require('./quicksort');

const testComparisons = (testCase = '01_5') => () => {
  const input = readInput(`../stanford-algs/testCases/course1/assignment3Quicksort/input_dgrcode_${testCase}.txt`);
  const lastIndex = input.length - 1;
  const [expected1, expected2, expected3] = readInput(`../stanford-algs/testCases/course1/assignment3Quicksort/output_dgrcode_${testCase}.txt`);

  const comparison1 = quickSort([...input], 0, lastIndex, PIVOT.FIRST_INDEX, 0);
  const comparison2 = quickSort([...input], 0, lastIndex, PIVOT.LAST_INDEX, 0);
  const comparison3 = quickSort([...input], 0, lastIndex, PIVOT.MEDIAN_OF_THREE, 0);
  console.log(`Expected=${expected1},${expected2},${expected3}
  Result=${comparison1},${comparison2},${comparison3}`);

  expect(comparison1).toBe(expected1);
  expect(comparison2).toBe(expected2);
  expect(comparison3).toBe(expected3);
};

describe('QuickSort Comparisons', () => {
  it('should correctly count comparisons 01_5', testComparisons('01_5'));

  it('should correctly count comparisons 06_10', testComparisons('06_10'));

  it('should correctly count comparisons 15_20', testComparisons('15_20'));

  it('should correctly count comparisons 18_100000', testComparisons('18_100000'));
});

describe('Median of three', () => {
  it('should return correct median=10', () => {
    const input = [2, 20, 1, 15, 3, 11, 13, 6, 16, 10, 19, 5, 4, 9, 8, 14, 18, 17, 7, 12];

    const median = choosePivotMedian(input, 0, input.length - 1);

    expect(median).toBe(10);
  });

  it('should return correct median=7', () => {
    const input = [7, 1, 3, 6, 2, 5, 4, 9, 8];

    const median = choosePivotMedian(input, 0, input.length - 1);

    expect(median).toBe(7);
  });

  it('should return correct median=6', () => {
    const input = [6, 5];

    const median = choosePivotMedian(input, 0, input.length - 1);

    expect(median).toBe(6);
  });

  it('should return correct median=18', () => {
    const input = [18, 17, 20, 19];

    const median = choosePivotMedian(input, 0, input.length - 1);

    expect(median).toBe(18);
  });
});
