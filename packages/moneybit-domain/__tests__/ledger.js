const { expect } = require('chai')
const { journal, chart } = require('../__mocks__')
const { AccountType, MajorAccountType, Subledger } = require('../')

const depositType = new AccountType('Deposit', MajorAccountType.ASSET)

const fakeAccountType = new AccountType('fake', MajorAccountType.ASSET)

describe('Ledger', () => {
  const ledger = journal.toLedger(chart)

  describe('hasSubledgerOfAccountType', () => {
    it('returns true when it has the subldeger of the given type', () => {
      expect(ledger.hasSubledgerOfAccountType(depositType)).to.equal(true)
    })

    it('returns false when it does not have the subldeger of the given type', () => {
      expect(ledger.hasSubledgerOfAccountType(fakeAccountType)).to.equal(false)
    })
  })

  describe('getSubledgerByAccountType', () => {
    it('gets the subledger', () => {
      const subledger = ledger.getSubledgerByAccountType(depositType)

      expect(subledger).to.be.instanceof(Subledger)
    })

    it('throws when the subledger of the account type is not found', () => {
      expect(() => ledger.getSubledgerByAccountType(fakeAccountType)).to.throw()
    })
  })
})
