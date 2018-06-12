---
name: Subledger
type: ValueObject
desc: Subledger is a component of a ledger which has accounts of the single account type
src: https://github.com/kt3k/moneybit/blob/master/packages/moneybit-domain/subledger.js
edit: https://github.com/kt3k/moneybit/blob/master/packages/moneybit-domain/subledger.md
props:
- name: type
  type: AccountType
  desc: The account type of the subledger
- name: majorType
  type: MajorAccountType
  desc: The major account type of the subledger
- name: accounts
  type: Account[]
  desc: The accounts which belong to the subledger
---
