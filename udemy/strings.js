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

// anagramProblem();
function isBelowMinVersion(appVersion, minVersion) {
  if (typeof appVersion !== 'string'
    || typeof minVersion !== 'string'
    || !appVersion
    || !minVersion) {
    return false;
  }

  let result = false;
  const parseVersionArray = (version) => {
    if (version.includes('v')) {
      const [, versionNumber] = version.split('v');
      return versionNumber.split('.');
    }
    return version.split('.');
  };
  const version1 = parseVersionArray(appVersion);
  const version2 = parseVersionArray(minVersion);
  console.log(version1, version2);

  for (let i = 0; i < (Math.max(version1.length, version2.length)); i++) {
    if (version1[i] === undefined) { version1[i] = 0; }
    if (version2[i] === undefined) { version2[i] = 0; }

    if (Number(version1[i]) < Number(version2[i])) {
      result = true;
      break;
    }
    if (version1[i] !== version2[i]) {
      break;
    }
  }
  return (result);
}

console.log(isBelowMinVersion('1.4.5', '1.4.5'));
console.log(isBelowMinVersion('1.4.4', '1.4.5'));
console.log(isBelowMinVersion('1.4.5', '1.4.6'));
console.log(isBelowMinVersion('1.2.5', '1.4.6'));
console.log(isBelowMinVersion('1.6.5', '1.4.6'));
console.log(isBelowMinVersion('2.4.5', '1.4.6'));
console.log(isBelowMinVersion('1.4.5', '2.4.6'));
console.log(isBelowMinVersion('1.1.3.1', '2.1.3.0'));
console.log(isBelowMinVersion('v1.1.0.93', '1.4.5'));
