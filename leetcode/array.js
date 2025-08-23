const removeDuplicatesProblem = () => {
  const q1 = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
  const removeDuplicates = (nums) => {
    let duplicates = 0;
    for (let i = 0; i < nums.length; i++) {
      let j = i + 1;
      if (nums[j] === nums[i] && nums[j] !== '_') {
        nums.splice(j, 1);
        nums.push('_');
        duplicates++;
        j--;
      }
    }

    return nums.length - duplicates;
  };

  const removeDuplicates2 = (nums) => {
    let duplicatePointer = 0;
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] !== nums[duplicatePointer]) {
        duplicatePointer++;
        nums[duplicatePointer] = nums[i];
      }
    }

    return duplicatePointer + 1;
  };

  console.log(removeDuplicates2(q1), q1);
};

// removeDuplicatesProblem();

const maxProfitProblem = () => {
  const prices1 = [7, 1, 5, 3, 6, 4];

  const maxProfit = (prices) => {
    const account = {
      hold: null,
      profit: 0,
      isHold() { return Number.isInteger(this.hold); },
      buy(index) {
        this.hold = index;
        this.profit -= prices[index];
      },
      sell(index) {
        this.hold = null;
        this.profit += prices[index];
      },
    };

    for (let i = 0; i < prices.length; i++) {
      const forecast = prices[i + 1] || 0;
      if (!account.isHold()) {
        if (forecast > prices[i]) {
          account.buy(i);
        }
      } else if (prices[account.hold] < prices[i] && prices[i] > forecast) {
        account.sell(i);
      }
    }

    return account.profit;
  };

  console.log(maxProfit(prices1));
};

// maxProfitProblem();

const containsDuplicatesProblem = () => {
  const q = [1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 13, 2];

  const containsDuplicate = (nums, pivot = 0) => {
    if (pivot >= nums.length) {
      return false;
    }

    for (let i = pivot + 1; i < nums.length; i++) {
      if (nums[i] === nums[pivot]) {
        return true;
      }
    }

    return containsDuplicate(nums, pivot + 1);
  };

  console.log(containsDuplicate(q));
};

// containsDuplicatesProblem();

const rotateProblem = () => {
  const nums1 = [1, 2, 3, 4, 5, 6, 7];

  const rotateLame = (nums, k) => {
    for (let i = 0; i < k; i++) {
      nums.unshift(nums.pop());
    }

    return nums;
  };

  const rotate = (nums, k) => {
    const cut = k > nums.length ? k % nums.length : k;
    const tail = nums.splice(nums.length - cut, cut);
    nums.unshift(...tail);

    return nums;
  };

  console.log(rotate(nums1, 3));
  console.log(rotate([1, 2], 5));
  console.log(rotate([-1, -100, 3, 99], 2));
  console.log(rotate([1, 2, 3, 4, 5, 6], 11));
};

// rotateProblem();

const singleNumberProblem = () => {
  const q = [4, 1, 2, 1, 2, 4, 3, 6, 6]; // = 4

  const singleNumber = (nums) => {
    const memory = {
      1: [],
      2: [],
    };
    for (let i = 0; i < nums.length; i++) {
      if (!memory[1].includes(nums[i])) {
        memory[1].push(nums[i]);
      } else {
        memory[2].push(nums[i]);
      }
    }

    return memory[1].find((item) => !memory[2].includes(item));
  };

  const singleNumberGood = (nums) => {
    let n = 0;
    for (let i = 0; i < nums.length; i++) {
      // eslint-disable-next-line no-bitwise
      n ^= nums[i];
    }
    return n;
  };

  console.log(singleNumber(q));
  console.log(singleNumberGood(q));
};

const intersectionArray = () => {
  const q1 = [4, 9, 5];
  const q2 = [9, 4, 9, 8, 4];

  const intersect = (nums1, nums2) => {
    const memory = {};
    nums1.forEach((num1) => {
      memory[num1] = {
        left: (memory[num1]?.left || 0) + 1,
      };
    });

    const intersection = [];
    nums2.forEach((num2) => {
      if (memory[num2]?.left > 0) {
        memory[num2].right = (memory[num2].right || 0) + 1;
        if (memory[num2].right <= memory[num2].left) {
          intersection.push(num2);
        }
      }
    });

    return intersection;
  };

  const intersect2 = (nums1, nums2) => {
    const memory = {};
    nums1.forEach((num1) => {
      memory[num1] = {
        left: (memory[num1]?.left || 0) + 1,
      };
    });

    const intersection = [];
    nums2.forEach((num2) => {
      if (memory[num2]?.left > 0) {
        memory[num2].right = (memory[num2].right || 0) + 1;
        if (memory[num2].right <= memory[num2].left) {
          intersection.push(num2);
        }
      }
    });

    return intersection;
  };

  console.log(intersect(q1, q2));
  console.log(intersect([1, 2, 2, 1], [2, 2]));
};

const arrayPlusOne = () => {
  const digits1 = [1, 2, 3]; // =124
  const digits2 = [4, 9, 9]; // =500

  const plusOne = (digits, lastIndex = null) => {
    if (lastIndex === null) {
      lastIndex = digits.length - 1;
    }

    if (lastIndex < 0) {
      digits.unshift(1);
      return digits;
    }

    if (digits[lastIndex] < 9) {
      digits[lastIndex] += 1;
      return digits;
    }

    digits[lastIndex] = 0;
    return plusOne(digits, lastIndex - 1);
  };

  console.log(plusOne(digits1));
  console.log(plusOne(digits2));
  console.log(plusOne([9])); // =10
};

const moveZeroesArray = () => {
  const q = [0, 1, 0, 3, 12];

  const moveZeroes = (nums) => {
    let zeroes = 0;
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] === 0) {
        zeroes++;
        nums.splice(i, 1);
        i--;
      }
    }

    nums.push(...Array(zeroes).fill(0));
    return nums;
  };

  console.log(moveZeroes(q));
  console.log(moveZeroes([0]));
};

const sumOfTwoInArray = () => {
  const q = [2, 7, 11, 15];

  // eslint-disable-next-line consistent-return
  const sumOfTwo = (nums, target) => {
    const memory = {};
    for (let i = 0; i < nums.length; i++) {
      if (memory[nums[i]] === undefined) {
        memory[nums[i]] = i;
      }
      const pair = target - nums[i];
      if (memory[pair] !== undefined && memory[pair] !== i) {
        return [memory[pair], i];
      }
    }
  };

  console.log(sumOfTwo(q, 9));
  console.log(sumOfTwo([3, 3], 6));
  console.log(sumOfTwo([3, 2, 4], 6));
};

const validSudokuMatrix = () => {
  const board1 = [
    ['5', '3', '.', '.', '7', '.', '.', '.', '.'],
    ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
    ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
    ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
    ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
    ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
    ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
    ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
    ['.', '.', '.', '.', '8', '.', '.', '7', '9'],
  ];

  // eslint-disable-next-line consistent-return
  const isSudokuValid = (board) => {
    const memory = {
      row: {},
      column: {},
      box: {},
    };
    const boxes = [
      [1, 1, 1, 2, 2, 2, 3, 3, 3],
      [1, 1, 1, 2, 2, 2, 3, 3, 3],
      [1, 1, 1, 2, 2, 2, 3, 3, 3],
      [4, 4, 4, 5, 5, 5, 6, 6, 6],
      [4, 4, 4, 5, 5, 5, 6, 6, 6],
      [4, 4, 4, 5, 5, 5, 6, 6, 6],
      [7, 7, 7, 8, 8, 8, 9, 9, 9],
      [7, 7, 7, 8, 8, 8, 9, 9, 9],
      [7, 7, 7, 8, 8, 8, 9, 9, 9],
    ];
    const empty = '.';
    for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board[i].length; j++) {
        if (board[i][j] === empty) {
          // eslint-disable-next-line no-continue
          continue;
        }
        const element = board[i][j];
        const box = boxes[i][j];
        if (memory.row[i]?.[element]) {
          return false;
        }
        if (memory.column[j]?.[element]) {
          return false;
        }
        if (memory.box[box]?.[element]) {
          return false;
        }
        memory.row[i] = { ...memory.row[i], [element]: true };
        memory.column[j] = { ...memory.column[j], [element]: true };
        memory.box[box] = { ...memory.box[box], [element]: true };
      }
    }

    return true;
  };

  console.log(isSudokuValid(board1));
  console.log(isSudokuValid([['8', '3', '.', '.', '7', '.', '.', '.', '.'],
    ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
    ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
    ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
    ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
    ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
    ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
    ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
    ['.', '.', '.', '.', '8', '.', '.', '7', '9']]));
};

const matrixRotationProblem = () => {
  const matrix1 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];

  const rotateMatrix = (matrix) => {
    if (matrix.length <= 1) {
      return matrix;
    }

    for (let i = 0; i < matrix.length - 1; i++) {
      for (let j = i + 1; j < matrix[i].length; j++) {
        ([matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]]);
      }
    }
    for (let i = 0; i < matrix.length; i++) {
      matrix[i].reverse();
    }

    return matrix;
  };

  console.log(rotateMatrix(matrix1));
  console.log(rotateMatrix([[1, 2], [3, 4]]));
  console.log(rotateMatrix([[5, 1, 9, 11], [2, 4, 8, 10], [13, 3, 6, 7], [15, 14, 12, 16]]));
};

const duplicateZerosProblem = () => {
  const array1 = [1, 0, 2, 3, 0, 4, 5, 0];
  const answer1 = [1, 0, 0, 2, 3, 0, 0, 4];

  const array2 = [0, 0, 0, 0, 0, 0, 0];
  const answer2 = [0, 0, 0, 0, 0, 0, 0];

  const insertAt = (array, indexAt, value) => {
    if (indexAt > array.length - 1) return array;

    for (let index = array.length - 2; index >= indexAt; index--) {
      array[index + 1] = array[index];
    }
    array[indexAt] = value;

    return array;
  };

  const duplicateZeros = (array, index = 0) => {
    const element = array[index];

    if (index > array.length - 1) {
      return array;
    }

    if (element === 0) {
      insertAt(array, index + 1, 0);
      return duplicateZeros(array, index + 2);
    }

    return duplicateZeros(array, index + 1);
  };

  // console.log(duplicateZeros(array1), answer1);
  console.log(duplicateZeros(array2), answer2);
};

// duplicateZerosProblem();

const mergeIntervalsProblem = () => {
  const a1 = [[1,3],[2,6],[8,10],[15,18]];
  const a2 = [[1,4],[4,5]];

  const mergeIntervals = (intervals) => {
    const sortedIntervals = intervals.sort((a, b) => a[0] - b[0]);
    const merged = [];

    for (const interval of sortedIntervals) {
      const lastMergedInterval = merged[merged.length - 1];
      if (merged.length === 0 || lastMergedInterval[1] < interval[0]) {
        merged.push(interval);
      } else {
        lastMergedInterval[1] = Math.max(lastMergedInterval[1], interval[1]);
      }
    }

    return merged;
  }

  const mergeWorseIntervals = (intervals) => {
    const sortedIntervals = intervals.sort((a, b) => a[0] - b[0]);
    return merge(sortedIntervals, []);
  };

  // doesn't work, merged interval won't be compared with other merged interval
  const merge = (I, newI) => {
    if (I.length == 2) {
      const [i1,i2] = I;
      const [l1,u1] = i1;
      const [l2,u2] = i2;
      if (u1 >= l2) {
        newI.push([l1, Math.max(u1, u2)]);
        return newI;
      } else {
        newI.push(i1);
        newI.push(i2);
        return newI;
      }
    } else if (I.length < 2) {
      newI.push(...I);
      return newI;
    }

    const mid = Math.floor(I.length / 2);
    return merge(I.slice(mid), merge(I.slice(0, mid), newI));
  };

  console.log(mergeIntervals(a1))
  console.log(mergeIntervals(a2))
  console.log(mergeWorseIntervals(a1))
  console.log(mergeWorseIntervals(a2))
}

const majorityElement2Problem = () => {
  const a = [3,2,3]
  
  const majorityElement = (nums) => {
    const memory = {};
    const majorityCount = Math.floor(nums.length / 3);
    
    const result = [];
    for (const num of nums) {
      memory[num] = (memory[num] || 0) + 1;
    }

    for (const [num, count] of Object.entries(memory)) {
      if (count > majorityCount) {
        result.push(Number(num));
      }
    }

    return result;
  }

  const majorityElementNoMap = (nums) => {
    const memory = new Array(1001).fill(0);
    const majorityCount = Math.floor(nums.length / 3);
    
    const result = [];
    for (const num of nums) {
      memory[num] = (memory[num] || 0) + 1;
    }

    for (const [num, count] of Object.entries(memory)) {
      if (count > majorityCount) {
        result.push(Number(num));
      }
    }

    return result;
  }

  console.log(majorityElement(a));
  console.log(majorityElement([1,2]));
  console.log(majorityElement([2,2]));
  console.log(majorityElement([3,3,3,3,3,3,3]));
  console.log(majorityElementNoMap(a));
  console.log(majorityElementNoMap([1,2]));
  console.log(majorityElementNoMap([2,2]));
  console.log(majorityElementNoMap([3,3,3,3,3,3,3]));
}

majorityElement2Problem();