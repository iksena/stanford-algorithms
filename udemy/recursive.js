const sumOfNatural = () => {
  const sum = (n) => {
    if (n === 0) {
      return 0;
    }

    return n + sum(n - 1);
  };

  console.log(sum(5)); // 1+2+3+4+5
};

const factorialRecursive = () => {
  const factorial = (n) => {
    if (n === 0) {
      return 1;
    }

    return n * factorial(n - 1);
  };

  console.log(factorial(5)); // 5! = 5*4*3*2*1
};

const powerRecursive = () => {
  const powerLinear = (m, n) => {
    if (n === 0) {
      return 1;
    }

    return m * powerLinear(m, n - 1);
  };

  const power = (m, n) => {
    if (n === 0) {
      return 1;
    }

    if (n % 2 === 0) {
      return power(m * m, n / 2);
    }

    return m * power(m * m, (n - 1) / 2);
  };

  console.log(powerLinear(2, 5)); // 2^5 = 32
  console.log(power(2, 5)); // 2^5 = 32
};

sumOfNatural();
