import fs from 'fs'
import yaml from 'js-yaml'
import moment from 'moment'

/**
 * The repository class of the ledger model.
 */
export default class LedgerRepository {

    /**
     * @param {Ledger} ledger The ledger
     * @param {String} path The path to save
     */
    saveAsYamlToPath(ledger, path) {

        var yaml = this.toYaml(ledger)

        fs.writeFileSync(path, yaml)

    }

    /**
     * Converts the ledger to yaml format.
     *
     * @param {Ledger} ledger
     * @return {String}
     */
    toYaml(ledger) {

        return yaml.safeDump(this.ledgerToObject(ledger))

    }

    /**
     * Converts the ledger to object suitable for yaml serialization.
     *
     * @param {Ledger} ledger
     * @return {Object}
     */
    ledgerToObject(ledger) {

        const obj = {}

        ledger.subledgers.forEach(subledger => {

            obj[subledger.type.name] = this.subledgerToObject(subledger)

        })

        return obj

    }

    /**
     * Converts the subledger to an object.
     * @param {Subledger} subleger
     * @return {Object}
     */
    subledgerToObject(subledger) {

        return {
            dr: subledger.totalDebit().amount,
            cr: subledger.totalCredit().amount,
            type: subledger.type.majorType.name,
            accounts: subledger.accounts.map(account => this.accountToObject(account))
        }

    }


    /**
     * Converts the account to the object suitable for yaml serialization.
     *
     * @param {Account} account
     * @return {Object}
     */
    accountToObject(account) {

        return {
            date: moment(account.date).format('YYYY-MM-DD'),
            desc: account.description,
            dr: account.isDebit() ? account.getDebitAmount().amount : '-',
            cr: account.isCredit() ? account.getCreditAmount().amount : '-',
            cor: account.getCorrespondingAccountTypes().map(type => type.name).join(' '),
            ref: account.getTradeId()
        }

    }

}
