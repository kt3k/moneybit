---
name: MajorAccountType
desc: The major account type.
src: https://github.com/kt3k/moneybit/blob/master/packages/moneybit-domain/major-account-type.js
edit: https://github.com/kt3k/moneybit/blob/master/packages/moneybit-domain/major-account-type.md
props:
- name: name
  type: string
  desc: The name of the major account type
- name: side
  type: TradeSide
  desc: The side of the major account type. DEBIT or CREDIT.
---

MajorAccountType is basically one of ASSET, LIABILITY, EQUITY, REVENUE, EXPENSE.
