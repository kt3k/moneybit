---
name: Account
desc: Account represents a debit or credit in a trade.
src: https://github.com/kt3k/moneybit/blob/master/packages/moneybit-domain/account.js
edit: https://github.com/kt3k/moneybit/blob/master/packages/moneybit-domain/account.md
props:
- name: date
  type: moment
  desc: The date of the trade
- name: type
  type: AccountType
  desc: The type of the account
- name: amount
  type: Money
  desc: The amount of the account
- name: description
  type: string
  desc: The description of the account
- name: trade
  type: Trade
  desc: The trade which the account belongs
---

Account represents a debit or credit in a trade.
