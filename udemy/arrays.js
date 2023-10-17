const findMissingProblem = () => {
  const q = [6, 7, 8, 9, 11, 15, 16, 17];

  const findMissingNaturalNumber = (numbers) => {
    let diff = numbers[0] - 0;
    for (let index = 0; index < numbers.length; index++) {
      const element = numbers[index];
      if (element - index !== diff) {
        while (diff < element - index) {
          console.log(index + diff);
          diff++;
        }
      }
    }
  };

  //   findMissingNaturalNumber(q); // 10,12,13,14

  const findMissingNaturalNumberHash = (numbers) => {
    const low = Math.min(...numbers);
    const high = Math.max(...numbers);
    const memory = {};

    for (let index = low; index <= high; index++) {
      memory[index] = 0;
    }
    for (let index = 0; index < numbers.length; index++) {
      const element = numbers[index];
      memory[element]++;
    }
    Object.entries(memory).forEach(([number, count]) => {
      if (count === 0) {
        console.log(number);
      }
    });
  };

  findMissingNaturalNumberHash(q);
};

const findDuplicatesProblem = () => {
  const q1 = [3, 5, 8, 8, 10, 12, 15, 15, 15, 20]; // sorted

  const findDuplicates = (numbers) => {
    let lastDuplicate = 0;
    for (let index = 0; index < numbers.length; index++) {
      if (numbers[index] === numbers[index + 1] && numbers[index] !== lastDuplicate) {
        lastDuplicate = numbers[index];
        console.log(lastDuplicate);
      }
    }
  };
  findDuplicates(q1);

  const findDuplicatesCount = (numbers) => {
    let j = 0;
    for (let index = 0; index < numbers.length; index++) {
      if (numbers[index] === numbers[index + 1]) {
        j = index + 1;
        while (numbers[j] === numbers[index]) { j++; }
        console.log(`${numbers[index]} is appearing ${j - index} times`);
        index = j - 1;
      }
    }
  };
  findDuplicatesCount(q1);
};

// findDuplicatesProblem();

const findPairProblem = () => {
  const q1 = [6, 3, 8, 10, 16, 7, 5, 2]; // sum 10

  const findPairWithSum = (numbers, sum) => {
    const memory = numbers.reduce((hash, current) => ({ ...hash, [current]: 0 }), {});
    console.log(memory);
    for (let index = 0; index < numbers.length; index++) {
      const element = numbers[index];
      console.log(memory);
      if (memory[sum - element] > 0) {
        console.log(`Pair: ${element} and ${sum - element}`);
      }
      memory[element] += 1;
    }
    console.log(memory);
  };

  const findPairSorted = (numbers, sum) => {
    let i = 0;
    let j = numbers.length - 1;
    while (i < j) {
      if (numbers[i] + numbers[j] === sum) {
        console.log(`Pair: ${numbers[i]} + ${numbers[j]} = ${sum}`);
        i++;
        j--;
      } else if (numbers[i] + numbers[j] < sum) {
        i++;
      } else {
        j--;
      }
    }
  };

  // findPairWithSum(q1, 10);
  findPairSorted([1, 3, 4, 5, 6, 8, 9, 10, 12, 14], 10);
};

findPairProblem();
