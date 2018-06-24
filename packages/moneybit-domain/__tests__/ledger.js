const { expect } = require('chai')
const { journal, chart } = require('../__mocks__')
const { AccountType, MajorAccountType, TradeSide } = require('../')

describe('Ledger', () => {
  describe('getSubledgerByAccountType', () => {
    it('throws when the subledger of the account type is not found', () => {
      const ledger = journal.toLedger(chart)
      const fakeAccountType = new AccountType(
        'fake',
        new MajorAccountType('major-fake', TradeSide.DEBIT)
      )

      expect(() => ledger.getSubledgerByAccountType(fakeAccountType)).to.throw()
    })
  })
})
