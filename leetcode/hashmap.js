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

  const memory = {};
  const isHappy = (number) => {
    const numbers = String(number).split('');
    console.log(numbers);
    let sumOfSquared = 0;
    for (let index = 0; index < numbers.length; index++) {
      const element = numbers[index];
      sumOfSquared += Number(element) ** 2;
    }
    if (sumOfSquared === 1) {
      return true;
    }

    if (memory[sumOfSquared] !== undefined) {
      return false;
    }

    memory[sumOfSquared] = number;

    return isHappy(sumOfSquared);
  };

  // console.log(isHappy(q1), '= true ?');
  console.log(isHappy(13), '= true ?');
  // console.log(isHappy(2), '= false ?');
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

happyNumberProblem();
