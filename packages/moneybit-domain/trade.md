---
name: Trade
desc: Trade is a transation
props:
- name: id
  type: string
  desc: The id of the trade in a journal
- name: credits
  type: Credit[]
  desc: The credits of the trade
- name: debits
  type: Debit[]
  desc: The debits of the trade
---

Trade is a unit of data in a journal. The id have to be unique in a journal.
