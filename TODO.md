# TODO
- rename JournalEntry -> Account
- rename JournalEntryFactory -> AccountFactory
- rename Ledger -> GeneralLedger
- enhance GeneralLedger
  - calculate total of each subledger by account type
  - separate the section by MajorAccountType
- enhance AccountTypeChart warns when unknown account types are given
- cli to validate all account types are in the chart
- create BalanceSheet
- create IncomeStatement
- research CashFlowStatement
# DONE
- rename AccountFactory -> TradeFactory
- rename Account -> Trade
- rename JournalEntryType -> TradeSide
- creates enum MajorAccountType which represents Asset, Liability, Equity, Revenue, Expense
- creates enum JournalEntryType.CREDIT, JournalEntryType.DEBIT
- creates model AccountType which represents sales, cash, deposit
