import fs from 'fs'
import rimraf from 'rimraf'
import {expect} from 'chai'

import BalanceSheetRepository from '../../src/domain/balance-sheet-repository'
import {journal} from '../helper'

const repository = new BalanceSheetRepository()

describe('BalanceSheetRepository', () => {

    describe('saveYamlToPath', () => {

        it('saves the yaml to the path', () => {

            const path = __dirname + '/bs.yml'

            repository.saveYamlToPath(journal.toBalanceSheet(), path)

            const yaml = fs.readFileSync(path).toString()

            expect(yaml).to.be.a('string')
            expect(yaml.length).to.gt(0)

            rimraf.sync(path)

        })
    })

})
