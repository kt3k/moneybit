# ledgerman v0.3.0

> A Cli tool for creating a general ledger from the journal.

# How to use

First, install the cli by the following command:

    npm install -g ledgerman

This installs `ldm` command.

Then:

    ldm --chart chart.yml --journal journal.yml

This outputs the general ledger in yaml format to stdout. See the below for the detail of the format.

# Journal YAML

The journal is the series of trades in chronological order. Each trade has to have the following format

```yml
- id: 1001
  date: 2015-01-05
  desc: Start the business
  dr:
    Cash in bank: 1000
  cr:
    Capital: 1000
```

- `id` is an arbitrary number and has to be unique in the journal.
- `date` is the date of the trade.
- `desc` is the description of the trade.
- `dr` means the debits of the trade.
  - `dr` has at least one account. In this case, it has `Cash in bank` account with the amount `1000`.
  - `dr` can have multiple accounts.
- `cr` means the credits of the trade.
  - `cr` has at least one account. In this case, it has `Capital` account with the amount `1000`.
  - `cr` can have multiple accounts.
- The total amount of the credits and debits must be the same in a account.

# Chart YAML

This file defines which account belongs to which major account type. For example, the account `Sales` belongs `Revenue`, `Cash` belongs to `Asset` etc.

The format is like the following:

```yml
asset:
- Account receivable
- Cash in deposit
liability:
- Account payable
equity:
- Capital
revenue:
- Sales
expense:
- Freight
- Communications
- Business trip
- Library cost
```

# Ledger YAML

This is the output of this cli and represents the general ledger. The accounts in the input journal are collected by its account type and its major type. It has the following format.

```yml
asset:
  Cash in bank:
    total:
    accounts:
      - date: 2015-01-01
        desc: Start the business
        dr: 1000
        cor: Capital
        ref: 1001
liability: ...
equity: ...
revenue: ...
expense: ...
```

# CLI

The usage of cli is as follows:

    ldm --journal path/to/journal.yml --chart path/to/chart.yml

The default value for `--journal` option is `journal.yml` and the default for `--chart` is `chart.yml`.

# LICENSE

MIT
