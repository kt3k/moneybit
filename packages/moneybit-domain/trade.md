---
name: Trade
type: ValueObject
desc: Trade is a transation
src: https://github.com/kt3k/moneybit/blob/master/packages/moneybit-domain/trade.js
edit: https://github.com/kt3k/moneybit/blob/master/packages/moneybit-domain/trade.md
props:
- name: id
  type: string
  desc: The (local) id of the trade in a journal
- name: date
  type: moment
  desc: The date of the trade
- name: description
  type: string
  desc: The description of the trade
- name: credits
  type: Credit[]
  desc: The credits of the trade
- name: debits
  type: Debit[]
  desc: The debits of the trade
---

Trade is a unit of data in a journal. The id have to be unique in a journal.
