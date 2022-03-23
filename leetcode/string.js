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

  console.log(reverse(q));
};

reverseString();
