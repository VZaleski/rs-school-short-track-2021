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
  const original_array = ("" + number).split('');
  const test_array = ("" + number).split('');
  let resultString = '';
  let resultNumber = 0;
  let resultIntermediate = 0;
  for (let i = 0; i < original_array.length; i++) {
    test_array.splice(i, 1);
    for(let j = 0; j < test_array.length; j++) {
      resultString += test_array[j];
    }
    resultIntermediate = Number.parseInt(resultString);
    resultString = '';
    if (resultIntermediate > resultNumber) {
      resultNumber = resultIntermediate;
    }

    test_array.splice(i, original_array[i]);
  }
  return resultNumber;
}

module.exports = deleteDigit;
