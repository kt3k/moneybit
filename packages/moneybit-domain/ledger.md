---
name: Ledger
type: ValueObject
desc: Ledger represents the general ledger of the account period of a journal.
src: https://github.com/kt3k/moneybit/blob/master/packages/moneybit-domain/ledger.js
edit: https://github.com/kt3k/moneybit/blob/master/packages/moneybit-domain/ledger.md
props:
- name: subledgers
  type: Subledger[]
  desc: The subledgers which belong to the ledger
---
