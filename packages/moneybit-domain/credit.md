---
name: Credit
parent: Account
desc: The credit of a trade
src: https://github.com/kt3k/moneybit/blob/master/packages/moneybit-domain/credit.js
edit: https://github.com/kt3k/moneybit/blob/master/packages/moneybit-domain/credit.md
props:
- name: date
  type: moment
  desc: The date of the trade
- name: type
  type: AccountType
  desc: The type of the account
- name: amount
  type: Money
  desc: The amount of the credit
---
