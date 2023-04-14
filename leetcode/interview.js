const movingAverage = (array, window) => {
  const averages = [];
  for (let i = 0; i < array.length; i++) {
    const lastIndex = (i + window);
    console.log(lastIndex);
    if (lastIndex <= array.length) {
      let sum = 0;
      for (let j = i; j < lastIndex; j++) {
        sum += array[j];
      }
      averages.push(sum / window);
    }
  }

  return averages;
};

// console.log(movingAverage([1, 5, 3, 4, 6, 1], 3));

/**
 * Interview Hangry Backend Engineer
 */
// Three Sum
// give a list of integers, and a number,
// find a three combination numbers from the list that add up to the number
// list = [3, 1, 5, 2, 4]
// num = 10
// result = [1, 5, 4]
//          [3, 5, 2]

// sorted = [1,2,3,4,5]
// list[i] = 1
// list[l] = 2
// list[r] = 5
// sum = 8 > num
// r -= 1
// list[i] = 1
// list[l] = 2
// list[r] = 4
// sum = 7 > num
// r -= 1
// list[i] = 1
// list[l] = 2
// list[r] = 3
// sum = 6

function threeSum(list, num) {
  const array = list.sort((a, b) => a - b);
  for (let i = 0; i < array.length - 1; i++) {
    let l = i + 1;
    let r = array.length - 1;
    while (l < r) {
      const sum = array[i] + array[l] + array[r];
      if (sum === num) {
        return [i, l, r];
      }
      if (sum < num) {
        l += 1;
      } else {
        r -= 1;
      }
    }
  }

  return -1;
}

console.log(threeSum([3, 1, 5, 2, 4], 10));

// O(n log(n))
// O(n * kn) -> O(kn^2) -> O(n^2)

// -->

// Case:
// Within one hangry outlet, there are machines A and B. When an order is placed,
//  we can use both machines to produce the order items.

// Machine A(5) requires higher cost to operate than machine B(2).
// However, it takes machine A 5 minutes to finish producing the order items,
// while machine B takes 1-10 minutes to finish producing order items

// Assuming Hangry has an SLA of 7 minutes waiting time for every order and all orders are the same,
// how would you design a system that minimizes the cost used to produce the orders?

// Request: 2 orders/5 minutes

// User -> Gateway -> - Machine A (5 mins)
//                    - Machine B (1-10 mins)

// Gateway: Load balancer -> A -> B -> A
// B ontime: 70%, medium cost
// A ontime: 100%, high cost

// 1st -> 100 machine A (max. usage in 5mins 1x)
// 2nd -> 100 machine B

// every 10 orders -> cek order yang masuk B -> hitung average time ->
// if < 7 menit -> mesin B
// - 10 mesin B untuk 10 orders
// - average

// if > 7 menit -> mesin A

// 70% of orders -> B, 30% -> A

/**
 * Interview Dans Multi Pro Tech Lead
 */
const printPyramid = () => {
  let line = '';
  for (let i = 8; i > 0; i--) {
    for (let j = 0; j <= 8; j++) {
      const inc = 2 ** j;
      const dec = 2 ** i;
      const print = inc / dec < 1 ? ' ' : inc / dec;
      line = line.concat(print, '  ');
    }
    for (let k = 7; k > 0; k--) {
      const inc = 2 ** k;
      const dec = 2 ** i;
      const print = inc / dec < 1 ? ' ' : inc / dec;
      line = line.concat(print, '  ');
    }
    const j = 0;
    console.log(line);
    line = '';
  }
};

printPyramid();
