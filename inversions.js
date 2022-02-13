const merge = (leftArray, rightArray) => {
  let i = 0;
  let j = 0;
  let splitInversions = 0;
  const mergedArray = [];

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

  return { mergedArray, splitInversions };
};

module.exports = { merge };
