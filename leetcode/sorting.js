const mergeProblem = () => {
  const q = [[1, 2, 3, 4, 0, 0, 0, 0], 4, [2, 3, 5, 6], 4];

  const merge = (nums1, m, nums2, n) => {
    let combined = m + n - 1;
    let first = m - 1;
    let second = n - 1;
    while (second >= 0) {
      if (nums1[first] > nums2[second]) {
        nums1[combined] = nums1[first];
        first--;
      } else {
        nums1[combined] = nums2[second];
        second--;
      }
      combined--;
    }

    return nums1;
  };

  const mergeBad = (nums1, m, nums2, n) => {
    let j = 0;
    let z = nums1.length - n;
    for (let i = 0; i < m + n; i++) {
      if (nums2[j] <= nums1[i]) {
        nums1.splice(i, 0, nums2[j]);
        nums1.pop();
        j++;
        z++;
      } else if (nums2[j] > nums1[i] && i === z) {
        nums1[z] = nums2[j];
        j++;
        z++;
      }
    }

    return [nums1];
  };

  console.log(mergeBad(...q));
  console.log(mergeBad(...[[1], 1, [], 0]));
  console.log(mergeBad(...[[0], 0, [1], 1]));
};

const firstBadVersion = () => {
  const N = 2147483647;
  const BAD = 2147483646;

  const isBadVersion = (version, bad = BAD) => version >= bad;

  const findFirstBad = (isBadVersionFunc, n) => {
    const badVersion = n;
    if (!isBadVersionFunc(badVersion)) {
      return badVersion + 1;
    }
    const half = Math.ceil(n / 2);
    console.log(half);
    if (isBadVersionFunc(half)) {
      return findFirstBad(isBadVersionFunc, half - 1);
    }
    return findFirstBad(isBadVersionFunc, half + 1);
  };

  const solution = (isBadVersionFunc) => (n) => findFirstBad(isBadVersionFunc, n);

  console.log(solution(isBadVersion)(N));
};

firstBadVersion();
