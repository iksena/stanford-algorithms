const A = 3141592653589793238462643383279502884197169399375105820974944592;
const B = 2718281828459045235360287471352662497757247093699959574966967627;
const C = A * B;

const ta = 12345678;
const tb = 87654321;
const tc = ta * tb;

const split = (x, n) => {
  const second = x % (10 ** Math.floor(n / 2));
  const first = Math.floor((x - second) / 10 ** Math.floor(n / 2));

  return [first, second];
};

const splitString = (x, n) => {
  if (n <= 2) return [String(x)[0], String(x)[1]];

  const first = String(x).substring(0, n / 2);
  const second = String(x).substring(n / 2);

  return [Number(first), Number(second)];
};

const recursiveMultiply = (x, y, n) => {
  if (n === 1) return x * y;

  const [a, b] = split(x, n);
  const [c, d] = split(y, n);

  const ac = recursiveMultiply(a, c, n / 2);
  const bd = recursiveMultiply(b, d, n / 2);
  const pq = recursiveMultiply(a + b, c + d, n / 2);
  const adbc = pq - ac - bd;
  console.log(ac, bd, pq);

  return 10 ** n * ac + 10 ** (n / 2) * adbc + bd;
};

const multiply = () => recursiveMultiply(A, B, 64) === C;

module.exports = { multiply };
