/* eslint-disable no-continue */
const reverseString = () => {
  const q = ['H', 'e', 'n', 'n', 'a', 'h', 'r'];

  const reverse = (s) => {
    for (let i = 0; i < Math.floor(s.length / 2); i++) {
      let j = s.length - 1 - i;
      [s[i], s[j]] = [s[j], s[i]];
      j--;
    }

    return s;
  };

  const reverseGood = (s) => {
    let i = 0;
    let j = s.length - 1;
    while (i < j) {
      [s[i], s[j]] = [s[j], s[i]];
      i++;
      j--;
    }

    return s;
  };

  console.log(reverse(q));
};

const reverseInteger = () => {
  const q = -123;

  const reverseInt = (x) => {
    const range = 2147483648;
    const sign = x < 0 ? -1 : 1;
    const s = [...Math.abs(x).toString()];
    let i = 0;
    let j = s.length - 1;
    while (i < j) {
      [s[i], s[j]] = [s[j], s[i]];
      i++;
      j--;
    }

    const result = Number(s.join('')) * sign;
    if (result < (-1 * range) || result > range - 1) return 0;

    return result;
  };

  console.log(reverseInt(q));
  console.log(reverseInt(1534236469));
};

const firstUniqueInString = () => {
  const q = 'loveleetcode';

  const firstUnique = (s) => {
    const memory = {};
    // eslint-disable-next-line guard-for-in,no-restricted-syntax
    for (let index = 0; index < s.length; index++) {
      const c = s[index];
      if (!memory[c]) {
        memory[c] = {
          count: 0,
          index,
        };
      }
      memory[c].count += 1;
    }
    const result = Object.values(memory).find(({ count }) => count < 2);
    return result?.index ?? -1;
  };

  console.log(firstUnique(q));
  console.log(firstUnique('aabb'));
  console.log(firstUnique('leetcode'));
};

const validAnagramString = () => {
  const s1 = 'anagram';
  const t1 = 'nagaram';

  const validAnagram = (s, t) => {
    if (s.length !== t.length) {
      return false;
    }
    const memory = { s: {}, t: {} };
    for (let i = 0; i < s.length; i++) {
      memory.s[s[i]] = (memory.s[s[i]] || 0) + 1;
      memory.t[t[i]] = (memory.t[t[i]] || 0) + 1;
    }

    let isAnagram = true;
    Object.entries(memory.s).forEach(([key, value]) => {
      isAnagram = isAnagram && memory.t[key] === value;
    });
    return isAnagram;
  };

  console.log(validAnagram(s1, t1));
  console.log(validAnagram('car', 'ra'));
  console.log(validAnagram('aacc', 'ccac'));
};

const validPalindromeString = () => {
  const q = 'A man, a plan, a canal: Panama';

  const validPalindrome = (s) => {
    const words = s.replace(/[^a-zA-Z0-9]/ig, '').toLowerCase();
    return words === [...words].reverse().join('');
  };

  console.log(validPalindrome(q));
  console.log(validPalindrome('race a car'));
  console.log(validPalindrome(' '));
};

const atoiString = () => {
  const q = '   -42';

  const concat = (s) => {
    let number = '';
    for (let i = 0; i < s.length; i++) {
      if (number.length > 0 && (
        (['-', '+'].includes(s[i])
          || !Number.isInteger(Number(s[i]))
          || s[i] === ' '
        ))
      ) {
        return number;
      }
      if (s[i] === ' ') {
        continue;
      }
      number += s[i];
    }

    return number;
  };

  const atoi = (s) => {
    const range = 2147483648;
    const number = Number(concat(s));
    if (Number.isNaN(number)) return 0;
    if (number < -1 * range) return -1 * range;
    if (number > range - 1) return range - 1;
    return number;
  };

  console.log(atoi(q));
  console.log(atoi('   4193 with words')); // 4193
  console.log(atoi('-91283472332')); //= -2147483648
  console.log(atoi('-+12')); //= 0
  console.log(atoi('00000-42a1234')); //= 0
  console.log(atoi('   +0 123')); //= 0
  console.log(atoi('-13+8')); //= -13
};

atoiString();
