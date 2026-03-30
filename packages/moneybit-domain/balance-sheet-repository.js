const fs = require('fs')
const yaml = require('js-yaml')

const { ASSET, LIABILITY, EQUITY } = require('./major-account-type')

/**
 * The repository class of the balance sheet model.
 */
class BalanceSheetRepository {
  /**
   * Coverts the balance sheet to the object.
   *
   * @param {BalanceSheet} balanceSheet The balance sheet
   * @return {Object}
   */
  toObject(balanceSheet) {
    const obj = {}

    this.insertBSDataByMajorType(balanceSheet, obj, ASSET)
    this.insertBSDataByMajorType(balanceSheet, obj, LIABILITY)
    this.insertBSDataByMajorType(balanceSheet, obj, EQUITY)

    obj.total = balanceSheet.totalByMajorType(ASSET).amount

    return obj
  }

  /**
   * Inserts the balance sheet data to the object by the given type.
   *
   * @param {BalanceSheet} balanceSheet The balance sheet
   * @param {Object} obj The object to insert the data
   * @param {MajorAccountType} majorType The type
   */
  insertBSDataByMajorType(balanceSheet, obj, majorType) {
    const subObj = (obj[majorType.name] = {})

    balanceSheet.subledgers(majorType).forEach(subledger => {
      subObj[subledger.typeName()] = subledger.total().amount
    })

    if (majorType === EQUITY) {
      const retainedEarnings = balanceSheet.retainedEarnings().amount

      subObj['Retained earnings'] = retainedEarnings
      subObj.total =
        balanceSheet.totalByMajorType(majorType).amount + retainedEarnings
    } else {
      subObj.total = balanceSheet.totalByMajorType(majorType).amount
    }
  }

  /**
   * Converts the balance sheet to the yaml.
   *
   * @param {BalanceSheet} balanceSheet The balance sheet
   * @return {string} The yaml representation
   */
  toYaml(balanceSheet) {
    return yaml.dump(this.toObject(balanceSheet))
  }

  /**
   * Saves the balance sheet as the yaml string to the path.
   * @param {BalanceSheet} balanceSheet The balance sheet
   * @param {string} path The path to save
   */
  saveYamlToPath(balanceSheet, path) {
    fs.writeFileSync(path, this.toYaml(balanceSheet))
  }
}

module.exports = BalanceSheetRepository
