import { BalanceSheet } from "../domain.js";
import { DEFAULT_CHART_FILE } from "../const.js";
import {
  checkJournalFilePath,
  createChartFromYaml,
  createJournalFromYaml,
  readFile,
} from "../util/index.js";

const bsRepo = new BalanceSheet.Repository();

/**
 * Takes journal.yml and chart.yml path and creates the balance-sheet.yml.
 * @param {string} journalYaml The journal.yml
 * @param {string} chartYaml The chart.yml
 * @return {string} The ledger.yml string
 * @throws {Error} when the input yaml is broken
 */
export default function ({ _: [_action, journal], chart }) {
  checkJournalFilePath(journal);

  const journalYaml = readFile(journal);
  const chartYaml = readFile(chart || DEFAULT_CHART_FILE);

  const bs = createJournalFromYaml(journalYaml).toBalanceSheet(
    createChartFromYaml(chartYaml),
  );

  console.log(bsRepo.toYaml(bs));
}
