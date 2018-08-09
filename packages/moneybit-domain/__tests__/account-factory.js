const { Account } = require('../')
const { expect } = require('chai')

const factory = new Account.Factory()

describe('AccountFactory', () => {
  describe('createFromObject', () => {
    it('throws when the amount is not a number', () => {
      expect(() => {
        factory.createFromParams('name', '1000', {
          date: '2018-01-01',
          desc: 'desc'
        })
      }).to.throw()
    })

    it('throws when the date is not a number', () => {
      expect(() => {
        factory.createFromParams('name', 1000, {
          date: null,
          desc: 'desc'
        })
      }).to.throw()
    })
  })
})
