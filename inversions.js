const merge = (leftArray, rightArray, inversions = 0) => {
  let i = 0;
  let j = 0;
  const mergedArray = [];
  let splitInversions = inversions;

  for (let k = 0; k < leftArray.length + rightArray.length; k++) {
    if (leftArray[i] < rightArray[j] || !rightArray[j]) {
      mergedArray[k] = leftArray[i];
      i++;
    } else {
      mergedArray[k] = rightArray[j];
      j++;
      splitInversions += (leftArray.length - i);
    }
  }

  return [mergedArray, splitInversions];
};

const mergeSort = (array, inversions = 0) => {
  const half = Math.floor(array.length / 2);

  if (array.length < 2) return [array, inversions];

  const [left, leftInversions] = mergeSort(array.slice(0, half), inversions);
  const [right, rightInversions] = mergeSort(array.slice(half), inversions);

  return merge(left, right, leftInversions + rightInversions + inversions);
};

module.exports = { merge, mergeSort };
