const { Money } = require('../')
const { expect } = require('chai')

describe('Money', () => {
  describe('plus', () => {
    const one = new Money(1)
    const two = new Money(2)

    expect(one.plus(two).amount).to.equal(3)
  })
})
