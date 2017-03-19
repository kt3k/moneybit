# TODO

- use minimisted
- use minirocket
- add integration tests
- separate cli from this repo or separate core domain from this repo
- use lerna, oao, repo-man or yarn to do monorepo, will publish ledgerman(cli) and ledgerman-domain
- create TradeValidationService
  - Check if the trade balances i.e. total dr = total cr
  - Check account type is in the chart
  - Check date is valid
  - Check desc is not empty
  - Check trade has an id

- create `ldm validate` to check all trades are valid
- create IncomeStatement which contains the summaries of Revenue, Expense
- create `ldm income` to show income statement as yaml
- create Deduction model, deduction.yml
- research CashFlowStatement
- Change journal.yml as first parameter, not --journal option

# DONE
- stop babel, use node v6
- switch the linter to standard
- enhance cli to show monthly sales (Japanese tax declaration format requires these numbers)
- create BalanceSheet which contains the summuries of Equity, Asset and Liability
- enhance AccountFactory to throw error when it has no date
- enhance AccountFactory to throw error when its account type does not have the entry in the chart
- enhance AccountTypeChart warns when unknown account types are given
- enhance Ledger to show the total by major type
- enhance GeneralLedger
  - separate the section by MajorAccountType
  - calculate total of each subledger by account type
- rename JournalEntryFactory -> AccountFactory
- rename JournalEntry -> Account
- rename AccountFactory -> TradeFactory
- rename Account -> Trade
- rename JournalEntryType -> TradeSide
- creates enum MajorAccountType which represents Asset, Liability, Equity, Revenue, Expense
- creates enum JournalEntryType.CREDIT, JournalEntryType.DEBIT
- creates model AccountType which represents sales, cash, deposit
