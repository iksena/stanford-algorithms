const { merge, mergeSort } = require('./inversions');

describe('Inversions', () => {
  it('should merge 2 sorted arrays and count split inversions', () => {
    const left = [1, 4, 5, 9, 11, 12, 20, 23, 25, 26];
    const right = [2, 3, 6, 7, 8, 10, 13, 21, 22, 24];
    const expectedSortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11,
      12, 13, 20, 21, 22, 23, 24, 25, 26];
    const expectedInversions = 57;

    const [sortedArray, inversions] = merge(left, right);

    expect(sortedArray).toStrictEqual(expectedSortedArray);
    expect(inversions).toBe(expectedInversions);
  });

  it('should mergeSort an array and count total inversions', () => {
      const array = [6, 5, 4, 3, 2, 1];
      const expectedSortedArray = [1, 2, 3, 4, 5, 6];
      const expectedInversions = 15

      const [sortedArray, inversions] = mergeSort(array);

      expect(sortedArray).toStrictEqual(expectedSortedArray);
      expect(inversions).toBe(expectedInversions)
  });
});
