function findBusiestPeriod(data) {
  let total = 0;
  let max = { timestamp: -1, total: -1 };
  for (let i = 0; i < data.length; i++) {
    const [timestamp, count, flag] = data[i];
    const people = flag > 0 ? count : -1 * count;
    total += people;
    if (max.total < total && ((data[i + 1] && data[i + 1][0] > timestamp) || !data[i + 1])) {
      max = {
        timestamp,
        total,
      };
    }
  }
  return max.timestamp;
}

/**
Given two sorted arrays arr1 and arr2 of passport numbers,
implement a function findDuplicates that returns an array
of all passport numbers that are both in arr1 and arr2.
Note that the output array should be sorted in an ascending order.

N and M be the lengths of arr1 and arr2,
O(N+M)

const arr1 = [1, 2, 3, 5, 6, 7];
const arr2 = [3, 6, 7, 8, 20];
=> [3,6,7]
*/

function findDuplicates(arr1, arr2) {
  const length = Math.max(arr1.length, arr2.length);
  const result = [];
  let i = 0;
  let j = 0;
  while (i < length && j < length) {
    if (arr1[i] === arr2[j]) {
      result.push(arr1[i]);
      i++;
      j++;
    } else if (arr1[i] < arr2[j]) {
      i++;
    } else {
      j++;
    }
  }
  return result;
}
