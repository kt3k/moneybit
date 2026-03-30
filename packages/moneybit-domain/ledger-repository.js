const fs = require('fs')
const yaml = require('js-yaml')

const { ALL_TYPES } = require('./major-account-type')
const { DEBIT } = require('./trade-side')
const { sum } = require('./util')

/**
 * The repository class of the ledger model.
 */
class LedgerRepository {
  /**
   * @param {Ledger} ledger The ledger
   * @param {String} path The path to save
   */
  saveAsYamlToPath(ledger, path) {
    const yaml = this.toYaml(ledger)

    fs.writeFileSync(path, yaml)
  }

  /**
   * Converts the ledger to yaml format.
   *
   * @param {Ledger} ledger
   * @return {String}
   */
  toYaml(ledger) {
    return yaml.dump(this.ledgerToObject(ledger))
  }

  /**
   * Converts the ledger to object suitable for yaml serialization.
   *
   * @param {Ledger} ledger
   * @return {Object}
   */
  ledgerToObject(ledger) {
    const obj = {}

    ALL_TYPES.forEach(majorType => {
      obj[majorType.name] = this.subledgerListToObject(
        ledger.getSubledgersByMajorType(majorType)
      )
    })

    return obj
  }

  /**
   *
   */
  subledgerListToObject(subledgers) {
    const obj = {
      total: sum(subledgers.map(subledger => subledger.total().amount))
    }

    subledgers.forEach(subledger => {
      obj[subledger.type.name] = this.subledgerToObject(subledger)
    })

    return obj
  }

  /**
   * Converts the subledger to an object.
   * @param {Subledger} subledger
   * @return {Object}
   */
  subledgerToObject(subledger) {
    const obj = { total: subledger.total().amount }

    if (subledger.side() === DEBIT) {
      obj.dr = subledger.totalDebit().amount
      obj.cr = subledger.totalCredit().amount
    } else {
      obj.cr = subledger.totalCredit().amount
      obj.dr = subledger.totalDebit().amount
    }

    obj.accounts = subledger.accounts.map(account =>
      this.accountToObject(account)
    )

    return obj
  }

  /**
   * Converts the account to the object suitable for yaml serialization.
   *
   * @param {Account} account
   * @return {Object}
   */
  accountToObject(account) {
    const obj = {
      date: account.date.format('YYYY/MM/DD'),
      desc: account.description,
      cor: account
        .getCorrespondingAccountTypes()
        .map(type => type.name)
        .join(' '),
      ref: account.getTradeId()
    }

    if (account.isDebit()) {
      obj.dr = account.getDebitAmount().amount
    } else {
      obj.cr = account.getCreditAmount().amount
    }

    return obj
  }
}

module.exports = LedgerRepository
