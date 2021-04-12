/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  let n1 = n;
  let sum = 0;
  let remainder = 0;
  let arr = n1.toString().split('');
  for (let i = 0; i < arr.length; i++) {
    remainder = n1 % 10;
    n1 = Math.floor(n1 / 10);
    sum += remainder;
  }
  if (sum > 9) {
    remainder = 0;
    arr = sum.toString().split('');
    n1 = sum;
    sum = 0;
    for (let i = 0; i < arr.length; i++) {
      remainder = n1 % 10;
      n1 = Math.floor(n1 / 10);
      sum += remainder;
    }
  }
  return sum;
}

module.exports = getSumOfDigits;
