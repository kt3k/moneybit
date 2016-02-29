import fs from 'fs'
import rimraf from 'rimraf'
import AccountTypeChartFactory from '../../src/domain/account-type-chart-factory'
import JournalFactory from '../../src/domain/journal-factory'
import LedgerRepository from '../../src/domain/ledger-repository'
import LedgerFactory from '../../src/domain/ledger-factory'
import chartObj from '../fixture/chart'
import journalObj from '../fixture/journal'
import {expect} from 'chai'

const chart = new AccountTypeChartFactory().createFromObject(chartObj)
const journal = new JournalFactory(chart).createFromArray(journalObj)

describe('LedgerRepository', () => {

    const repository = new LedgerRepository()

    describe('saveAsYamlToPath', () => {

        it('saves the ledger to the given path', () => {

            const ledger = new LedgerFactory().createFromJournal(journal)

            const path = __dirname + '/ledger.yml'

            repository.saveAsYamlToPath(ledger, path)

            const yaml = fs.readFileSync(path).toString()

            expect(yaml).to.be.a('string')
            expect(yaml.length).to.be.gt(0)

            rimraf.sync(path)

        })

    })

})
