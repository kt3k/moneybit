# TODO
- create TradeValidationService
- create `ldm validate` to check all trades are valid
- create IncomeStatement which contains the summaries of Revenue, Expense
- create `ldm income` to show income statement as yaml
- research CashFlowStatement

# DONE
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
