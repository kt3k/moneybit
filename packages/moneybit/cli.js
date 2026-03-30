#!/usr/bin/env node

import minimist from "minimist";
import { errorExit } from "./util/index.js";
import ledger from "./actions/ledger.js";
import bs from "./actions/bs.js";
import monthly from "./actions/monthly.js";
import monthlyLedger from "./actions/monthly-ledger.js";
import help from "./actions/help.js";
import version from "./actions/version.js";

const actions = {
  ledger,
  bs,
  monthly,
  "monthly-ledger": monthlyLedger,
  help,
  version,
};

const argv = minimist(process.argv.slice(2));

const {
  v,
  version: ver,
  h,
  help: hlp,
  _: [action],
} = argv;

if (v || ver) {
  version();
} else if (h || hlp) {
  help(argv);
} else if (action && actions[action]) {
  actions[action](argv);
} else {
  errorExit(`No such action: ${action}`);
}
