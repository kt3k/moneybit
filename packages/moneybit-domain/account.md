---
name: Account
desc: Account represents a debit or credit in a trade.
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
---

Account represents a debit or credit in a trade.
