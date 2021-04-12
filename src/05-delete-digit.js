/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const originalArray = (`${n}`).split('');
  const testArray = (`${n}`).split('');
  let resultString = '';
  let resultNumber = 0;
  let resultIntermediate = 0;
  for (let i = 0; i < originalArray.length; i++) {
    testArray.splice(i, 1);
    for (let j = 0; j < testArray.length; j++) {
      resultString += testArray[j];
    }
    resultIntermediate = Number.parseInt(resultString, 10);
    resultString = '';
    if (resultIntermediate > resultNumber) {
      resultNumber = resultIntermediate;
    }

    testArray.splice(i, originalArray[i]);
  }
  return resultNumber;
}

module.exports = deleteDigit;
