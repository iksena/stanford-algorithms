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

  console.log(removeDuplicates2(q1));
};

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

  console.log(intersect(q1, q2));
  console.log(intersect([1, 2, 2, 1], [2, 2]));
};

intersectionArray();
