const { AccountTypeChart, MajorAccountType } = require('../')
const { EQUITY } = MajorAccountType
const chartObj = require('../../__mocks__/chart')

const { expect } = require('chai')

const factory = new AccountTypeChart.Factory()

describe('AccountTypeChart', () => {
  let chart

  beforeEach(() => {
    chart = factory.createFromObject(chartObj)
  })

  describe('getMajorTypeByAccountTypeName', () => {
    it('gets the major type when the type name is found in the chart', () => {
      const majorType = chart.getMajorTypeByAccountTypeName('Capital')

      expect(majorType).to.be.instanceof(MajorAccountType)
      expect(majorType).to.equal(EQUITY)
    })

    it('throws when the type name is not found by the chart', () => {
      expect(() => chart.getMajorTypeByAccountTypeName('A')).to.throw()
    })
  })
})
