/**
 * Returns the sum of the numbers in the given list.
 * @param {Array<number>} list The list of numbers
 * @return {number}
 */
exports.sum = list => list.reduce((x, y) => x + y, 0)
