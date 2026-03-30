import { loadFirst } from "./yaml.js";
import { AccountTypeChart } from "../domain.js";

/**
 * Creates the chart model from the yaml buffer.
 * @param {Buffer} chartYaml The chart yaml byte buffer
 * @return {AccountTypeChart}
 */
export default (chartYaml) =>
  new AccountTypeChart.Factory().createFromObject(loadFirst(chartYaml));
