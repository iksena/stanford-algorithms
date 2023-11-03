/* eslint-disable no-bitwise */
const containDuplicatesProblem = () => {
  const q = 'finding';

  const containDuplicates = (str) => {
    let x = 0;
    let H = 0;
    for (let index = 0; index < str.length; index++) {
      x = 1;
      const char = str.charAt(index);
      x <<= (str.charCodeAt(index) - 97);
      //   console.log(char, str.charCodeAt(index) - 97, x);
      if ((x & H) > 0) {
        console.log('duplicate', char);
      } else {
        H |= x;
      }
    }
  };

  containDuplicates(q);
};

// containDuplicatesProblem();

const anagramProblem = () => {
  const q1 = 'decimal';
  const q2 = 'medical';

  const isAnagram = (str1, str2) => {
    const strMap = {};
    for (let index = 0; index < str1.length; index++) {
      const char = str1[index];
      strMap[char] = (strMap[char] || 0) + 1;
    }
    for (let index = 0; index < str2.length; index++) {
      const char = str2[index];
      strMap[char] = (strMap[char] || 0) - 1;
    }

    return Object.values(strMap).every((charFlag) => charFlag === 0);
  };

  console.log(isAnagram(q1, q2));
  console.log(isAnagram('egg', 'ggp'));
};

anagramProblem();
