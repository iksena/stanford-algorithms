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
      if(memoryS[charS] === )
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

  console.log(isIsomorphicString(s1, t1)); // true
  console.log(isIsomorphicString('foo', 'bar')); // false
  console.log(isIsomorphicString('egg', 'add')); // true
  console.log(isIsomorphicString('badc', 'baba')); // false
  console.log(isIsomorphicString('a', 'a')); // true
  console.log(isIsomorphicString('ab', 'ab')); // true
  console.log(isIsomorphicString('bbbaaaba', 'aaabbbba')); // false
};

isomorphicStringProblem();
