# TODO
- enhance GeneralLedger
  - calculate total of each subledger by account type
- enhance AccountTypeChart warns when unknown account types are given
- cli to validate all account types are in the chart
- create BalanceSheet
- create IncomeStatement
- research CashFlowStatement
# DONE
- enhance GeneralLedger
  - separate the section by MajorAccountType
- rename JournalEntryFactory -> AccountFactory
- rename JournalEntry -> Account
- rename AccountFactory -> TradeFactory
- rename Account -> Trade
- rename JournalEntryType -> TradeSide
- creates enum MajorAccountType which represents Asset, Liability, Equity, Revenue, Expense
- creates enum JournalEntryType.CREDIT, JournalEntryType.DEBIT
- creates model AccountType which represents sales, cash, deposit
