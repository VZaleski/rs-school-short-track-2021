/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  const array = names;
  for (let i = 0; i < array.length; i++) {
    if (array.slice(i + 1, array.length).includes(array[i])) {
      let numberFile = 1;
      for (let j = i + 1; j < array.length; j++) {
        if (array[j] === array[i]) {
          array[j] += `(${numberFile})`;
          numberFile++;
        }
      }
    }
  }
  return array;
}

module.exports = renameFiles;
