import { loadAll } from "./yaml.js";
import { Journal } from "../domain.js";

/**
 * Takes journal.yml and creates a journal model.
 * @param {string} journalYaml The journal.yml
 * @return {string} The ledger.yml string
 * @throws {Error} when the input yaml is broken
 */
export default (journalYaml) => {
  return new Journal.Factory().createFromArray(loadAll(journalYaml));
};
