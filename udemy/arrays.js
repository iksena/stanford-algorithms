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

findMissingProblem();
