const a = [
  [1, 4, 9],
  [2, 5, 10],
  [3, 7, 12],
  [6, 8, 13],
];

const merge = (b = [], k = 0) => {
  if (k === a.length) return b;

  let i = 0;
  let j = 0;
  const c = [];
  for (let m = 0; m < b.length + 3; m++) {
    if (b[i] <= a[k][j]) {
      c[m] = b[i];
      i++;
    } else {
      c[m] = a[k][j];
      j++;
    }
  }

  return merge(c, k + 1);
};

module.exports = { merge };
