---
name: AccountTypeChart
type: Entity
desc: The chart of the account types.
src: https://github.com/kt3k/moneybit/blob/master/packages/moneybit-domain/account-type-chart.js
edit: https://github.com/kt3k/moneybit/blob/master/packages/moneybit-domain/account-type-chart.md
props:
- name: id
  type: string
  desc: The id of the chart
- name: majorTypes
  type: Map<string, MajorAccountType>
  desc: The mapping from account type name to major account types
---

The chart of the account types.
