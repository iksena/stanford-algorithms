const MyHashSet = function () {
  this.hash = {};
};

MyHashSet.prototype.getAll = function () {
  return Object.values(this.hash).reduce((keys, bucket) => [...keys, ...(bucket || [])], []);
};

/**
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.add = function (key) {
  const bucketNumber = key % 5;
  if (this.contains(key)) return;
  const newBucket = this.hash[bucketNumber] || [];
  newBucket.push(key);
  this.hash[bucketNumber] = newBucket;
};

/**
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.remove = function (key) {
  const bucketNumber = key % 5;

  const bucket = this.hash[bucketNumber] || [];
  const newBucket = [];
  for (let i = 0; i < bucket.length; i++) {
    if (bucket[i] !== key) {
      newBucket.push(bucket[i]);
    }
  }
  this.hash[bucketNumber] = newBucket;
};

/**
 * @param {number} key
 * @return {boolean}
 */
MyHashSet.prototype.contains = function (key) {
  const bucketNumber = key % 5;
  const result = (this.hash[bucketNumber] || []).findIndex((currentKey) => currentKey === key);

  return result >= 0;
};

const happyNumberProblem = () => {
  const q1 = 19;

  const isHappy = (number) => {
    const memory = {};
    let sumOfSquared = number;
    do {
      const numbers = String(sumOfSquared).split('');
      console.log(numbers);
      sumOfSquared = 0;
      for (let index = 0; index < numbers.length; index++) {
        const element = numbers[index];
        sumOfSquared += Number(element) ** 2;
      }

      if (memory[sumOfSquared] !== undefined) return false;

      memory[sumOfSquared] = true;
    } while (sumOfSquared !== 1);

    return true;
  };

  console.log(isHappy(q1), '= true ?');
  console.log(isHappy(13), '= true ?');
  console.log(isHappy(2), '= false ?');
  // circular ['2']:
  //   ['4']
  //   ['1', '6']
  //   ['3', '7']
  //   ['5', '8']
  //   ['8', '9']
  //   ['1', '4', '5']
  //   ['4', '2']
  //   ['2', '0'];
};

// happyNumberProblem();

const isomorphicStringProblem = () => {
  const s1 = 'paper';
  const t1 = 'title';

  const isIsomorphicString = (s, t) => {
    const memoryS = {};
    const memoryT = {};
    if (s.length <= 1 && s.length === t.length) {
      return true;
    }
    for (let index = 0; index < s.length; index++) {
      const charS = s.charAt(index);
      const charT = t.charAt(index);
      // if(memoryS[charS] === )
      memoryS[charS] = charT;
      memoryT[charT] = charS;
    }

    console.log(memoryS, memoryT);

    const lengthS = Object.getOwnPropertyNames(memoryS).length;
    const lengthT = Object.getOwnPropertyNames(memoryT).length;

    return lengthS === lengthT;

    // if (!memoryS[charS]) {
    //   memoryS[charS] = charT;
    // } else if (!memory[charT]) {
    //   memory[charT] = charS;
    // } else if (memory[charS] === charT || memory[charT] === charS) {
    //   isIsomorphic = true;
    // } else {
    //   isIsomorphic = false;
    // }

    // return isIsomorphic;
  };

  const isIsomorphic = (s, t) => {
    const hashmap1 = {};
    for (let index = 0; index < s.length; index++) {
      const element = s.charAt(index);
      if (!hashmap1[element]) {
        hashmap1[element] = t.charAt(index);
      } else if (hashmap1[element] !== t.charAt(index)) {
        return false;
      }
    }
    const hashmap2 = {};
    for (let index = 0; index < t.length; index++) {
      const element = t.charAt(index);
      if (!hashmap2[element]) {
        hashmap2[element] = s.charAt(index);
      } else if (hashmap2[element] !== s.charAt(index)) {
        return false;
      }
    }

    return true;
  };

  console.log(isIsomorphic(s1, t1)); // true
  console.log(isIsomorphic('foo', 'bar')); // false
  console.log(isIsomorphic('egg', 'add')); // true
  console.log(isIsomorphic('badc', 'baba')); // false
  console.log(isIsomorphic('a', 'a')); // true
  console.log(isIsomorphic('ab', 'ab')); // true
  console.log(isIsomorphic('bbbaaaba', 'aaabbbba')); // false
};

// isomorphicStringProblem();

const minimumIndexSumOfTwoLists = () => {
  const q1 = ['Shogun', 'Tapioca Express', 'Burger King', 'KFC'];
  const q2 = ['Piatti', 'The Grill at Torrey Pines', 'Hungry Hunter Steakhouse', 'Shogun'];

  const commonStringLeastIndexSum = (list1, list2) => {
    const memory = {};
    let i = 0;
    let j = 0;
    while (i < list1.length && j < list2.length) {
      if (list1[i] === list2[j]) {
        console.log(list1[i], list2[j], i, j);
        memory[list1[i]] = i + j;
        i++;
        j = 0;
      } else {
        console.log('else', list1[i], list2[j], i, j);
        j++;
      }
    }
    console.log(memory);
  };

  commonStringLeastIndexSum(q1, q2);
  commonStringLeastIndexSum(['Shogun', 'Tapioca Express', 'Burger King', 'KFC'], ['KFC', 'Shogun', 'Burger King']);
  commonStringLeastIndexSum(['happy', 'sad', 'good'], ['sad', 'happy', 'good']);
  commonStringLeastIndexSum(['KFC', 'Shogun', 'Burger King', 'Tapioca Express'], ['Shogun', 'Tapioca Express', 'Burger King', 'KFC']);
};

minimumIndexSumOfTwoLists();

const intersectionProblem = () => {
  const q1 = [4, 9, 5];
  const q2 = [9, 4, 9, 8, 4];

  const intersection = (nums1, nums2) => {
    const hashmap = {};
    for (let index = 0; index < nums1.length; index++) {
      const element = nums1[index];
      hashmap[element] = { left: ((hashmap[element] || {}).left || 0) + 1 };
    }

    for (let index = 0; index < nums2.length; index++) {
      const element = nums2[index];
      hashmap[element] = { ...hashmap[element], right: ((hashmap[element] || {}).right || 0) + 1 };
    }

    return Object.entries(hashmap).reduce((intersections, [key, { left, right }]) => {
      if (left > 0 && right > 0) {
        return [...intersections, key];
      }

      return intersections;
    }, []);
  };

  const intersectionSet = (nums1, nums2) => {
    const hashmap = {};
    const set1 = new Set(nums1); // O(m)
    const set2 = new Set(nums2); // O(n)

    set1.forEach((value) => { hashmap[value] = 1; }); // O(m)
    set2.forEach((value) => { hashmap[value] = (hashmap[value] || 0) + 1; }); // O(n)

    return Object.entries(hashmap).reduce((intersections, [key, count]) => { // O(m+n)
      if (count > 1) {
        return [...intersections, key];
      }

      return intersections;
    }, []);
  };

  const intersectionSetWithoutHash = (nums1, nums2) => {
    const set1 = new Set(nums1); // O(m)
    const set2 = new Set(nums2); // O(n)
    const intersections = new Set();
    const k = set1.size + set2.size;
    let i = 0;
    let j = 0;
    while (i < k && j < k) {
      if (j < nums2.length && set1.has(nums2[j])) {
        if (!intersections.has(nums2[j])) { intersections.add(nums2[j]); }
        j++;
      } else if (i < nums1.length && set2.has(nums1[i])) {
        if (!intersections.has(nums1[i])) { intersections.add(nums1[i]); }
        i++;
      } else {
        i++;
        j++;
      }
    }

    return [...intersections.values()];
  };

  const intersectionSimple = (nums1, nums2) => {
    const intersections = [];

    for (let index = 0; index < nums1.length; index++) {
      const element = nums1[index];
      if (nums2.includes(element)) {
        intersections.push(element);
      }
    }

    return [...new Set(intersections).values()];
  };

  console.log(intersectionSimple(q1, q2));
  console.log(intersectionSimple([1, 2, 2, 1], [2, 2]));
  console.log(intersectionSimple([1], [1]));
  console.log(intersectionSimple([1, 1, 2, 2, 2, 2], [3, 3, 3, 3]));
  console.log(intersectionSimple([1], []));
};

// intersectionProblem();
