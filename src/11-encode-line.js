/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let resultString = '';
  let countSymbol = 1;
  if (!str) {
    return '';
  }
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      countSymbol++;
    } else if (countSymbol === 1) {
      resultString += str[i];
    } else {
      resultString += `${countSymbol}${str[i]}`;
      countSymbol = 1;
    }
  }
  return resultString;
}

module.exports = encodeLine;
