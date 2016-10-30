import JournalFactory from '../src/domain/journal-factory'
import AccountTypeChartFactory from '../src/domain/account-type-chart-factory'

import journalObj from './fixture/journal'
import chartObj from './fixture/chart'

export let journal = new JournalFactory(new AccountTypeChartFactory().createFromObject(chartObj)).createFromArray(journalObj)