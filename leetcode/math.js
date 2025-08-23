const fizzBuzzProblem = () => {
  const q = 15;

  const fizzBuzz = (n) => {
    const result = [];
    for (let i = 1; i <= n; i++) {
      if (i % 3 === 0 && i % 5 === 0) {
        result.push('FizzBuzz');
      } else if (i % 3 === 0) {
        result.push('Fizz');
      } else if (i % 5 === 0) {
        result.push('Buzz');
      } else {
        result.push(i.toString());
      }
    }
    return result;
  };

  console.log(fizzBuzz(q));
};

const combinationalSum = () => {
  const arr = [2, 4, 6, 8];
  const res = 8;

  const solution = (array, result) => {
    const combinations = [];
    for (let index = 0; index < array.length; index++) {
      const combination = [];
      let residue = result;
      while (residue > 0) {
        residue -= array[index];
        combination.push(array[index]);
      }

      if (residue === 0) combinations.push(combination);
    }
    return combinations;
  };

  console.log(solution(arr, res));
};

// combinationalSum();

/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = function(x) {
    const str = x.toString();
    const reversed = str.split('').reverse().join('');
    return str === reversed;
};

const isPalindromeGood = function(x) {

    let check=x
    let reverse=0;
    while(x>0)
    {
        let d=x%10;
        reverse=(reverse*10)+d;
        
        x=Math.floor(x/10)

    }

    return reverse === check
};
