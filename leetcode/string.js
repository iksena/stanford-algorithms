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

reverseInteger();
