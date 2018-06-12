---
name: Journal
type: Entity
desc: Journal is a series of trades.
src: https://github.com/kt3k/moneybit/blob/master/packages/moneybit-domain/journal.js
edit: https://github.com/kt3k/moneybit/blob/master/packages/moneybit-domain/journal.md
props:
- name: id
  type: string
  desc: The id of the journal
- name: trades
  type: Trade[]
  desc: The trades which belong to the journal
---

Journal is a series of trades. Trades are usually in chronological order.

The ids of trades in a journal are all unique in the journal. They are not necessarily unique in the entire system.
