import yaml from "js-yaml";
import moment from "moment";

import { AccountType } from "../domain.js";
import { DEFAULT_CHART_FILE } from "../const.js";
import {
  checkJournalFilePath,
  createChartFromYaml,
  createJournalFromYaml,
  errorExit,
  readFile,
} from "../util/index.js";

/**
 * @param {string} journal
 * @param {string} chart
 * @param {string} accountType The name of account type
 */
export default ({ _: [_action, journal, accountType], chart }) => {
  checkJournalFilePath(journal);

  if (accountType == null) {
    return errorExit(`<acctounType> is not specified`);
  }

  const journalYaml = readFile(journal);
  const chartYaml = readFile(chart || DEFAULT_CHART_FILE);

  const chartModel = createChartFromYaml(chartYaml);

  const type = new AccountType(accountType);

  const ledger = createJournalFromYaml(journalYaml).toLedger(chartModel);

  const subledger = ledger.getSubledgerByAccountType(type);

  const first = subledger.firstAccount().date;
  const last = subledger.lastAccount().date;

  const month = moment(first);
  let currentTotal = 0;
  const buffer = {};

  while (month.isBefore(last, "month") || month.isSame(last, "month")) {
    const subledgerByMonth = subledger.filterByMonth(month);

    const obj = (buffer[month.format("YYYY/MM")] = {});
    const total = subledgerByMonth.total().amount;
    obj[subledger.type.name] = total;
    currentTotal += total;
    obj.total = currentTotal;

    month.add(1, "month");
  }

  buffer.total = subledger.total().amount;

  console.log(yaml.dump(buffer));
};
