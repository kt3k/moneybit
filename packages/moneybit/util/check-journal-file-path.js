import errorExit from "./error-exit.js";

/**
 * @param {string} journal journal.yml path
 */
export default (journal) => {
  if (journal == null) {
    return errorExit(`journal.yml is not specified`);
  }
};
