const movingAverage = (array, window) => {
  const averages = [];
  for (let i = 0; i < array.length; i++) {
    const lastIndex = (i + window);
    console.log(lastIndex);
    if (lastIndex <= array.length) {
      let sum = 0;
      for (let j = i; j < lastIndex; j++) {
        sum += array[j];
      }
      averages.push(sum / window);
    }
  }

  return averages;
};

console.log(movingAverage([1, 5, 3, 4, 6, 1], 3));
