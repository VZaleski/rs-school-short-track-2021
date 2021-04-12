/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const objectResult = {};
  for (let i = 0; i < domains.length; i++) {
    const domainElement = domains[i].split('.').reverse();
    let indexResult = '';
    for (let j = 0; j < domainElement.length; j++) {
      indexResult += `.${domainElement[j]}`;
      if (objectResult[indexResult] === undefined) {
        objectResult[indexResult] = 1;
      } else {
        objectResult[indexResult] += 1;
      }
    }
  }
  return objectResult;
}

module.exports = getDNSStats;
