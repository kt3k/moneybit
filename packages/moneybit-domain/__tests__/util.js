const { sum } = require('../util')

const { expect } = require('chai')

describe('sum', () => {
  it('adds up the given numbers', () => {
    expect(sum([1])).to.equal(1)
    expect(sum([1, 2])).to.equal(3)
    expect(sum([1, 2, 3])).to.equal(6)
    expect(sum([1, 2, 3, 4])).to.equal(10)
  })

  it('returns 0 when the given list is empty', () => {
    expect(sum([])).to.equal(0)
  })
})
