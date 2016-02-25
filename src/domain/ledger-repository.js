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
            entries: subledger.entries.map(entry => this.journalEntryToObject(entry))
        }

    }


    /**
     * Converts the journal entry to the object suitable for yaml serialization.
     *
     * @param {JournalEntry}
     * @return {Object}
     */
    journalEntryToObject(entry) {

        const debit = entry.getDebitAmount()
        const credit = entry.getCreditAmount()

        return {
            date: moment(entry.date).format('YYYY-MM-DD'),
            desc: entry.description,
            dr: debit ? debit.amount : '-',
            cr: credit ? credit.amount : '-',
            cor: entry.getCorrespondingAccountTypes().map(type => type.name).join(' '),
            ref: entry.account.id
        }

    }

}
